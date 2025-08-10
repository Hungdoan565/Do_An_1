(function() {
  document.addEventListener('DOMContentLoaded', function () {
    if (typeof firebase !== 'undefined' && firebase.database) {
      var db = firebase.database();
     // Lắng nghe realtime khi có thông báo mới
      db.ref('system_notifications').orderByChild('createdAt').limitToLast(1).on('value', function(snapshot) {
        const notifs = snapshot.val() || {};
        const notifArr = Object.entries(notifs).map(([id, n]) => ({ id, ...n }));
        if (!notifArr.length) return;
        const notif = notifArr.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))[0];
        let shown = 0;
        try {
          const shownObj = JSON.parse(localStorage.getItem('systemNotifShown') || '{}');
          shown = shownObj[notif.id] || 0;
        } catch {}
        if (shown >= 2) return;
        var bar = document.getElementById('systemNotificationBar');
        var text = document.getElementById('systemNotificationText');
        if (bar && text) {
          bar.style.display = 'block';
          bar.style.opacity = '0';
          bar.style.transform = 'translateY(-40px)';
          setTimeout(function() {
            bar.style.opacity = '1';
            bar.style.transform = 'translateY(0)';
          }, 100);
          text.textContent = notif.content;
          text.style.color = '#fff';
          text.style.display = 'inline-block';
          text.style.whiteSpace = 'nowrap';
           // Xóa giới hạn hiển thị 2 lần, luôn hiển thị khi có thông báo mới
          document.getElementById('closeNotificationBar').onclick = function() {
            bar.style.opacity = '0';
            setTimeout(function(){ bar.style.display = 'none'; }, 500);
          };
          setTimeout(function() {
            bar.style.opacity = '0';
            setTimeout(function(){ bar.style.display = 'none'; }, 500);
          }, 2500);
        }
      });
    }
  });
})();