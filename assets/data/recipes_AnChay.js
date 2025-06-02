const recipesAnChay = [
{
  "id": "banh-bao-chay",
  "title": "Bánh Bao Chay",
  "description": "Bánh bao chay là món điểm tâm lý tưởng, với lớp vỏ bánh mềm xốp, trắng ngần, cùng phần nhân rau củ tươi ngon, thanh đạm. Đây là lựa chọn hoàn hảo cho những ai yêu thích ẩm thực chay hoặc muốn có một bữa ăn nhẹ, bổ dưỡng.",
  "image": "/assets/images/mon-an/mon-chay/banhbaochay.jpg",
  "time": 50,
  "rating": 4.7,
  "ratingCount": 80,
  "author": "Chị Lan",
  "difficulty": "Trung bình",
  "calories": "280 kcal",
  "date": "02/06/2025",
  "tags": ["Món chay", "Điểm tâm", "Hấp", "Đường phố"],
  "ingredients": [
    "Bột mì đa dụng - 300g",
    "Men nở (instant yeast) - 5g",
    "Đường - 30g (cho vỏ bánh)",
    "Nước ấm - 150ml",
    "Dầu ăn - 1 thìa canh (cho vỏ bánh)",
    "Nấm hương khô - 50g (ngâm nở, thái hạt lựu)",
    "Mộc nhĩ khô - 50g (ngâm nở, thái sợi nhỏ)",
    "Cà rốt - 50g (thái hạt lựu)",
    "Đậu xanh cà vỏ - 50g (ngâm mềm, hấp chín, tán nhuyễn)",
    "Hành tây - 1/2 củ (băm nhỏ)",
    "Gia vị ướp nhân: hạt nêm chay, tiêu xay, dầu ăn",
    "Giấy nến hoặc lá chuối cắt vuông (để lót bánh)"
  ],
  "steps": [
    {
      "title": "Chuẩn bị nhân chay",
      "desc": "1. **Nấm hương, mộc nhĩ, cà rốt:** Ngâm nở mềm nấm hương, mộc nhĩ, rửa sạch, thái hạt lựu nhỏ. Cà rốt cũng thái hạt lựu.\n2. **Đậu xanh:** Ngâm mềm, hấp chín và tán nhuyễn.\n3. **Trộn nhân:** Phi thơm hành tây băm với chút dầu ăn. Cho nấm hương, mộc nhĩ, cà rốt vào xào chín. Thêm đậu xanh tán nhuyễn vào, nêm hạt nêm chay, tiêu xay. Đảo đều cho nhân hòa quyện và dậy mùi thơm. Để nguội."
    },
    {
      "title": "Nhào bột bánh",
      "desc": "1. Trong một âu lớn, trộn đều 300g bột mì, 30g đường và 5g men nở.\n2. Từ từ cho nước ấm và 1 thìa canh dầu ăn vào. Nhào bột đều tay khoảng 15-20 phút cho đến khi bột mịn, đàn hồi, không còn dính tay. Bọc kín âu bột và ủ ở nơi ấm áp khoảng 45-60 phút cho bột nở gấp đôi."
    },
    {
      "title": "Gói bánh bao",
      "desc": "1. Lấy bột đã ủ ra, nhào sơ lại một lần nữa cho thoát bọt khí. Chia bột thành các phần bằng nhau (khoảng 50-60g mỗi phần).\n2. Lấy từng viên bột, dùng cây cán bột cán dẹt thành hình tròn, dày ở giữa và mỏng dần về phía mép.\n3. Đặt một lượng nhân chay vừa đủ vào giữa miếng bột. Gấp mép bột lại và túm chặt thành hình tròn, hoặc tạo hình xếp ly tùy thích. Đặt bánh lên miếng giấy nến hoặc lá chuối đã cắt vuông."
    },
    {
      "title": "Hấp bánh bao",
      "desc": "1. Xếp bánh bao vào xửng hấp, đảm bảo có khoảng cách giữa các bánh để bánh có không gian nở.\n2. Đun sôi nước trong nồi hấp. Khi nước sôi mạnh, cho xửng bánh vào hấp. Hấp bánh bao trong khoảng 20-25 phút với lửa lớn. Bánh chín là khi vỏ bánh trắng, căng phồng và nhân chín đều."
    },
    {
      "title": "Thưởng thức",
      "desc": "Bánh bao chay nên dùng nóng để cảm nhận trọn vẹn hương vị mềm xốp của vỏ bánh và thanh đạm của nhân. Có thể ăn kèm với tương ớt hoặc nước tương tùy thích."
    }
  ],
  "comments": [
    {
      "user": "Nguyễn Văn A",
      "avatar": "/assets/images/users/user-1.jpg",
      "rating": 5,
      "text": "Bánh bao chay nhân nhiều, vị ngon, rất thích hợp cho bữa ăn nhẹ."
    },
    {
      "user": "Lê Thị B",
      "avatar": "/assets/images/users/user-2.jpg",
      "rating": 4,
      "text": "Món này ăn không bị ngán, lại bổ dưỡng, rất tốt cho sức khỏe."
    }
  ],
  "related": [
    {
      "id": "dau-hu-sot-ca-chua",
      "title": "Đậu Hũ Sốt Cà Chua",
      "image": "/assets/images/mon-an/mon-chay/dauhu.jpg",
      "description": "Đậu hũ sốt cà chua là món chay đơn giản nhưng hấp dẫn. Đậu hũ chiên vàng, mềm, quyện vị chua ngọt của sốt cà chua đậm đà, dễ ăn.",
      "time": 25,
      "rating": 4.7
    },
    {
      "id": "canh-nam-rong-bien",
      "title": "Canh Nấm Rong Biển",
      "image": "/assets/images/mon-an/mon-chay/canhnamrongbien.jpg",
      "description": "Canh nấm rong biển thanh mát, bổ dưỡng, vị ngọt tự nhiên, dễ nấu, thích hợp cho bữa cơm thanh đạm.",
      "time": 30,
      "rating": 4.8
    }
  ]
},
  {
  "id": "dau-hu-sot-ca-chua",
  "title": "Đậu Hũ Sốt Cà Chua",
  "description": "Đậu hũ sốt cà chua là món ăn chay đơn giản nhưng vô cùng hấp dẫn và đưa cơm. Đậu hũ chiên vàng bên ngoài, mềm bên trong, hòa quyện với vị chua ngọt của sốt cà chua đậm đà, tạo nên hương vị hài hòa, dễ ăn.",
  "image": "/assets/images/mon-an/mon-chay/dauhu.jpg",
  "time": 25,
  "rating": 4.7,
  "ratingCount": 45,
  "author": "Cô Mai",
  "difficulty": "Dễ",
  "calories": "180 kcal",
  "date": "20/05/2024",
  "tags": ["Món chay", "Món chính", "Đơn giản", "Nhanh chóng"],
  "ingredients": [
    "Đậu hũ non hoặc đậu hũ trắng - 2 bìa (khoảng 500g)",
    "Cà chua - 3 quả (chọn quả chín mọng)",
    "Hành lá - 2-3 nhánh",
    "Hành tím - 1 củ (băm nhỏ)",
    "Dầu ăn - đủ để chiên đậu và làm sốt",
    "Gia vị: muối, đường, hạt nêm (chay hoặc mặn), tiêu xay"
  ],
  "steps": [
    {
      "title": "Sơ chế và chiên đậu hũ",
      "desc": "1. **Đậu hũ:** Rửa nhẹ nhàng, cắt thành miếng vuông hoặc chữ nhật vừa ăn (khoảng 3-4cm). Dùng giấy thấm khô nước trên bề mặt đậu.\n2. **Chiên đậu hũ:** Làm nóng chảo với lượng dầu ăn đủ để ngập 1/2 miếng đậu. Khi dầu nóng, cho đậu hũ vào chiên vàng đều các mặt. Vớt ra đĩa có lót giấy thấm dầu để loại bỏ dầu thừa."
    },
    {
      "title": "Nấu sốt cà chua",
      "desc": "1. **Cà chua:** Rửa sạch, khứa nhẹ hình chữ thập ở đáy, trụng qua nước sôi khoảng 30 giây rồi bóc vỏ, bỏ hạt, băm nhỏ hoặc thái hạt lựu. Có thể dùng máy xay sinh tố xay nhuyễn.\n2. **Làm sốt:** Phi thơm hành tím băm với một chút dầu ăn trong chảo đã chiên đậu (chắt bớt dầu). Cho cà chua đã sơ chế vào xào, dằm nát. Nêm 1/2 thìa cà phê muối, 1 thìa cà phê đường, 1/2 thìa cà phê hạt nêm. Đảo đều cho cà chua chín nhuyễn và sốt sánh lại. Có thể thêm chút nước lọc nếu sốt quá đặc."
    },
    {
      "title": "Sốt đậu hũ và hoàn thành",
      "desc": "1. Cho đậu hũ đã chiên vàng vào chảo sốt cà chua. Đảo nhẹ nhàng để đậu hũ thấm đều sốt, tránh làm nát đậu. Đun nhỏ lửa khoảng 3-5 phút cho đậu hũ ngấm gia vị.\n2. Nêm nếm lại cho vừa ăn. Rắc hành lá thái nhỏ và chút tiêu xay lên trên.\n3. Múc đậu hũ sốt cà chua ra đĩa, dùng nóng với cơm trắng, đặc biệt ngon khi ăn kèm một chút dưa chuột hoặc rau sống."
    }
  ],
  "comments": [
    {
      "user": "Thu Hà",
      "avatar": "/assets/images/users/user-23.jpg",
      "rating": 5,
      "text": "Đậu hũ mềm, sốt cà chua đậm đà, ăn với cơm rất ngon!"
    }
  ],
  "related": [
    {
      "id": "canh-nam-rong-bien",
      "title": "Canh Nấm Rong Biển",
      "image": "/assets/images/mon-an/mon-chay/canhnamrongbien.jpg",
      "description": "Canh nấm rong biển thanh mát, bổ dưỡng, vị ngọt tự nhiên, dễ nấu, thích hợp cho bữa cơm thanh đạm.",
      "time": 30,
      "rating": 4.8
    },
    {
      "id": "ca-tim-kho-to",
      "title": "Cà Tím Kho Tộ",
      "image": "/assets/images/mon-an/mon-chay/catimkho.jpg",
      "description": "Cà tím kho tộ đậm đà hương vị truyền thống, cà tím mềm thơm, thấm đẫm gia vị, ăn cùng cơm trắng rất đưa miệng.",
      "time": 35,
      "rating": 4.7
    }
  ]
},
{
  "id": "canh-nam-rong-bien",
  "title": "Canh Nấm Rong Biển",
  "description": "Canh nấm rong biển là món ăn thanh mát, bổ dưỡng, rất tốt cho sức khỏe. Nước dùng ngọt tự nhiên từ nấm và rong biển, vị thanh dịu, dễ ăn, thích hợp cho bữa cơm hàng ngày hoặc những ai yêu thích ẩm thực chay.",
  "image": "/assets/images/mon-an/mon-chay/canhnamrongbien.jpg",
  "time": 30,
  "rating": 4.8,
  "ratingCount": 50,
  "author": "Chị Lan",
  "difficulty": "Dễ",
  "calories": "150 kcal",
  "date": "02/06/2025",
  "tags": ["Món chay", "Món canh", "Thanh đạm", "Bổ dưỡng"],
  "ingredients": [
    "Rong biển khô - 20g",
    "Nấm rơm - 150g (hoặc nấm kim châm, nấm đùi gà)",
    "Đậu phụ non - 1 bìa (tùy chọn)",
    "Gừng - 1 củ nhỏ (thái lát)",
    "Hành lá, ngò rí",
    "Gia vị: muối, hạt nêm (chay), tiêu xay, dầu mè"
  ],
  "steps": [
    {
      "title": "Sơ chế rong biển và nấm",
      "desc": "1. **Rong biển:** Ngâm rong biển khô vào nước lạnh khoảng 15-20 phút cho nở mềm. Rửa sạch lại nhiều lần dưới vòi nước để loại bỏ cát và giảm độ mặn. Thái rong biển thành miếng vừa ăn.\n2. **Nấm:** Nấm rơm cắt bỏ gốc, rửa sạch, chẻ đôi hoặc ba. Các loại nấm khác cũng sơ chế tương tự."
    },
    {
      "title": "Nấu canh",
      "desc": "1. Làm nóng nồi, cho một chút dầu ăn. Phi thơm vài lát gừng và gốc hành lá (nếu dùng). \n2. Cho nấm vào xào sơ khoảng 2-3 phút. Sau đó, thêm khoảng 1-1.2 lít nước lọc vào nồi. Đun sôi.\n3. Khi nước sôi, cho rong biển đã sơ chế vào. Nêm nếm gia vị với muối, hạt nêm (chay) cho vừa ăn. Đun thêm khoảng 5-7 phút cho rong biển chín mềm và các nguyên liệu hòa quyện."
    },
    {
      "title": "Hoàn thành và thưởng thức",
      "desc": "Trước khi tắt bếp, nếu dùng đậu phụ non, cho đậu phụ đã thái miếng vào. Rắc hành lá, ngò rí thái nhỏ và chút tiêu xay lên trên. Có thể thêm vài giọt dầu mè để tăng hương thơm. Dùng canh nấm rong biển nóng với cơm trắng."
    }
  ],
  "comments": [
    {
      "user": "Minh Thư",
      "avatar": "/assets/images/users/user-25.jpg",
      "rating": 5,
      "text": "Canh thanh mát, dễ ăn, rất tốt cho sức khỏe!"
    },
    {
      "user": "Quang Huy",
      "avatar": "/assets/images/users/user-26.jpg",
      "rating": 4,
      "text": "Vị ngọt tự nhiên, món này ai cũng thích."
    }
  ],
  "related": [
    {
      "id": "dau-hu-sot-ca-chua",
      "title": "Đậu Hũ Sốt Cà Chua",
      "image": "/assets/images/mon-an/mon-chay/dauhu.jpg",
      "description": "Đậu hũ sốt cà chua là món chay đơn giản nhưng hấp dẫn. Đậu hũ chiên vàng, mềm, quyện vị chua ngọt của sốt cà chua đậm đà, dễ ăn.",
      "time": 25,
      "rating": 4.7
    },
    {
      "id": "ca-tim-kho-to",
      "title": "Cà Tím Kho Tộ",
      "image": "/assets/images/mon-an/mon-chay/catimkho.jpg",
      "description": "Cà tím kho tộ đậm đà hương vị truyền thống, cà tím mềm thơm, thấm đẫm gia vị, ăn cùng cơm trắng rất đưa miệng.",
      "time": 35,
      "rating": 4.7
    }
  ]
},
  {
  "id": "ca-tim-kho-to",
  "title": "Cà Tím Kho Tộ",
  "description": "Cà tím kho tộ là món ăn dân dã, đậm đà hương vị miền quê, được yêu thích bởi cà tím mềm nhừ, thấm đẫm nước sốt sánh keo, thơm lừng. Món này khi ăn cùng cơm trắng nóng hổi thì vô cùng đưa miệng, thích hợp cho bữa cơm gia đình.",
  "image": "/assets/images/mon-an/mon-chay/catimkho.jpg",
  "time": 35,
  "rating": 4.7,
  "ratingCount": 65,
  "author": "Chú Bình",
  "difficulty": "Dễ",
  "calories": "250 kcal",
  "date": "02/06/2025",
  "tags": ["Món chay", "Món chính", "Kho", "Đậm đà"],
  "ingredients": [
    "Cà tím - 2 quả (chọn quả tươi, không quá già)",
    "Đậu phụ chiên sẵn hoặc đậu phụ trắng - 1 bìa (tùy chọn)",
    "Hành tím - 2 củ (băm nhỏ)",
    "Tỏi - 2 tép (băm nhỏ)",
    "Ớt tươi - 1-2 quả (tùy chọn, thái lát)",
    "Nước mắm chay - 3 thìa canh (hoặc nước tương)",
    "Đường - 2 thìa canh (để làm nước màu và nêm nếm)",
    "Tiêu xay - 1/2 thìa cà phê",
    "Dầu ăn - 1 thìa canh",
    "Nước màu (nước hàng) - 1 thìa cà phê (tùy chọn)",
    "Nước lọc - 100-150ml",
    "Hành lá - vài nhánh (thái nhỏ)"
  ],
  "steps": [
    {
      "title": "Sơ chế cà tím",
      "desc": "Cà tím rửa sạch, cắt khúc vừa ăn (khoảng 4-5cm). Ngâm cà tím vào nước muối loãng khoảng 10-15 phút để cà không bị thâm và bớt chát. Sau đó vớt ra, rửa lại thật sạch và để ráo nước."
    },
    {
      "title": "Làm nước màu và kho cà tím",
      "desc": "1. **Làm nước màu:** Đặt nồi hoặc tộ lên bếp, cho 2 thìa canh đường và 1 thìa canh nước lọc vào. Đun trên lửa nhỏ, khuấy đều cho đường tan chảy và chuyển sang màu cánh gián đẹp mắt. Nhanh tay tắt bếp và cho thêm khoảng 2-3 thìa canh nước lọc vào để dừng quá trình tạo màu.\n2. **Phi thơm:** Cho 1 thìa canh dầu ăn vào nồi, phi thơm hành tím và tỏi băm. Cho ớt thái lát (nếu dùng) vào xào sơ.\n3. **Kho cà tím:** Cho cà tím đã ráo vào nồi. Đổ phần nước màu đã làm, nước mắm chay (hoặc nước tương), tiêu xay vào. Đảo nhẹ nhàng cho cà tím thấm gia vị. Đổ thêm khoảng 100-150ml nước lọc xâm xấp mặt cà. Nếu dùng đậu phụ chiên, cho vào cùng lúc này."
    },
    {
      "title": "Hoàn thành",
      "desc": "Đun sôi nồi kho, sau đó hạ lửa thật nhỏ, đậy nắp và kho liu riu trong khoảng 20-25 phút cho cà tím mềm nhừ, thấm đều gia vị và nước sốt sánh lại. Nêm nếm lại gia vị cho vừa ăn. Rắc hành lá thái nhỏ và chút tiêu xay lên trên. Dùng nóng với cơm trắng."
    }
  ],
  "comments": [
    {
      "user": "Lan Anh",
      "avatar": "/assets/images/users/user-27.jpg",
      "rating": 5,
      "text": "Cà tím kho mềm, đậm đà, ăn với cơm ngon tuyệt!"
    },
    {
      "user": "Minh Quân",
      "avatar": "/assets/images/users/user-28.jpg",
      "rating": 4,
      "text": "Món chay nhưng rất bắt cơm, gia đình tôi rất thích."
    }
  ],
  "related": [
    {
      "id": "dau-hu-sot-ca-chua",
      "title": "Đậu Hũ Sốt Cà Chua",
      "image": "/assets/images/mon-an/mon-chay/dauhu.jpg",
      "description": "Đậu hũ sốt cà chua là món chay đơn giản nhưng hấp dẫn. Đậu hũ chiên vàng, mềm, quyện vị chua ngọt của sốt cà chua đậm đà, dễ ăn.",
      "time": 25,
      "rating": 4.7
    },
    {
      "id": "canh-nam-rong-bien",
      "title": "Canh Nấm Rong Biển",
      "image": "/assets/images/mon-an/mon-chay/canhnamrongbien.jpg",
      "description": "Canh nấm rong biển thanh mát, bổ dưỡng, vị ngọt tự nhiên, dễ nấu, thích hợp cho bữa cơm thanh đạm.",
      "time": 30,
      "rating": 4.8
    }
  ]
}
] 
  