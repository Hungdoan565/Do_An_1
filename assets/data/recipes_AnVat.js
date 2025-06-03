const recipesAnVat= [
    {
    "id": "banh-trang-tron",
    "title": "Bánh Tráng Trộn",
    "description": "Bánh tráng trộn Sài Gòn dai ngon, vị chua cay mặn ngọt, kết hợp xoài xanh, khô bò, trứng cút, đậu phộng, rau răm hấp dẫn",
    "image": "/assets/images/mon-an/an-vat/banhtrangtron.jpg",
    "time": 15,
    "rating": 4.8,
    "ratingCount": 90,
    "author": "Bạn Trẻ Sài Gòn",
    "difficulty": "Dễ",
    "calories": "250 kcal",
    "date": "25/05/2024",
    "tags": ["Ăn vặt", "Đường phố"],
    "ingredients": [
      "Bánh tráng - 200g",
    "Xoài xanh - 1 quả",
    "Khô bò - 50g",
    "Trứng cút - 10 quả",
    "Rau răm - 20g",
    "Đậu phộng - 30g",
    "Sốt trộn (tương ớt, me, tỏi)",
    "Gia vị: muối, đường, chanh"
    ],
    "steps": [
  {
    "title": "Chuẩn bị nguyên liệu",
    "desc": "**Bánh tráng**: Cắt thành sợi rộng 1cm, ngâm nước lạnh 3 phút cho mềm vừa. **Xoài**: Chọn xoài giòn, gọt vỏ bào sợi dài 5cm. **Khô bò**: Xé thành sợi nhỏ theo thớ dọc. **Trứng cút**: Luộc chín 5 phút, ngâm nước đá để bóc vỏ dễ."
  },
  {
    "title": "Pha sốt đặc biệt",
    "desc": "1. **Sốt me**: Ngâm 30g me với 50ml nước ấm, dầm kỹ lọc bỏ hạt\n2. **Hỗn hợp sốt**: 2 thìa tương ớt Huế + 1 thìa nước me + 1 thìa đường + 1/2 thìa tỏi băm + 1 thìa nước cốt chanh + 1/2 thìa bột ngọt. Khuấy đều cho đường tan hoàn toàn."
  },
  {
    "title": "Kỹ thuật trộn",
    "desc": "1. Cho bánh tráng vào tô lớn, rưới từ từ 2/3 sốt, dùng tay (đeo găng) bóp đều để sốt thấm\n2. Thêm xoài, khô bò, trứng cút bổ đôi vào trộn nhẹ bằng muỗng gỗ\n3. Rưới sốt còn lại lên mặt, đảo nhẹ 2-3 lần"
  },
  {
    "title": "Trình bày chuẩn street food",
    "desc": "1. Xếp vào đĩa giấy bạc, rắc đậu phộng rang giã dối + rau răm cắt khúc 2cm\n2. Vắt thêm 1/4 quả chanh tươi khi ăn\n3. Dùng ngay để tránh bánh bị ỉu"
  }
],
    "comments": [
      {"user": "Ngọc Anh", "avatar": "/assets/images/users/user-26.jpg", "rating": 5, "text": "Bánh tráng trộn ngon, vị chua cay rất vừa miệng!"},
      {"user": "Hà My", "avatar": "/assets/images/users/user-27.jpg", "rating": 4, "text": "Món ăn vặt yêu thích, ăn kèm với xoài rất ngon!"},
      {"user": "Thanh Tâm", "avatar": "/assets/images/users/user-28.jpg", "rating": 5, "text": "Bánh tráng trộn đúng vị Sài Gòn, rất thích!"}
    ],
    "related": [
      {"id": "khoai-tay-chien", "title": "Khoai Tây Chiên", "image": "/assets/images/mon-an/an-vat/khoaitaychien.jpg", "description": "Khoai tây chiên giòn rụm, vàng ươm, ăn kèm tương ớt hoặc sốt mayonnaise", "time": 20, "rating": 4.7},
      {"id": "banh-trang-nuong", "title": "Bánh Tráng Nướng", "image": "/assets/images/mon-an/an-vat/banhtrangnuong.jpg", "description": "Bánh tráng nướng Đà Lạt giòn rụm, topping đa dạng, sốt mayonnaise béo ngậy", "time": 15, "rating": 4.8},
        {"id": "bap-xao-bo", "title": "Bắp Xào Bơ", "image": "/assets/images/mon-an/an-vat/bapxao.jpg", "description": "Bắp xào bơ thơm ngậy, ngô ngọt, tôm khô, hành lá hấp dẫn", "time": 15, "rating": 4.7} 
    ]
  },
  {
  "id": "khoai-tay-chien",
  "title": "Khoai Tây Chiên",
  "description": "Khoai tây chiên giòn rụm, vàng ươm, mềm bùi bên trong, ăn kèm tương ớt hoặc mayonnaise, món ăn vặt phổ biến, dễ làm, phù hợp mọi lứa tuổi.",
  "image": "/assets/images/mon-an/an-vat/khoaitaychien.jpg",
  "time": 20,
  "rating": 4.7,
  "ratingCount": 450,
  "author": "Anh Tuấn",
  "difficulty": "Dễ",
  "calories": "350 kcal",
  "date": "02/06/2025",
  "tags": ["Ăn vặt", "Chiên", "Phổ biến", "Nhanh gọn"],
  "ingredients": [
    "Khoai tây - 500g (chọn củ đều, không mọc mầm)",
    "Dầu ăn - đủ để chiên ngập dầu",
    "Muối - 1/2 thìa cà phê",
    "Tương ớt, tương cà, sốt mayonnaise (để chấm)"
  ],
  "steps": [
    {
      "title": "Sơ chế khoai tây",
      "desc": "1. Khoai tây gọt vỏ, rửa sạch.\n2. Thái khoai tây thành các thanh dài khoảng 1cm hoặc hình múi cau tùy thích. Đảm bảo các miếng khoai có độ dày tương đối đồng đều để khi chiên chín đều.\n3. Ngâm khoai tây đã thái vào nước lạnh pha chút muối khoảng 15-30 phút để loại bỏ tinh bột thừa, giúp khoai giòn hơn. Sau đó vớt ra, rửa sạch lại và để thật ráo nước. Bạn có thể dùng khăn sạch hoặc giấy ăn để thấm khô hoàn toàn bề mặt khoai."
    },
    {
      "title": "Chiên khoai tây (hai lần để giòn lâu)",
      "desc": "1. Đặt chảo sâu lòng hoặc nồi lên bếp, cho lượng dầu ăn đủ để chiên ngập khoai vào đun nóng ở lửa vừa (khoảng 150°C).\n2. **Chiên lần 1:** Cho từng mẻ khoai tây vào chiên sơ khoảng 5-7 phút cho khoai chín mềm, vỏ hơi săn lại và chuyển màu vàng nhạt. Không chiên quá vàng ở lần này. Vớt khoai ra, để ráo dầu và trải ra đĩa có lót giấy thấm dầu cho nguội hoàn toàn.\n3. **Chiên lần 2 (trước khi ăn):** Khi khoai đã nguội và bạn muốn ăn, đun nóng dầu ăn lại ở lửa lớn hơn (khoảng 170-180°C). Cho khoai tây đã chiên lần 1 vào chiên lại. Chiên nhanh khoảng 3-5 phút cho đến khi khoai vàng ruộm, giòn tan và đẹp mắt. Vớt ra ngay."
    },
    {
      "title": "Thưởng thức",
      "desc": "1. Sau khi vớt khoai tây chiên lần 2, rắc ngay một chút muối tinh lên khi khoai còn nóng để muối bám đều.\n2. Bày khoai tây chiên ra đĩa. Thưởng thức ngay khi còn nóng hổi để đảm bảo độ giòn ngon nhất.\n3. Ăn kèm với tương ớt, tương cà chua hoặc sốt mayonnaise tùy theo sở thích của bạn."
    }
  ],
  "related": [
    {
      "id": "nem-chua-ran",
      "title": "Nem Chua Rán",
      "image": "/assets/images/mon-an/an-vat/nemchua.jpg",
      "description": "Nem chua rán giòn rụm, vị chua cay, ăn kèm dưa leo và tương ớt",
      "time": 25,
      "rating": 4.7
    },
    {
      "id": "banh-chuoi-chien",
      "title": "Bánh Chuối Chiên",
      "image": "/assets/images/mon-an/an-vat/banhchuoichien.jpg",
      "description": "Bánh chuối chiên vàng giòn, thơm mùi chuối chín, ăn vặt hấp dẫn",
      "time": 20,
      "rating": 4.7
    },
    {
      "id": "bap-xao-bo",
      "title": "Bắp Xào Bơ",
      "image": "/assets/images/mon-an/an-vat/bapxao.jpg",
      "description": "Bắp xào bơ thơm ngậy, ngô ngọt, tôm khô, hành lá hấp dẫn",
      "time": 15,
      "rating": 4.7
    }
  ]
},
  {
  "id": "banh-trang-nuong",
  "title": "Bánh Tráng Nướng Đà Lạt",
  "description": "Bánh tráng nướng Đà Lạt giòn rụm, topping đa dạng như trứng cút, xúc xích, phô mai, sốt mayonnaise béo ngậy, đậm chất ẩm thực đường phố.",
  "image": "/assets/images/mon-an/an-vat/banhtrangnuong.jpg",
  "time": 15,
  "rating": 4.8,
  "ratingCount": 68,
  "author": "Chị Mai",
  "difficulty": "Dễ",
  "calories": "210 kcal",
  "date": "27/05/2024",
  "tags": ["Ăn vặt", "Đà Lạt"],
  "ingredients": [
    "Bánh tráng loại dày (20cm) - 1 cái",
    "Trứng cút - 2 quả",
    "Xúc xích Đức - 1/2 cây",
    "Phô mai Mozzarella - 10g",
    "Ruốc tôm - 1 thìa",
    "Hành phi - 1 thìa",
    "Sốt mayonnaise - 15ml",
    "Tương ớt - 5ml",
    "Bơ lạt - 5g",
    "Rau mùi - 2 nhánh"
  ],
  "steps": [
    {
      "title": "Chuẩn bị nguyên liệu",
      "desc": "1. **Bánh tráng**: Chọn loại dày 2mm, đường kính 20cm\n2. **Xúc xích**: Thái lát chéo dày 3mm\n3. **Trứng cút**: Đập ra bát, đánh tan lòng đỏ + trắng\n4. **Phô mai**: Bào sợi mỏng"
    },
    {
      "title": "Kỹ thuật nướng bánh",
      "desc": "1. **Làm nóng lò than**: Để than hồng đều, đặt vỉ nướng cách than 15cm\n2. **Quét lớp bơ**: Dùng chổi silicon phết đều bơ lạt lên mặt bánh\n3. **Nướng sơ**: Đặt bánh lên vỉ 30 giây cho mặt dưới hơi giòn"
    },
    {
      "title": "Rải topping chuẩn Đà Lạt",
      "desc": "1. **Lớp 1**: Rưới đều trứng cút lên mặt bánh bằng muỗng cafe\n2. **Lớp 2**: Xếp xúc xích theo hình xoắn ốc\n3. **Lớp 3**: Rắc phô mai + ruốc tôm\n4. **Lớp 4**: Dùng túi bắt kem tạo hình sốt mayonnaise zic-zac"
    },
    {
      "title": "Hoàn thiện và trình bày",
      "desc": "1. **Nướng lần cuối**: Để bánh gần than 1 phút cho phô mai chảy\n2. **Tạo vị**: Rưới 3 giọt tương ớt theo hình tam giác\n3. **Trang trí**: Rắc hành phi + rau mùi cắt nhuyễn\n4. **Cắt bánh**: Dùng dao pizza cắt 6 miếng tam giác đều"
    }
  ],
  "comments": [
    {
      "user": "Kim Ngân",
      "avatar": "/assets/images/users/user-28.jpg",
      "rating": 5,
      "text": "Bánh giòn tan, phô mai kéo sợi chuẩn như ở Đà Lạt! Topping cân đối hương vị."
    },
    {
      "user": "Trần Đức",
      "avatar": "/assets/images/users/user-29.jpg",
      "rating": 4,
      "text": "Lần đầu làm thành công nhờ hướng dẫn chi tiết, chỉ cần điều chỉnh lửa nhỏ hơn để bánh không cháy mép."
    }
  ],
  "related": [
    {
      "id": "banh-trang-tron",
      "title": "Bánh Tráng Trộn",
      "image": "/assets/images/mon-an/an-vat/banhtrangtron.jpg",
      "description": "Bánh tráng trộn Sài Gòn, dai ngon, vị chua cay mặn ngọt hấp dẫn",
      "time": 15,
      "rating": 4.8
    },
    {
      "id": "banh-da-kep-kem",
      "title": "Bánh Đa Kẹp Kem",
        "image": "/assets/images/mon-an/trang-mieng/banhdakepkem.jpg",
      "description": "Bánh đa nướng kẹp kem mát lạnh - đặc sản Đà Lạt",
      "time": 10,
      "rating": 4.7
    },
    {
      "id": "cha-gio",
      "title": "Chả Giò",
      "image": "/assets/images/mon-an/khai-vi/chagio.jpg",
      "description": "Chả giò vàng giòn, nhân thịt và rau củ, ăn kèm bún và rau sống",
      "time": 40,
      "rating": 4.8
    }
  ]
},
{
  "id": "chagio",
  "title": "Chả Giò",
  "description": "Chả giò vàng giòn, nhân thịt băm, tôm, miến, mộc nhĩ, rau củ, ăn kèm bún, rau sống và nước mắm chua ngọt đậm đà.",
  "image": "/assets/images/mon-an/khai-vi/chagio.jpg",
  "time": 40,
  "rating": 4.8,
  "ratingCount": 320,
  "author": "Cô Mai",
  "difficulty": "Trung bình",
  "calories": "420 kcal",
  "date": "02/06/2025",
  "tags": ["Ăn vặt", "Chiên", "Truyền thống", "Món mặn"],
  "ingredients": [
    "Thịt nạc vai băm - 300g",
    "Tôm tươi - 100g (bóc vỏ, băm nhỏ)",
    "Trứng gà - 1 quả",
    "Miến dong - 50g (ngâm mềm, cắt khúc ngắn)",
    "Mộc nhĩ, nấm hương - 20g (ngâm nở, thái sợi nhỏ)",
    "Hành tây - 1/2 củ (thái hạt lựu)",
    "Cà rốt - 1/2 củ (thái sợi hoặc băm nhỏ)",
    "Hành khô - 1 củ (băm nhỏ)",
    "Bánh đa nem (vỏ ram) - khoảng 30-40 lá",
    "Gia vị: Nước mắm, đường, tiêu, hạt nêm, dầu hào (tùy chọn)",
    "Dầu ăn - đủ để chiên ngập dầu",
    "Rau sống ăn kèm: Xà lách, rau thơm các loại (kinh giới, tía tô, húng quế)",
    "Bún tươi - 300g",
    "Nước mắm chua ngọt (để chấm)"
  ],
  "steps": [
    {
      "title": "Sơ chế và trộn nhân",
      "desc": "1. **Tôm tươi:** Bóc vỏ, bỏ chỉ đen, rửa sạch, băm nhỏ. **Thịt nạc vai:** Để ráo.\n2. **Rau củ:** Miến dong ngâm mềm, cắt ngắn. Mộc nhĩ, nấm hương ngâm nở, rửa sạch, thái sợi. Hành tây, cà rốt thái hạt lựu hoặc thái sợi nhỏ. Hành khô băm nhỏ.\n3. **Trộn nhân:** Trong một tô lớn, cho thịt băm, tôm băm, trứng gà, miến, mộc nhĩ, nấm hương, hành tây, cà rốt, hành khô vào. Nêm 2 thìa canh nước mắm, 1 thìa cà phê đường, 1 thìa cà phê hạt nêm, 1/2 thìa cà phê tiêu (có thể thêm 1 thìa cà phê dầu hào).\n4. Trộn đều tất cả các nguyên liệu và ướp khoảng 15-20 phút cho nhân ngấm gia vị."
    },
    {
      "title": "Gói chả giò",
      "desc": "1. Trải bánh đa nem ra mặt phẳng sạch. Có thể làm mềm bánh đa nem bằng cách phết một lớp mỏng hỗn hợp nước lọc pha chút giấm hoặc bia để bánh dễ cuốn và giòn hơn.\n2. Lấy một lượng nhân vừa đủ đặt vào giữa mép bánh (khoảng 1 thìa canh đầy). Gấp hai mép bánh từ hai bên vào, sau đó cuộn tròn đều và chặt tay từ dưới lên trên.\n3. Lặp lại quá trình này cho đến hết nhân và vỏ bánh."
    },
    {
      "title": "Chiên chả giò",
      "desc": "1. Đặt chảo sâu lòng lên bếp, cho lượng dầu ăn đủ để chiên ngập chả giò vào đun nóng già (khoảng 170-180°C).\n2. Hạ lửa vừa, nhẹ nhàng cho từng cuốn chả giò vào chiên. Chiên đều hai lần để chả giò giòn lâu và vàng đẹp:\n   - **Lần 1:** Chiên sơ đến khi chả giò chuyển màu hơi vàng nhạt, vớt ra để ráo dầu.\n   - **Lần 2 (trước khi ăn):** Đun nóng lại dầu, cho chả giò vào chiên lại trên lửa lớn hơn một chút cho đến khi vàng ruộm và giòn tan. Vớt ra, đặt lên giấy thấm dầu."
    },
    {
      "title": "Pha nước chấm và thưởng thức",
      "desc": "1. **Nước mắm chua ngọt:** Pha theo tỷ lệ 1 nước mắm : 1 đường : 1 giấm/chanh : 4 nước lọc. Thêm tỏi ớt băm tùy khẩu vị.\n2. **Trình bày:** Bày chả giò đã chiên ra đĩa. Ăn kèm bún tươi, các loại rau sống như xà lách, rau thơm và chấm với nước mắm chua ngọt đã pha.\n3. Chả giò ngon nhất khi thưởng thức nóng hổi."
    }
  ],
  "related": [
    {
      "id": "banh-goi",
      "title": "Bánh Gối",
      "image": "/assets/images/mon-an/an-vat/banhgoi.jpg",
      "description": "Bánh gối chiên giòn, nhân thịt, miến, mộc nhĩ, ăn kèm nước mắm chua ngọt",
      "time": 35,
      "rating": 4.7
    },
    {
      "id": "nem-chua-ran",
      "title": "Nem Chua Rán",
      "image": "/assets/images/mon-an/an-vat/nemchua.jpg",
      "description": "Nem chua rán giòn rụm, vị chua cay, ăn kèm dưa leo và tương ớt",
      "time": 25,
      "rating": 4.7
    },
    {
      "id": "banh-bao-chien",
      "title": "Bánh Bao Chiên",
      "image": "/assets/images/mon-an/an-vat/banhbaochien.jpg",
      "description": "Bánh bao chiên vàng giòn, nhân thịt đậm đà, ăn kèm tương ớt",
      "time": 30,
      "rating": 4.8
    }
  ]
},
{
  "id": "mochi",
  "title": "Bánh Mochi",
  "description": "Bánh mochi Nhật Bản mềm dẻo, nhân đậu đỏ ngọt ngào, vỏ bột nếp thơm, món tráng miệng tinh tế, dễ làm, hấp dẫn mọi lứa tuổi.",
  "image": "/assets/images/mon-an/an-vat/mochi.jpg",
  "time": 40,
  "rating": 4.8,
  "ratingCount": 215,
  "author": "Chị Lan",
  "difficulty": "Dễ",
  "calories": "280 kcal",
  "date": "10/05/2024",
  "tags": ["Ăn vặt", "Huế"],
  "ingredients": [
    "Bột nếp - 200g",
    "Đường - 50g",
    "Nước - 150ml",
    "Đậu đỏ - 100g",
    "Đường nâu - 30g",
    "Bột bắp - 50g",
    "Bột năng - 50g",
    "Nước cốt dừa - 50ml",
    "Vừng rang - 20g",
    "Muối - 1/4 thìa cà phê",
    "Bột trà xanh (tùy chọn) - 1 thìa cà phê"
  ],
  "steps": [
    {
        "title": "Chuẩn bị nhân đậu đỏ",
        "desc": "1. Ngâm 100g đậu đỏ qua đêm, rửa sạch\n2. Nấu đậu với 200ml nước đến khi mềm (khoảng 30 phút)\n3. Vớt đậu ra, để nguội, sau đó giã nhuyễn\n4. Trộn đậu với 30g đường nâu, vo thành viên nhỏ (20g/viên)"
        },
        {
        "title": "Nhào bột nếp",
        "desc": "1. Trộn 200g bột nếp + 50g đường + 150ml nước trong tô lớn\n2. Khuấy đều đến khi không còn vón cục\n3. Đổ hỗn hợp vào xửng hấp, hấp cách thủy 20 phút"
    },
    {
      "title": "Làm vỏ bánh",
      "desc": "1. Đổ bột đã hấp vào tô lớn, dùng muỗng đánh nhuyễn\n2. Chia bột thành từng phần nhỏ (30g/viên)\n3. Dùng tay nặn bột thành hình tròn, dẹt mỏng"
    },
    {
        "title": "Gói bánh mochi",
        "desc": "1. Lấy 1 viên bột, ấn dẹt, cho viên đậu đỏ vào giữa\n2. Gói kín lại, nặn thành hình tròn\n3. Lặp lại cho đến khi hết nguyên liệu"
    },
    {
        "title": "Trình bày và thưởng thức",
        "desc": "1. Rắc bột bắp hoặc bột năng lên đĩa để bánh không dính\n2. Xếp bánh mochi lên đĩa, rắc vừng rang lên trên\n3. Có thể dùng kèm nước cốt dừa hoặc trà xanh để tăng hương vị"
    }
  ],
  "comments": [
    {
      "user": "Nguyễn Thị Hoa",
      "avatar": "/assets/images/users/user-5.jpg",
      "rating": 5,
      "text": "Bánh mềm mịn đúng chuẩn Huế, nước mắm ngon tuyệt!"
    },
    {
      "user": "Lê Minh Đức",
      "avatar": "/assets/images/users/user-6.jpg",
      "rating": 4,
      "text": "Tôm cháy làm hơi mặn nhưng bánh rất ngon, lần sau sẽ giảm nước mắm khi xào tôm"
    }
  ],
  "related": [
    {
      "id": "banh-bao-chay",
      "title": "Bánh Bao Chay",
      "image": "/assets/images/mon-an/mon-chay/banhbaochay.jpg",
      "description": "Bánh bao chay nhân đậu xanh, nấm hương, ăn kèm nước tương",
      "time": 40,
      "rating": 4.6
    },
    {
      "id": "banh-duc",
      "title": "Bánh Đúc Nóng",
      "image": "/assets/images/mon-an/an-vat/banhduc.jpg",
      "description": "Bánh đúc nóng mềm mịn, nước mắm mặn ngọt, thịt băm và mộc nhĩ",
      "time": 30,
      "rating": 4.8
    },
    {
      "id": "banh-bot-loc",
      "title": "Bánh Bột Lọc",
      "image": "/assets/images/mon-an/an-vat/banhbotloc.jpg",
      "description": "Bánh trong suốt dai dai với nhân tôm thịt, gói lá chuối",
      "time": 50,
      "rating": 4.7
    }
  ]
},
{
  "id": "banh-bot-loc",
  "title": "Bánh Bột Lọc",
  "description": "Bánh bột lọc Huế trong suốt, dai dai, nhân tôm thịt đậm đà, gói lá chuối thơm, ăn kèm nước mắm chua ngọt, đậm chất truyền thống.",
  "image": "/assets/images/mon-an/an-vat/banhbotloc.jpg",
  "time": 50,
  "rating": 4.7,
  "ratingCount": 189,
  "author": "Chị Lan",
  "difficulty": "Trung bình",
  "calories": "320 kcal",
  "date": "18/05/2024",
  "tags": ["Ăn vặt", "Huế"],
  "ingredients": [
    "Bột năng - 300g",
    "Tôm tươi - 200g",
    "Thịt ba chỉ - 150g",
    "Lá chuối - 10 lá",
    "Hành khô - 30g",
    "Nước mắm - 50ml",
    "Đường - 20g",
    "Ớt - 2 quả",
    "Dầu ăn - 30ml"
  ],
  "steps": [
    {
      "title": "Chuẩn bị nhân",
      "desc": "1. Tôm bóc vỏ, bỏ chỉ đen, ướp với 1/2 thìa hạt nêm\n2. Thịt thái hạt lựu, xào chín với hành khô phi thơm\n3. Trộn đều tôm và thịt đã chín"
    },
    {
      "title": "Nhào bột",
      "desc": "1. Đổ bột năng vào tô lớn\n2. Thêm từng ít nước sôi (khoảng 200ml), dùng đũa khuấy đều\n3. Nhào bằng tay đến khi bột mịn, dẻo, không dính"
    },
    {
      "title": "Gói bánh",
      "desc": "1. Lá chuối rửa sạch, lau khô, cắt thành hình vuông 15x15cm\n2. Lấy 1 muỗng bột dàn mỏng, cho nhân vào giữa\n3. Gói kín theo kiểu hình chữ nhật, buộc bằng dây lạt"
    },
    {
      "title": "Hấp bánh",
      "desc": "1. Xếp bánh vào xửng hấp, để cách nhau\n2. Hấp cách thủy 20 phút (nước sôi mạnh)\n3. Kiểm tra: bánh chuyển trong là chín"
    }
  ],
  "comments": [
    {
      "user": "Trần Thị Mai",
      "avatar": "/assets/images/users/user-7.jpg",
      "rating": 5,
      "text": "Bánh dai ngon đúng chuẩn Huế, nhân tôm thịt đậm đà"
    },
    {
      "user": "Nguyễn Văn Hải",
      "avatar": "/assets/images/users/user-8.jpg",
      "rating": 4,
      "text": "Lần đầu làm hơi vất vả phần gói bánh nhưng thành phẩm rất đáng"
    }
  ],
  "related": [
    {
      "id": "banh-beo",
      "title": "Bánh Bèo",
      "image": "/assets/images/mon-an/an-vat/banhbeo.jpg",
      "description": "Bánh bèo Huế mềm mịn, ăn kèm với nước mắm chua ngọt và tôm cháy",
      "time": 35,
      "rating": 4.7
    },
    {
      "id": "banh-nam",
      "title": "Bánh Nậm",
      "image": "/assets/images/mon-an/an-vat/banhnam.jpg",
      "description": "Bánh nậm Huế mềm mịn với nhân tôm thịt đậm đà",
      "time": 40,
      "rating": 4.6
    },
    {
      "id": "banh-it-tran",
      "title": "Bánh Ít Trần",
      "image": "/assets/images/mon-an/an-vat/banhittran.jpg",
      "description": "Bánh dẻo thơm từ nếp, nhân đậu xanh hoặc tôm thịt",
      "time": 45,
      "rating": 4.5
    }
  ]
},
{
  "id": "banh-nam",
  "title": "Bánh Nậm",
  "description": "Bánh nậm Huế mềm mịn, nhân tôm thịt thơm ngon, gói lá chuối, chan nước mắm chua ngọt, món ăn vặt dân dã, đậm đà.",
  "image": "/assets/images/mon-an/an-vat/banhnam.jpg",
  "time": 40,
  "rating": 4.6,
  "ratingCount": 175,
  "author": "Chị Lan",
  "difficulty": "Trung bình",
  "calories": "290 kcal",
  "date": "22/05/2024",
  "tags": ["Ăn vặt", "Huế"],
  "ingredients": [
    "Bột gạo - 200g",
    "Bột năng - 50g",
    "Tôm tươi - 150g",
    "Thịt nạc vai - 100g",
    "Lá chuối - 15 lá",
    "Hành tím - 3 củ",
    "Nước mắm - 40ml",
    "Đường - 20g",
    "Dầu điều - 1 thìa",
    "Gia vị: muối, tiêu, hạt nêm"
  ],
  "steps": [
    {
      "title": "Sơ chế nguyên liệu",
      "desc": "1. Tôm bóc vỏ, bỏ chỉ đen, băm nhuyễn\n2. Thịt rửa sạch, xay nhỏ\n3. Hành tím băm nhuyễn, phi 1/2 số hành vàng giòn"
    },
    {
      "title": "Làm nhân",
      "desc": "1. Xào thịt với 1 thìa dầu đến khi chín tái\n2. Cho tôm vào xào cùng, nêm 1 thìa hạt nêm + 1/2 thìa tiêu\n3. Thêm hành phi, trộn đều, tắt bếp"
    },
    {
      "title": "Pha bột",
      "desc": "1. Trộn đều bột gạo + bột năng + 1/2 thìa muối\n2. Đổ từ từ 500ml nước lạnh, khuấy tan\n3. Lọc qua rây cho mịn"
    },
    {
      "title": "Gói bánh",
      "desc": "1. Lá chuối lau sạch, cắt hình chữ nhật 20x15cm\n2. Quét dầu ăn lên lá\n3. Đổ 2 thìa bột + 1 thìa nhân, gấp mép lá thành hình chữ nhật"
    },
    {
      "title": "Hấp bánh",
      "desc": "1. Xếp bánh vào xửng hấp\n2. Hấp cách thủy 25 phút (nước sôi mạnh)\n3. Kiểm tra: bột chuyển từ trắng đục sang trong là chín"
    }
  ],
  "comments": [
    {
      "user": "Phạm Thúy Hằng",
      "avatar": "/assets/images/users/user-9.jpg",
      "rating": 5,
      "text": "Bánh mềm mịn, nhân thơm ngon đậm đà, đúng vị Huế"
    },
    {
      "user": "Lê Văn Tú",
      "avatar": "/assets/images/users/user-10.jpg",
      "rating": 4,
      "text": "Cần chú ý lượng nước khi pha bột, lần đầu mình làm bị nhão quá"
    }
  ],
  "related": [
    {
      "id": "banh-beo",
      "title": "Bánh Bèo",
      "image": "/assets/images/mon-an/an-vat/banhbeo.jpg",
      "description": "Bánh bèo Huế mềm mịn, ăn kèm với nước mắm chua ngọt và tôm cháy",
      "time": 35,
      "rating": 4.7
    },
    {
      "id": "banh-bot-loc",
      "title": "Bánh Bột Lọc",
      "image": "/assets/images/mon-an/an-vat/banhbotloc.jpg",
      "description": "Bánh trong suốt dai dai với nhân tôm thịt, gói lá chuối",
      "time": 50,
      "rating": 4.7
    },
    {
      "id": "banh-duc",
      "title": "Bánh Đúc Nóng",
      "image": "/assets/images/mon-an/an-vat/banhduc.jpg",
      "description": "Bánh đúc nóng mềm mịn, nước mắm mặn ngọt, thịt băm và mộc nhĩ",
      "time": 30,
      "rating": 4.8
    }
  ]
},
{
  "id": "banh-it-tran",
  "title": "Bánh Ít Trần",
  "description": "Bánh ít trần Huế dẻo thơm, nhân đậu xanh hoặc tôm thịt, gói lá chuối, món ăn vặt truyền thống, vị ngọt bùi, dễ thực hiện.",
  "image": "/assets/images/mon-an/an-vat/banhittran.jpg",
  "time": 45,
  "rating": 4.5,
  "ratingCount": 132,
  "author": "Chị Lan",
  "difficulty": "Trung bình",
  "calories": "310 kcal",
  "date": "28/05/2024",
  "tags": ["Ăn vặt", "Huế"],
  "ingredients": [
    "Bột nếp - 300g",
    "Đậu xanh không vỏ - 150g (hoặc tôm thịt 200g)",
    "Lá chuối - 20 lá",
    "Dầu dừa - 2 thìa",
    "Hành tím - 3 củ",
    "Nước cốt dừa - 100ml",
    "Muối - 1/2 thìa",
    "Đường - 50g",
    "Dây lạt - 10 sợi"
  ],
  "steps": [
    {
      "title": "Làm nhân đậu xanh",
      "desc": "1. Đậu xanh ngâm 2 giờ, hấp chín\n2. Giã nhuyễn với 30g đường + 1 thìa dầu dừa\n3. Vo viên tròn đường kính 3cm (nếu làm nhân mặn: xào tôm thịt với hành tím phi thơm)"
    },
    {
      "title": "Nhào bột nếp",
      "desc": "1. Trộn bột nếp + 1/4 thìa muối + 20g đường\n2. Thêm từng ít nước ấm (khoảng 150ml), nhào đến khi bột mịn, dẻo\n3. Ủ bột 15 phút trong màng bọc thực phẩm"
    },
    {
      "title": "Gói bánh",
      "desc": "1. Lá chuối lau sạch, cắt hình vuông 15x15cm\n2. Lấy 1 nắm bột dàn mỏng, đặt nhân vào giữa\n3. Bao kín nhân, vo tròn rồi gói lá theo kiểu hình tháp (chóp nhọn)\n4. Buộc bằng dây lạt"
    },
    {
      "title": "Hấp bánh",
      "desc": "1. Xếp bánh vào xửng, để cách nhau 2cm\n2. Hấp cách thủy 20 phút (nước sôi mạnh)\n3. Phết lớp dầu dừa lên mặt bánh khi còn nóng"
    }
  ],
  "comments": [
    {
      "user": "Nguyễn Thị Ngọc",
      "avatar": "/assets/images/users/user-11.jpg",
      "rating": 5,
      "text": "Bánh dẻo thơm, nhân đậu xanh bùi ngậy, đúng vị quê nhà"
    },
    {
      "user": "Trần Văn Minh",
      "avatar": "/assets/images/users/user-12.jpg",
      "rating": 4,
      "text": "Lần đầu gói chưa đẹp nhưng hương vị rất chuẩn, nhất là phần nhân mặn"
    }
  ],
  "related": [
    {
      "id": "banh-nam",
      "title": "Bánh Nậm",
      "image": "/assets/images/mon-an/an-vat/banhnam.jpg",
      "description": "Bánh nậm Huế mềm mịn với nhân tôm thịt đậm đà",
      "time": 40,
      "rating": 4.6
    },
    {
      "id": "banh-bot-loc",
      "title": "Bánh Bột Lọc",
      "image": "/assets/images/mon-an/an-vat/banhbotloc.jpg",
      "description": "Bánh trong suốt dai dai với nhân tôm thịt, gói lá chuối",
      "time": 50,
      "rating": 4.7
    },
    {
      "id": "banh-duc",
      "title": "Bánh Đúc Nóng",
      "image": "/assets/images/mon-an/an-vat/banhduc.jpg",
      "description": "Bánh đúc nóng mềm mịn, nước mắm mặn ngọt, thịt băm và mộc nhĩ",
      "time": 30,
      "rating": 4.8
    }
  ]
},
{
  "id": "banh-chuoi-chien",
  "title": "Bánh Chuối Chiên",
  "description": "Bánh chuối chiên vàng giòn, thơm mùi chuối chín, vỏ bột giòn rụm, ngọt mềm bên trong, món ăn vặt dân dã, thưởng thức khi nóng.",
  "image": "/assets/images/mon-an/an-vat/banhchuoichien.jpg",
  "time": 20,
  "rating": 4.7,
  "ratingCount": 210,
  "author": "Cô Mai",
  "difficulty": "Dễ",
  "calories": "380 kcal",
  "date": "15/06/2024",
  "tags": ["Ăn vặt", "Chiên"],
  "ingredients": [
    "Chuối sứ chín - 5 quả",
    "Bột gạo - 100g",
    "Bột năng - 50g",
    "Dừa nạo - 30g",
    "Đường - 30g",
    "Mè trắng - 20g",
    "Dầu ăn - 200ml"
  ],
  "steps": [
    {
      "title": "Sơ chế chuối",
      "desc": "1. Chuối bóc vỏ, bỏ đầu đuôi\n2. Cắt đôi theo chiều dọc rồi xẻ mỗi nửa thành 3-4 miếng dài\n3. Ướp với 1 thìa đường trong 10 phút"
    },
    {
      "title": "Pha bột chiên",
      "desc": "1. Trộn đều 100g bột gạo + 50g bột năng + 1/2 thìa muối\n2. Từ từ đổ 150ml nước lạnh, khuấy thành hỗn hợp sánh mịn\n3. Thêm dừa nạo vào trộn đều"
    },
    {
      "title": "Chiên bánh",
      "desc": "1. Đun nóng dầu ở 160°C (thử bằng cách thả tăm thấy bọt nhẹ quanh que)\n2. Nhúng từng miếng chuối vào bột, đảo đều\n3. Thả vào chảo dầu, chiên vàng đều 2 mặt (3-4 phút)\n4. Vớt ra giấy thấm dầu"
    },
    {
      "title": "Trình bày",
      "desc": "1. Xếp bánh lên đĩa, rắc mè rang lên trên\n2. Ăn nóng với nước cốt dừa hoặc sữa đặc"
    }
  ],
  "related": [
    {
      "id": "banh-cam",
      "title": "Bánh Cam",
      "image": "/assets/images/mon-an/trang-mieng/banhcam.jpg",
      "description": "Bánh cam chiên giòn, nhân đậu xanh ngọt bùi, vỏ ngoài phủ mè",
      "time": 40,
      "rating": 4.7
    },
    {
      "id": "banh-ran-doremon",
      "title": "Bánh Rán Doremon",
      "image": "/assets/images/mon-an/trang-mieng/banhrandoremon.jpg",
      "description": "Bánh rán Doremon mềm xốp, nhân đậu đỏ ngọt bùi",
      "time": 25,
      "rating": 4.8
    },
    {
      "id": "khoai-tay-chien",
      "title": "Khoai Tây Chiên",
      "image": "/assets/images/mon-an/an-vat/khoaitaychien.jpg",
      "description": "Khoai tây chiên giòn rụm, vàng ươm",
      "time": 20,
      "rating": 4.7
    }
  ]
},
{
  "id": "banh-duc",
  "title": "Bánh Đúc Nóng",
  "description": "Bánh đúc nóng Hà Nội mềm mịn, chan nước mắm chua ngọt, ăn kèm thịt băm, mộc nhĩ, hành phi, món ăn vặt ấm áp, dân dã.",
  "image": "/assets/images/mon-an/an-vat/banhduc.jpg",
  "time": 30,
  "rating": 4.8,
  "ratingCount": 185,
  "author": "Chị Lan",
  "difficulty": "Dễ",
  "calories": "350 kcal",
  "date": "18/06/2024",
  "tags": ["Ăn vặt", "Hà Nội"],
  "ingredients": [
    "Bột gạo - 200g",
    "Bột năng - 50g",
    "Thịt nạc băm - 150g",
    "Mộc nhĩ - 20g",
    "Hành khô - 30g",
    "Nước mắm - 50ml",
    "Đường - 20g",
    "Hành lá - 10g"
  ],
  "steps": [
    {
      "title": "Chuẩn bị nhân",
      "desc": "1. Mộc nhĩ ngâm nở, thái sợi nhỏ\n2. Phi thơm hành khô, xào thịt băm + mộc nhĩ + 1 thìa nước mắm\n3. Thêm 50ml nước, rim nhỏ lửa 5 phút"
    },
    {
      "title": "Pha bột",
      "desc": "1. Trộn 200g bột gạo + 50g bột năng + 1/2 thìa muối\n2. Đổ từ từ 600ml nước lạnh, khuấy tan hoàn toàn"
    },
    {
      "title": "Nấu bánh",
      "desc": "1. Đun hỗn hợp bột trên lửa nhỏ, khuấy đều tay\n2. Khi bột sánh đặc thì đổ vào khuôn (đã quét dầu)\n3. Hấp cách thủy 15 phút"
    },
    {
      "title": "Pha nước chấm",
      "desc": "1. Đun 100ml nước + 20g đường đến tan\n2. Thêm 50ml nước mắm + ớt băm"
    }
  ],
  "related": [
    {
      "id": "banh-goi",
      "title": "Bánh Gối",
      "image": "/assets/images/mon-an/an-vat/banhgoi.jpg",
      "description": "Bánh gối chiên giòn, nhân thịt, miến, mộc nhĩ",
      "time": 35,
      "rating": 4.7
    },
    {
      "id": "banh-duc-la-dua",
      "title": "Bánh Đúc Lá Dứa",
      "image": "/assets/images/mon-an/trang-mieng/banhducladua.jpg",
      "description": "Bánh đúc lá dứa mềm mịn, thơm mùi lá dứa",
      "time": 30,
      "rating": 4.8
    },
    {
      "id": "banh-tam",
      "title": "Bánh Tằm Bì",
      "image": "/assets/images/mon-an/mon-chinh/banhtam.jpg",
      "description": "Bánh tằm bì miền Tây, sợi bánh mềm, nước cốt dừa béo ngậy",
      "time": 35,
      "rating": 4.7
    }
  ]
},
{
  "id": "banh-tam-bi",
  "title": "Bánh Tằm Bì",
  "description": "Bánh tằm bì miền Tây, sợi bánh mềm, bì heo thơm, nước cốt dừa béo ngậy, ăn kèm rau sống, nước mắm chua ngọt đậm đà.",
  "image": "/assets/images/mon-an/mon-chinh/banhtam.jpg",
  "time": 35,
  "rating": 4.7,
  "ratingCount": 140,
  "author": "Chú Bình",
  "difficulty": "Trung bình",
  "calories": "450 kcal",
  "date": "02/06/2025",
  "tags": ["Ăn vặt", "Miền Tây", "Món mặn", "Đặc sản"],
  "ingredients": [
    "Sợi bánh tằm tươi - 500g",
    "Thịt ba chỉ - 200g",
    "Da heo - 100g",
    "Thính gạo - 30g",
    "Nước cốt dừa - 300ml",
    "Tỏi - 2 tép",
    "Ớt - 1-2 quả",
    "Chanh - 1/2 quả",
    "Đường - 3 thìa canh",
    "Nước mắm - 4 thìa canh",
    "Dầu ăn - 2 thìa canh",
    "Rau sống: Xà lách, rau thơm các loại (rau kinh giới, húng quế, giá đỗ, dưa leo)",
    "Hành lá - 2 nhánh (thái nhỏ, phi thơm làm mỡ hành)",
    "Đậu phộng rang - 2 thìa canh (giã dập)"
  ],
  "steps": [
    {
      "title": "Sơ chế và luộc thịt, da heo",
      "desc": "1. **Thịt ba chỉ:** Rửa sạch, luộc chín với một chút muối. Vớt ra để nguội, thái lát mỏng rồi thái sợi.\n2. **Da heo:** Rửa sạch, cạo sạch lông (nếu có), luộc chín mềm. Vớt ra ngâm nước đá lạnh cho giòn, sau đó thái sợi thật mỏng."
    },
    {
      "title": "Làm bì heo",
      "desc": "1. Trộn đều thịt ba chỉ thái sợi và da heo thái sợi với 1 thìa canh nước mắm, 1 thìa canh đường, 1/2 thìa cà phê tiêu.\n2. Sau đó, cho thính gạo vào trộn đều. Đảm bảo thính bám đều vào bì."
    },
    {
      "title": "Làm nước cốt dừa và nước mắm",
      "desc": "1. **Nước cốt dừa:** Đun nóng 300ml nước cốt dừa trên lửa nhỏ, thêm 1/2 thìa cà phê muối và 1/2 thìa cà phê đường. Khuấy đều cho sôi lăn tăn rồi tắt bếp (không đun quá lâu sẽ bị tách dầu).\n2. **Nước mắm chua ngọt:** Pha 4 thìa canh nước mắm, 3 thìa canh đường, 1/2 chén nước lọc, nước cốt 1/2 quả chanh, tỏi ớt băm. Khuấy đều cho tan gia vị."
    },
    {
      "title": "Trình bày và thưởng thức",
      "desc": "1. Cho sợi bánh tằm vào tô hoặc đĩa.\n2. Xếp bì heo đã trộn thính lên trên.\n3. Chan đều nước cốt dừa béo ngậy và một ít mỡ hành phi thơm lên bì.\n4. Xếp các loại rau sống ăn kèm xung quanh.\n5. Khi ăn, rưới nước mắm chua ngọt đã pha và rắc đậu phộng rang giã dập lên trên. Trộn đều và thưởng thức."
    }
  ],
  "related": [
    {
      "id": "banh-beo",
      "title": "Bánh Bèo",
      "image": "/assets/images/mon-an/an-vat/banhbeo.jpg",
      "description": "Bánh bèo Huế mềm mịn, ăn kèm với nước mắm chua ngọt và tôm cháy",
      "time": 35,
      "rating": 4.7
    },
    {
      "id": "xoiman",
      "title": "Xôi Mặn",
      "image": "/assets/images/mon-an/an-vat/xoiman.jpg",
      "description": "Xôi mặn với chả lụa, lạp xưởng, trứng cút, hành phi thơm ngon",
      "time": 30,
      "rating": 4.8
    },
    {
      "id": "banh-duc-la-dua",
      "title": "Bánh Đúc Lá Dứa",
      "image": "/assets/images/mon-an/trang-mieng/banhducladua.jpg",
      "description": "Bánh đúc lá dứa mềm mịn, thơm mùi lá dứa, ăn kèm nước cốt dừa",
      "time": 30,
      "rating": 4.8
    }
  ]
},
{
  "id": "sun-ga-rang-muoi",
  "title": "Sụn Gà Rang Muối",
  "description": "Sụn gà rang muối giòn rụm, thơm phức với sả, lá chanh, ăn kèm rau sống, chấm muối tiêu chanh, món ăn vặt đường phố hấp dẫn.",
  "image": "/assets/images/mon-an/an-vat/sunga.jpg",
  "time": 40,
  "rating": 4.7,
  "ratingCount": 120,
  "author": "Chị Lan",
  "difficulty": "Trung bình",
  "calories": "400 kcal",
  "date": "02/06/2025",
  "tags": ["Ăn vặt", "Chiên"],
  "ingredients": [
    "Sụn gà - 500g",
    "Bột năng - 50g",
    "Bột chiên giòn - 30g",
    "Trứng gà - 1 quả (lòng trắng)",
    "Hành tây - 1 củ",
    "Ớt chuông - 1/2 quả (xanh, đỏ tùy chọn)",
    "Sả - 2 nhánh",
    "Lá chanh - 5 lá",
    "Muối - 1/2 thìa cà phê",
    "Đường - 1/2 thìa cà phê",
    "Bột ngọt - 1/4 thìa cà phê (tùy chọn)",
    "Tiêu - 1/4 thìa cà phê",
    "Dầu ăn - đủ để chiên ngập dầu"
  ],
  "steps": [
    {
      "title": "Sơ chế và ướp sụn gà",
      "desc": "1. Sụn gà rửa sạch với muối, để ráo. Chặt miếng vừa ăn.\n2. Ướp sụn gà với 1/2 thìa cà phê muối, 1/2 thìa cà phê đường, 1/4 thìa cà phê tiêu, 1/4 thìa cà phê bột ngọt (nếu dùng), 1 lòng trắng trứng.\n3. Trộn đều và để khoảng 15-20 phút cho sụn gà thấm gia vị."
    },
    {
      "title": "Pha bột áo và chiên sụn gà",
      "desc": "1. Trộn đều 50g bột năng và 30g bột chiên giòn.\n2. Lăn đều từng miếng sụn gà qua hỗn hợp bột sao cho bột phủ kín.\n3. Đun nóng dầu ăn trong chảo, cho sụn gà vào chiên ngập dầu trên lửa vừa đến khi vàng giòn. Vớt ra để ráo dầu."
    },
    {
      "title": "Làm hỗn hợp rang muối",
      "desc": "1. Hành tây, ớt chuông thái hạt lựu. Sả thái lát mỏng, lá chanh thái sợi.\n2. Phi thơm sả, lá chanh trong chảo với một chút dầu ăn.\n3. Cho hành tây, ớt chuông vào xào nhanh khoảng 1 phút."
    },
    {
      "title": "Rang sụn gà với muối",
      "desc": "1. Cho sụn gà đã chiên vào chảo hỗn hợp sả ớt đang xào.\n2. Rắc đều 1 thìa canh hỗn hợp muối rang (có thể tự làm từ muối, đường, tiêu, bột ngọt rang khô) hoặc dùng gói bột rang muối sẵn.\n3. Đảo đều tay trên lửa lớn khoảng 2-3 phút cho sụn gà thấm đều gia vị và khô ráo. Tắt bếp."
    },
    {
      "title": "Trình bày và thưởng thức",
      "desc": "1. Cho sụn gà rang muối ra đĩa.\n2. Có thể rắc thêm chút tiêu hoặc trang trí với rau răm, dưa leo và chanh.\n3. Thưởng thức khi còn nóng, chấm kèm tương ớt hoặc muối tiêu chanh."
    }
  ],
  "related": [
    {
      "id": "nem-chua-ran",
      "title": "Nem Chua Rán",
      "image": "/assets/images/mon-an/an-vat/nemchua.jpg",
      "description": "Nem chua rán giòn rụm, vị chua cay, ăn kèm dưa leo và tương ớt",
      "time": 25,
      "rating": 4.7
    },
    {
      "id": "khoai-tay-chien",
      "title": "Khoai Tây Chiên",
      "image": "/assets/images/mon-an/an-vat/khoaitaychien.jpg",
      "description": "Khoai tây chiên giòn rụm, vàng ươm, ăn kèm tương ớt hoặc sốt mayonnaise",
      "time": 20,
      "rating": 4.7
    },
    {
      "id": "chagio",
      "title": "Chả Giò",
      "image": "/assets/images/mon-an/khai-vi/chagio.jpg",
      "description": "Chả giò vàng giòn, nhân thịt và rau củ, ăn kèm bún và rau sống",
      "time": 40,
      "rating": 4.8
    }
  ]
},
{
  "id": "banh-duc-la-dua",
  "title": "Bánh Đúc Lá Dứa",
  "description": "Bánh đúc lá dứa mềm mịn, thơm mùi lá dứa, ăn kèm nước cốt dừa béo ngậy, mè rang, món tráng miệng thanh mát, dân dã.",
  "image": "/assets/images/mon-an/trang-mieng/banhducladua.jpg",
  "time": 30,
  "rating": 4.8,
  "ratingCount": 160,
  "author": "Cô Mai",
  "difficulty": "Dễ",
  "calories": "280 kcal",
  "date": "02/06/2025",
  "tags": ["Ăn vặt", "Ngọt", "Tráng miệng", "Miền Tây"],
  "ingredients": [
    "Bột gạo tẻ - 200g",
    "Bột năng - 50g",
    "Nước cốt lá dứa - 300ml (từ khoảng 100g lá dứa tươi)",
    "Nước lọc - 400ml",
    "Đường - 100g (điều chỉnh theo khẩu vị)",
    "Muối - 1/2 thìa cà phê",
    "Nước cốt dừa - 200ml (để làm nước cốt dừa ăn kèm)",
    "Bột năng - 1 thìa cà phê (để làm sánh nước cốt dừa)",
    "Mè rang - 1 thìa canh (để rắc lên bánh)"
  ],
  "steps": [
    {
      "title": "Sơ chế lá dứa và pha bột",
      "desc": "1. Lá dứa rửa sạch, cắt khúc nhỏ, cho vào máy xay sinh tố với 300ml nước lọc, xay nhuyễn. Lọc bỏ bã, lấy phần nước cốt lá dứa.\n2. Trong một tô lớn, cho bột gạo tẻ, bột năng, đường và muối vào, trộn đều.\n3. Từ từ đổ nước cốt lá dứa và 400ml nước lọc còn lại vào tô bột. Khuấy đều tay cho đến khi bột tan hoàn toàn, không còn vón cục."
    },
    {
      "title": "Nấu bánh đúc",
      "desc": "1. Lọc hỗn hợp bột qua rây một lần nữa để đảm bảo bánh mịn.\n2. Đặt nồi chứa hỗn hợp bột lên bếp, đun lửa nhỏ. Khuấy liên tục và đều tay để bột không bị cháy hoặc dính đáy nồi.\n3. Khi bột bắt đầu đặc lại và trong hơn, tiếp tục khuấy cho đến khi bột tạo thành một khối dẻo, mịn và không còn màu trắng đục của bột sống. Quá trình này mất khoảng 15-20 phút."
    },
    {
      "title": "Hấp và làm nguội bánh",
      "desc": "1. Chuẩn bị khuôn hấp (có thể dùng khuôn chữ nhật hoặc bát nhỏ), phết một lớp dầu ăn mỏng để chống dính.\n2. Đổ hỗn hợp bánh đúc đã nấu vào khuôn, dàn đều.\n3. Đặt khuôn vào nồi hấp đã sôi nước, hấp khoảng 15-20 phút. Để kiểm tra bánh chín, dùng tăm xiên vào, nếu tăm rút ra sạch là bánh đã chín.\n4. Lấy bánh ra, để nguội hoàn toàn trước khi cắt. Bánh nguội sẽ dai và dễ cắt hơn."
    },
    {
      "title": "Làm nước cốt dừa ăn kèm",
      "desc": "1. Trong một nồi nhỏ, cho 200ml nước cốt dừa, 1 thìa cà phê bột năng và một chút đường (tùy khẩu vị) vào.\n2. Đun trên lửa nhỏ, khuấy đều cho đến khi nước cốt dừa sánh lại và sôi nhẹ. Tắt bếp, để nguội."
    },
    {
      "title": "Trình bày và thưởng thức",
      "desc": "1. Cắt bánh đúc lá dứa thành từng miếng vừa ăn.\n2. Khi ăn, chan nước cốt dừa lên trên, rắc thêm mè rang. Có thể ăn kèm với đá nếu thích."
    }
  ],
  "related": [
    {
      "id": "banh-khoai-mi-nuong",
      "title": "Bánh Khoai Mì Nướng",
      "image": "/assets/images/mon-an/an-vat/banhkhoaimi.jpg",
      "description": "Bánh khoai mì nướng vàng ruộm, thơm mùi dừa, vị ngọt thanh",
      "time": 50,
      "rating": 4.8
    },
    {
      "id": "banh-cam",
      "title": "Bánh Cam",
      "image": "/assets/images/mon-an/trang-mieng/banhcam.jpg",
      "description": "Bánh cam chiên giòn, nhân đậu xanh ngọt bùi, vỏ ngoài phủ mè",
      "time": 40,
      "rating": 4.7
    },
    {
      "id": "banh-ran-doremon",
      "title": "Bánh Rán Doremon",
      "image": "/assets/images/mon-an/trang-mieng/banhrandoremon.jpg",
      "description": "Bánh rán Doremon mềm xốp, nhân đậu đỏ ngọt bùi, món ăn tuổi thơ",
      "time": 25,
      "rating": 4.8
    }
  ]
},
{
  "id": "banh-da-kep-kem",
  "title": "Bánh Đa Kẹp Kem",
  "description": "Bánh đa kẹp kem Sài Gòn giòn tan, kem béo ngậy, dừa nạo, đậu phộng, món ăn vặt mát lạnh, gợi ký ức tuổi thơ.",
  "image": "/assets/images/mon-an/trang-mieng/banhdakepkem.jpg",
  "time": 10,
  "rating": 4.7,
  "ratingCount": 210,
  "author": "Anh Tuấn",
  "difficulty": "Dễ",
  "calories": "200 kcal",
  "date": "02/06/2025",
  "tags": ["Ăn vặt", "Ngọt", "Giải nhiệt", "Sài Gòn"],
  "ingredients": [
    "Bánh đa nướng (bánh tráng nướng) - 2 cái",
    "Kem viên (các vị tùy thích như vani, sầu riêng, khoai môn, socola) - 2-3 viên mỗi phần",
    "Dừa tươi nạo sợi - 1 thìa canh (tùy chọn)",
    "Đậu phộng rang giã nhỏ - 1 thìa canh (tùy chọn)",
    "Sữa đặc - 1 thìa cà phê (tùy chọn)"
  ],
  "steps": [
    {
      "title": "Chuẩn bị nguyên liệu",
      "desc": "1. Chuẩn bị sẵn các viên kem lạnh với hương vị yêu thích của bạn.\n2. Bánh đa nướng phải giòn tan. Nếu bánh chưa giòn, bạn có thể nướng lại trên bếp than hoặc lò nướng vài phút cho bánh giòn hơn.\n3. Dừa tươi nạo sợi và đậu phộng rang giã nhỏ để sẵn ra chén."
    },
    {
      "title": "Kẹp kem",
      "desc": "1. Đặt một chiếc bánh đa nướng lên đĩa.\n2. Dùng muỗng múc kem, đặt 2-3 viên kem lên giữa một nửa chiếc bánh đa.\n3. Nếu thích, rắc thêm dừa tươi nạo sợi và đậu phộng rang giã nhỏ lên trên lớp kem.\n4. Gấp nửa còn lại của chiếc bánh đa lại, nhẹ nhàng kẹp chặt để kem không bị chảy ra ngoài."
    },
    {
      "title": "Thưởng thức",
      "desc": "1. Bánh đa kẹp kem nên được thưởng thức ngay lập tức khi kem còn lạnh và bánh đa còn giòn.\n2. Bạn có thể chan thêm một chút sữa đặc lên trên để tăng thêm vị ngọt béo (tùy chọn)."
    }
  ],
  "related": [
    {
      "id": "banh-khoai-mi-nuong",
      "title": "Bánh Khoai Mì Nướng",
      "image": "/assets/images/mon-an/an-vat/banhkhoaimi.jpg",
      "description": "Bánh khoai mì nướng vàng ruộm, thơm mùi dừa, vị ngọt thanh",
      "time": 50,
      "rating": 4.8
    },
    {
      "id": "banh-duc-la-dua",
      "title": "Bánh Đúc Lá Dứa",
      "image": "/assets/images/mon-an/trang-mieng/banhducladua.jpg",
      "description": "Bánh đúc lá dứa mềm mịn, thơm mùi lá dứa, ăn kèm nước cốt dừa",
      "time": 30,
      "rating": 4.8
    },
    {
      "id": "banh-cam",
      "title": "Bánh Cam",
      "image": "/assets/images/mon-an/trang-mieng/banhcam.jpg",
      "description": "Bánh cam chiên giòn, nhân đậu xanh ngọt bùi, vỏ ngoài phủ mè",
      "time": 40,
      "rating": 4.7
    }
  ]
},
{
  "id": "banh-cam",
  "title": "Bánh Cam",
  "description": "Bánh cam chiên giòn rụm, nhân đậu xanh ngọt bùi, vỏ ngoài phủ mè rang, món ăn vặt truyền thống, hấp dẫn mọi lứa tuổi.",
  "image": "/assets/images/mon-an/trang-mieng/banhcam.jpg",
  "time": 40,
  "rating": 4.7,
  "ratingCount": 115,
  "author": "Chị Hằng",
  "difficulty": "Dễ",
  "calories": "300 kcal",
  "date": "02/06/2025",
  "tags": ["Ăn vặt", "Ngọt", "Truyền thống", "Chiên"],
  "ingredients": [
    "Bột nếp - 200g",
    "Bột gạo tẻ - 50g",
    "Khoai tây - 50g (hoặc khoai lang, hấp chín, nghiền nát)",
    "Đường - 80g (cho vỏ bánh và nhân)",
    "Nước cốt dừa - 50ml",
    "Nước ấm - khoảng 100-120ml",
    "Đậu xanh không vỏ - 100g",
    "Dầu ăn - đủ để chiên ngập dầu",
    "Mè trắng rang - 50g",
    "Muối - 1/4 thìa cà phê"
  ],
  "steps": [
    {
      "title": "Làm nhân đậu xanh",
      "desc": "1. Đậu xanh không vỏ ngâm nước khoảng 2-3 tiếng (hoặc ngâm qua đêm) cho nở mềm.\n2. Hấp chín đậu xanh, sau đó cho vào máy xay sinh tố cùng 30g đường và một chút nước cốt dừa, xay nhuyễn mịn.\n3. Đặt hỗn hợp đậu xanh lên bếp, sên trên lửa nhỏ đến khi nhân khô ráo và không còn dính tay. Để nguội và vo thành các viên nhỏ vừa ăn."
    },
    {
      "title": "Làm vỏ bánh",
      "desc": "1. Trộn đều bột nếp, bột gạo tẻ, 50g đường và 1/4 thìa cà phê muối trong một tô lớn.\n2. Cho khoai tây đã hấp chín và nghiền nát vào tô bột. Từ từ thêm nước ấm và nước cốt dừa vào, nhào đều cho đến khi bột tạo thành khối dẻo, mịn, không dính tay.\n3. Để bột nghỉ khoảng 15-20 phút."
    },
    {
      "title": "Tạo hình bánh cam",
      "desc": "1. Chia bột thành các phần bằng nhau, mỗi phần có kích thước lớn hơn viên nhân đậu xanh một chút.\n2. Ấn dẹt từng viên bột, đặt viên nhân đậu xanh vào giữa, sau đó bao kín nhân lại, vo tròn đều.\n3. Lăn đều từng viên bánh qua mè trắng rang sao cho mè bám đều và phủ kín bánh."
    },
    {
      "title": "Chiên bánh cam",
      "desc": "1. Đặt chảo lên bếp, cho lượng dầu ăn đủ để chiên ngập bánh vào đun nóng.\n2. Khi dầu nóng, hạ lửa nhỏ và cho bánh cam vào chiên. Chiên bánh trên lửa nhỏ để bánh chín đều từ trong ra ngoài và không bị cháy.\n3. Trong quá trình chiên, đảo bánh đều tay để bánh vàng giòn và nở đều. Khi bánh vàng đều, vớt ra để ráo dầu trên giấy thấm dầu."
    },
    {
      "title": "Thưởng thức",
      "desc": "1. Bánh cam ngon nhất khi ăn nóng hoặc ấm.\n2. Bánh có lớp vỏ giòn rụm bên ngoài và nhân đậu xanh ngọt bùi bên trong, rất thích hợp làm món ăn vặt hoặc tráng miệng."
    }
  ],
  "related": [
    {
      "id": "banh-ran-doremon",
      "title": "Bánh Rán Doremon",
      "image": "/assets/images/mon-an/trang-mieng/banhrandoremon.jpg",
      "description": "Bánh rán Doremon mềm xốp, nhân đậu đỏ ngọt bùi, món ăn tuổi thơ",
      "time": 25,
      "rating": 4.8
    },
    {
      "id": "banh-chuoichien",
      "title": "Bánh Chuối Chiên",
      "image": "/assets/images/mon-an/an-vat/banhchuoichien.jpg",
      "description": "Bánh chuối chiên vàng giòn, thơm mùi chuối chín, ăn vặt hấp dẫn",
      "time": 20,
      "rating": 4.7
    },
    {
      "id": "banh-khoai-mi-nuong",
      "title": "Bánh Khoai Mì Nướng",
      "image": "/assets/images/mon-an/an-vat/banhkhoaimi.jpg",
      "description": "Bánh khoai mì nướng vàng ruộm, thơm mùi dừa, vị ngọt thanh",
      "time": 50,
      "rating": 4.8
    }
  ]
},
{
  "id": "banh-tep-chien-gion",
  "title": "Bánh Tép Chiên Giòn",
  "description": "Bánh cam chiên giòn rụm, nhân đậu xanh ngọt bùi, vỏ ngoài phủ mè rang, món ăn vặt truyền thống, hấp dẫn mọi lứa tuổi.",
  "image": "/assets/images/mon-an/an-vat/banhtep.jpg",
  "time": 25,
  "rating": 4.8,
  "ratingCount": 130,
  "author": "Chị Hằng",
  "difficulty": "Dễ",
  "calories": "380 kcal",
  "date": "02/06/2025",
  "tags": ["Ăn vặt", "Chiên", "Hải sản"],
  "ingredients": [
    "Tép tươi - 200g",
    "Khoai môn hoặc khoai lang - 300g",
    "Bột gạo - 100g",
    "Bột chiên giòn - 50g",
    "Trứng gà - 1 quả",
    "Hành lá - 2 nhánh",
    "Hành tím - 1 củ",
    "Gia vị: Nước mắm, đường, tiêu, bột ngọt (tùy chọn)",
    "Dầu ăn - đủ để chiên ngập dầu",
    "Rau sống ăn kèm (xà lách, rau thơm)",
    "Nước mắm chua ngọt (để chấm)"
  ],
  "steps": [
    {
      "title": "Sơ chế nguyên liệu",
      "desc": "1. **Tép tươi:** Rửa sạch tép, bỏ râu, để ráo nước. Ướp tép với 1/2 thìa cà phê nước mắm, một chút tiêu, 1/4 thìa cà phê đường.\n2. **Khoai môn/khoai lang:** Gọt vỏ, rửa sạch, thái sợi nhỏ (có thể dùng dụng cụ bào sợi).\n3. **Hành lá:** Thái nhỏ phần gốc trắng và phần lá xanh riêng.\n4. **Hành tím:** Băm nhỏ."
    },
    {
      "title": "Pha bột và trộn hỗn hợp",
      "desc": "1. Trong một tô lớn, cho bột gạo, bột chiên giòn vào. Thêm từ từ khoảng 150ml nước lạnh (hoặc hơn tùy loại bột) và trứng gà vào, khuấy đều cho bột tan hoàn toàn, tạo thành hỗn hợp sánh mịn.\n2. Cho khoai môn/khoai lang thái sợi, tép đã ướp, hành lá thái nhỏ và hành tím băm vào tô bột.\n3. Trộn đều tất cả các nguyên liệu để tép và khoai bám đều vào bột. Nêm nếm lại gia vị cho vừa ăn (có thể thêm chút muối nếu cần)."
    },
    {
      "title": "Chiên bánh tép",
      "desc": "1. Đặt chảo lên bếp, cho lượng dầu ăn đủ để chiên ngập bánh vào đun nóng già (khoảng 170-180°C).\n2. Dùng muỗng múc từng phần hỗn hợp tép và khoai cho vào chảo dầu nóng. Dàn mỏng bánh ra để bánh được giòn đều.\n3. Chiên bánh trên lửa vừa cho đến khi vàng đều hai mặt và giòn rụm. Trong quá trình chiên, có thể lật bánh để bánh chín vàng đẹp."
    },
    {
      "title": "Thưởng thức",
      "desc": "1. Vớt bánh tép ra, đặt lên giấy thấm dầu để loại bỏ bớt dầu thừa.\n2. Bánh tép chiên giòn ngon nhất khi ăn nóng.\n3. Thưởng thức kèm rau sống các loại như xà lách, rau thơm và chấm với nước mắm chua ngọt hoặc tương ớt."
    }
  ],
  "related": [
    {
      "id": "khoai-tay-chien",
      "title": "Khoai Tây Chiên",
      "image": "/assets/images/mon-an/an-vat/khoaitaychien.jpg",
      "description": "Khoai tây chiên giòn rụm, vàng ươm, ăn kèm tương ớt hoặc sốt mayonnaise",
      "time": 20,
      "rating": 4.7
    },
    {
      "id": "banh-bao-chien",
      "title": "Bánh Bao Chiên",
      "image": "/assets/images/mon-an/an-vat/banhbaochien.jpg",
      "description": "Bánh bao chiên vàng giòn, nhân thịt đậm đà, ăn kèm tương ớt",
      "time": 30,
      "rating": 4.8
    },
    {
      "id": "chagio",
      "title": "Chả Giò",
      "image": "/assets/images/mon-an/khai-vi/chagio.jpg",
      "description": "Chả giò vàng giòn, nhân thịt và rau củ, ăn kèm bún và rau sống",
      "time": 40,
      "rating": 4.8
    }
  ]
},
{
  "id": "xoi-man",
  "title": "Xôi Mặn",
  "description": "Xôi mặn dẻo thơm, topping chả lụa, lạp xưởng, trứng cút, pate, hành phi, chan nước tương, lý tưởng cho bữa sáng.",
  "image": "/assets/images/mon-an/an-vat/xoiman.jpg",
  "time": 30,
  "rating": 4.8,
  "ratingCount": 200,
  "author": "Chú Bình",
  "difficulty": "Dễ",
  "calories": "450 kcal",
  "date": "02/06/2025",
  "tags": ["Ăn vặt", "Xôi", "Bữa sáng", "Món mặn"],
  "ingredients": [
    "Gạo nếp - 300g",
    "Thịt ba chỉ - 100g (hoặc pate)",
    "Lạp xưởng - 2 cây",
    "Trứng cút - 5 quả",
    "Chả lụa - 100g",
    "Hành phi - 30g",
    "Mỡ hành - 2 thìa canh",
    "Nước tương - 2 thìa canh",
    "Đường - 1 thìa cà phê",
    "Tương ớt - 1 thìa cà phê",
    "Dầu ăn - 1 thìa canh",
    "Gia vị: Hạt nêm, tiêu"
  ],
  "steps": [
    {
      "title": "Sơ chế gạo nếp và hấp xôi",
      "desc": "1. **Gạo nếp:** Vo sạch gạo nếp, ngâm trong nước khoảng 4-6 tiếng (hoặc qua đêm) cho mềm. Sau đó vớt ra, để ráo, xóc với 1/2 thìa cà phê muối.\n2. **Hấp xôi:** Cho gạo nếp vào xửng hấp. Hấp khoảng 20-25 phút cho xôi chín dẻo. Trong quá trình hấp, có thể rưới thêm một ít nước cốt dừa hoặc dầu ăn để xôi thêm bóng và thơm (tùy chọn)."
    },
    {
      "title": "Sơ chế và chế biến topping",
      "desc": "1. **Thịt ba chỉ:** Luộc chín, thái hạt lựu. Phi thơm hành băm, cho thịt vào rang săn, nêm chút hạt nêm, tiêu.\n2. **Lạp xưởng:** Hấp hoặc chiên sơ cho chín, thái lát xéo.\n3. **Trứng cút:** Luộc chín, bóc vỏ.\n4. **Chả lụa:** Thái lát vừa ăn.\n5. **Mỡ hành:** Đun nóng dầu ăn, cho hành lá thái nhỏ vào phi thơm."
    },
    {
      "title": "Pha nước sốt xôi",
      "desc": "1. Trong một chén nhỏ, pha 2 thìa canh nước tương, 1 thìa cà phê đường, 1 thìa cà phê tương ớt và một chút tiêu. Khuấy đều cho các gia vị tan hết."
    },
    {
      "title": "Trình bày và thưởng thức",
      "desc": "1. Khi xôi đã chín, cho xôi ra đĩa hoặc hộp.\n2. Xếp các loại topping đã chuẩn bị lên trên xôi: thịt ba chỉ rang (hoặc pate), lạp xưởng, chả lụa, trứng cút.\n3. Rưới đều nước sốt đã pha lên trên.\n4. Cuối cùng, rắc thật nhiều hành phi và chan mỡ hành để tăng thêm hương vị và độ béo ngậy.\n5. Thưởng thức xôi mặn khi còn nóng."
    }
  ],
  "related": [
    {
      "id": "banh-trang-tron",
      "title": "Bánh Tráng Trộn",
      "image": "/assets/images/mon-an/an-vat/banhtrangtron.jpg",
      "description": "Bánh tráng trộn Sài Gòn, dai ngon, vị chua cay mặn ngọt hấp dẫn",
      "time": 15,
      "rating": 4.8
    },
    {
      "id": "bapxao",
      "title": "Bắp Xào Bơ",
      "image": "/assets/images/mon-an/an-vat/bapxao.jpg",
      "description": "Bắp xào bơ thơm ngậy, ngô ngọt, tôm khô, hành lá hấp dẫn",
      "time": 15,
      "rating": 4.7
    },
    {
      "id": "banh-tam-bi",
      "title": "Bánh Tằm Bì",
      "image": "/assets/images/mon-an/mon-chinh/banhtam.jpg",
      "description": "Bánh tằm bì miền Tây, sợi bánh mềm, nước cốt dừa béo ngậy, bì heo thơm ngon",
      "time": 35,
      "rating": 4.7
    }
  ]
},
{
  "id": "bap-xao-bo",
  "title": "Bắp Xào Bơ",
  "description": "Bắp xào bơ thơm ngậy, hạt bắp ngọt mềm, tôm khô dai dai, hành lá, là món ăn vặt đường phố khó cưỡng.",
  "image": "/assets/images/mon-an/an-vat/bapxao.jpg",
  "time": 15,
  "rating": 4.7,
  "ratingCount": 180,
  "author": "Cô Thảo",
  "difficulty": "Dễ",
  "calories": "250 kcal",
  "date": "02/06/2025",
  "tags": ["Ăn vặt", "Đường phố", "Món xào"],
  "ingredients": [
    "Bắp Mỹ (ngô ngọt) - 2-3 trái (hoặc 300g bắp hạt đông lạnh)",
    "Tôm khô - 30g",
    "Bơ lạt - 30g",
    "Hành lá - 2 nhánh",
    "Gia vị: Nước mắm, đường, muối, tương ớt (tùy chọn)"
  ],
  "steps": [
    {
      "title": "Sơ chế nguyên liệu",
      "desc": "1. **Bắp Mỹ:** Nếu dùng bắp trái, lột vỏ, bỏ râu, dùng dao tách lấy hạt. Rửa sạch, để ráo. Nếu dùng bắp hạt đông lạnh, rã đông hoàn toàn.\n2. **Tôm khô:** Rửa sạch, ngâm nước ấm khoảng 10-15 phút cho mềm, vớt ra để ráo.\n3. **Hành lá:** Thái nhỏ."
    },
    {
      "title": "Xào bắp và tôm khô",
      "desc": "1. Đặt chảo lên bếp, cho bơ vào đun chảy trên lửa vừa.\n2. Cho tôm khô đã ngâm mềm vào xào thơm khoảng 1-2 phút.\n3. Tiếp theo, cho hạt bắp vào chảo, đảo đều. Nêm 1/2 thìa cà phê muối, 1 thìa cà phê đường và 1 thìa cà phê nước mắm (có thể điều chỉnh tùy khẩu vị). Đảo đều khoảng 5-7 phút cho bắp chín và thấm gia vị."
    },
    {
      "title": "Hoàn thành và thưởng thức",
      "desc": "1. Khi bắp đã chín và ngấm đều gia vị, cho hành lá thái nhỏ vào, đảo nhanh tay rồi tắt bếp.\n2. Múc bắp xào bơ ra đĩa, có thể rưới thêm một chút tương ớt nếu thích ăn cay.\n3. Thưởng thức khi còn nóng để cảm nhận trọn vẹn hương vị thơm ngon của món ăn."
    }
  ],
  "related": [
    {
      "id": "banh-trang-tron",
      "title": "Bánh Tráng Trộn",
      "image": "/assets/images/mon-an/an-vat/banhtrangtron.jpg",
      "description": "Bánh tráng trộn Sài Gòn, dai ngon, vị chua cay mặn ngọt hấp dẫn",
      "time": 15,
      "rating": 4.8
    },
    {
      "id": "khoai-tay-chien",
      "title": "Khoai Tây Chiên",
      "image": "/assets/images/mon-an/an-vat/khoaitaychien.jpg",
      "description": "Khoai tây chiên giòn rụm, vàng ươm, ăn kèm tương ớt hoặc sốt mayonnaise",
      "time": 20,
      "rating": 4.7
    },
    {
      "id": "banh-gao-cay-tokbokki",
      "title": "Bánh Gạo Cay Tokbokki",
      "image": "/assets/images/mon-an/an-vat/tokkboki.jpg",
      "description": "Bánh gạo Tokbokki Hàn Quốc, dẻo dai, sốt Gochujang cay nồng, chả cá mềm ngọt",
      "time": 30,
      "rating": 4.8
    }
  ]
},
{
  "id": "banh-gao-cay-tokbokki",
  "title": "Bánh Gạo Cay Tokbokki",
  "description": "Tokbokki Hàn Quốc dẻo dai, chả cá mềm ngọt, sốt Gochujang cay nồng, đậm chất ẩm thực đường phố xứ kim chi.",
  "image": "/assets/images/mon-an/an-vat/tokkboki.jpg",
  "time": 30,
  "rating": 4.8,
  "ratingCount": 250,
  "author": "Chị Ngọc",
  "difficulty": "Trung bình",
  "calories": "400 kcal",
  "date": "02/06/2025",
  "tags": ["Ăn vặt", "Hàn Quốc", "Món cay", "Đường phố"],
  "ingredients": [
    "Bánh gạo Tokbokki - 300g (loại tươi hoặc đông lạnh)",
    "Chả cá Hàn Quốc - 100g (thái miếng vừa ăn)",
    "Hành tây - 1/2 củ (thái múi cau)",
    "Hành paro (hành lá to) - 1 nhánh (thái lát xéo)",
    "Nước dùng Dashima (nước dùng rong biển cá cơm) - 500ml (hoặc nước lọc)",
    "Gia vị sốt Tokbokki:",
    "   Tương ớt Gochujang - 2 thìa canh",
    "   Bột ớt Hàn Quốc (Gochugaru) - 1 thìa canh (tùy độ cay)",
    "   Nước tương - 1 thìa canh",
    "   Đường - 1 thìa canh",
    "   Tỏi băm - 1/2 thìa cà phê",
    "   Mật ong hoặc siro ngô - 1/2 thìa canh (tùy chọn)",
    "Trứng gà luộc - 2 quả (tùy chọn, để ăn kèm)",
    "Phô mai mozzarella bào sợi - 30g (tùy chọn, để rắc lên)"
  ],
  "steps": [
    {
      "title": "Sơ chế và chuẩn bị",
      "desc": "1. **Bánh gạo Tokbokki:** Nếu dùng bánh gạo đông lạnh, ngâm vào nước ấm khoảng 10-15 phút cho mềm, tách rời các thanh bánh. Nếu là bánh tươi, chỉ cần rửa qua nước.\n2. **Chả cá Hàn Quốc:** Thái thành các miếng vừa ăn, có thể xiên vào que hoặc để rời.\n3. **Hành tây và hành paro:** Thái như hướng dẫn."
    },
    {
      "title": "Pha sốt Tokbokki",
      "desc": "1. Trong một bát, trộn đều các nguyên liệu làm sốt: tương ớt Gochujang, bột ớt Gochugaru, nước tương, đường, tỏi băm, mật ong/siro ngô (nếu dùng).\n2. Khuấy đều cho hỗn hợp sốt hòa quyện."
    },
    {
      "title": "Nấu Tokbokki",
      "desc": "1. Đặt nồi hoặc chảo sâu lòng lên bếp, cho nước dùng Dashima (hoặc nước lọc) vào đun sôi.\n2. Khi nước sôi, cho hỗn hợp sốt đã pha vào, khuấy đều cho sốt tan hoàn toàn trong nước dùng.\n3. Cho bánh gạo Tokbokki và hành tây vào nồi. Đun trên lửa vừa, khuấy nhẹ nhàng để bánh gạo không bị dính đáy.\n4. Khi sốt bắt đầu sánh lại và bánh gạo mềm dẻo, cho chả cá vào. Tiếp tục đun thêm khoảng 5 phút nữa cho chả cá chín và ngấm sốt."
    },
    {
      "title": "Hoàn thành và thưởng thức",
      "desc": "1. Trước khi tắt bếp, cho hành paro thái lát vào. Nếu muốn, có thể thêm trứng gà luộc và rắc phô mai mozzarella lên trên, đun thêm chút xíu cho phô mai tan chảy.\n2. Múc Tokbokki ra tô, thưởng thức khi còn nóng hổi. Món này ngon nhất khi ăn ngay để cảm nhận độ dẻo của bánh và vị cay nồng của sốt."
    }
  ],
  "related": [
    {
      "id": "nem-chua-ran",
      "title": "Nem Chua Rán",
      "image": "/assets/images/mon-an/an-vat/nemchua.jpg",
      "description": "Nem chua rán giòn rụm, vị chua cay, ăn kèm dưa leo và tương ớt",
      "time": 25,
      "rating": 4.7
    },
    {
      "id": "banh-trang-nuong",
      "title": "Bánh Tráng Nướng",
      "image": "/assets/images/mon-an/an-vat/banhtrangnuong.jpg",
      "description": "Bánh tráng nướng Đà Lạt giòn rụm, topping đa dạng, sốt mayonnaise béo ngậy",
      "time": 15,
      "rating": 4.8
    },
    {
      "id": "bap-xao-bo",
      "title": "Bắp Xào Bơ",
      "image": "/assets/images/mon-an/an-vat/bapxao.jpg",
      "description": "Bắp xào bơ thơm ngậy, ngô ngọt, tôm khô, hành lá hấp dẫn",
      "time": 15,
      "rating": 4.7
    }
  ]
},
{
  "id": "banh-ran-doremon",
  "title": "Bánh Rán Doremon",
  "description": "Bánh rán Doremon Nhật Bản mềm xốp, nhân đậu đỏ ngọt bùi, là món ăn vặt yêu thích của mọi lứa tuổi.",
  "image": "/assets/images/mon-an/trang-mieng/banhrandoremon.jpg",
  "time": 25,
  "rating": 4.8,
  "ratingCount": 230,
  "author": "Anh Tuấn",
  "difficulty": "Dễ",
  "calories": "280 kcal",
  "date": "02/06/2025",
  "tags": ["Ăn vặt", "Ngọt", "Nhật Bản", "Món bánh"],
  "ingredients": [
    "Trứng gà - 2 quả",
    "Đường - 80g",
    "Mật ong - 2 thìa canh",
    "Nước tương (xì dầu) - 1/2 thìa cà phê (tùy chọn, để tăng màu và hương vị)",
    "Bột mì đa dụng - 150g",
    "Bột nở (baking powder) - 1 thìa cà phê",
    "Nước - 2-3 thìa canh (hoặc sữa tươi không đường)",
    "Dầu ăn (để chống dính chảo)",
    "Nhân đậu đỏ (Anko) - 200g (mua sẵn hoặc tự làm)"
  ],
  "steps": [
    {
      "title": "Làm nhân đậu đỏ (nếu tự làm)",
      "desc": "1. Đậu đỏ rửa sạch, ngâm nước khoảng 4-6 tiếng (hoặc qua đêm). Luộc đậu đến khi chín mềm.\n2. Cho đậu đỏ đã luộc vào máy xay sinh tố cùng một chút đường (tùy khẩu vị) và nước, xay nhuyễn (hoặc nghiền nát).\n3. Đặt hỗn hợp đậu đỏ lên chảo, sên trên lửa nhỏ đến khi nhân khô ráo, đặc lại và không còn dính tay. Để nguội."
    },
    {
      "title": "Pha bột bánh",
      "desc": "1. Trong một tô lớn, đập trứng gà vào, thêm đường và mật ong. Dùng phới lồng đánh đều cho hỗn hợp bông nhẹ và đường tan hết (khoảng 3-5 phút).\n2. Rây từ từ bột mì và bột nở vào hỗn hợp trứng, trộn đều cho đến khi không còn vón cục. Thêm nước tương (nếu dùng).\n3. Từ từ thêm từng thìa nước (hoặc sữa tươi) vào, khuấy đều cho đến khi bột có độ sánh vừa phải, không quá đặc cũng không quá lỏng (như bột bánh pancake). Để bột nghỉ khoảng 15-20 phút."
    },
    {
      "title": "Rán bánh",
      "desc": "1. Đặt chảo chống dính lên bếp, đun nóng ở lửa nhỏ. Quét một lớp dầu ăn mỏng lên chảo (có thể dùng khăn giấy để lau bớt dầu thừa).\n2. Dùng muỗng múc từng muỗng bột đổ vào chảo, tạo thành hình tròn. Để bột tự dàn đều.\n3. Rán bánh trên lửa nhỏ. Khi bề mặt bánh nổi bong bóng và các bọt khí vỡ ra, lật mặt bánh. Rán tiếp mặt còn lại cho đến khi bánh chín vàng đều đẹp mắt. Lặp lại cho đến hết bột."
    },
    {
      "title": "Kẹp nhân và thưởng thức",
      "desc": "1. Khi bánh đã nguội bớt, lấy một miếng bánh, phết một lượng nhân đậu đỏ vừa đủ lên một mặt.\n2. Đặt một miếng bánh khác lên trên, nhẹ nhàng ép nhẹ hai mặt lại để nhân bánh được kẹp chặt.\n3. Bánh rán Doremon ngon nhất khi ăn ngay hoặc bảo quản trong hộp kín ở nhiệt độ phòng."
    }
  ],
  "related": [
    {
      "id": "banh-cam",
      "title": "Bánh Cam",
      "image": "/assets/images/mon-an/trang-mieng/banhcam.jpg",
      "description": "Bánh cam chiên giòn, nhân đậu xanh ngọt bùi, vỏ ngoài phủ mè",
      "time": 40,
      "rating": 4.7
    },
    {
      "id": "banh-chuoichien",
      "title": "Bánh Chuối Chiên",
      "image": "/assets/images/mon-an/an-vat/banhchuoichien.jpg",
      "description": "Bánh chuối chiên vàng giòn, thơm mùi chuối chín, ăn vặt hấp dẫn",
      "time": 20,
      "rating": 4.7
    },
    {
      "id": "banh-khoai-mi-nuong",
      "title": "Bánh Khoai Mì Nướng",
      "image": "/assets/images/mon-an/an-vat/banhkhoaimi.jpg",
      "description": "Bánh khoai mì nướng vàng ruộm, thơm mùi dừa, vị ngọt thanh",
      "time": 50,
      "rating": 4.8
    }
  ]
},
{
  "id": "banh-bao-chien",
  "title": "Bánh Bao Chiên",
  "description": "Bánh bao chiên vàng giòn, nhân thịt đậm đà, nóng hổi, ăn kèm tương ớt hoặc nước mắm, phù hợp bữa sáng.",
  "image": "/assets/images/mon-an/an-vat/banhbaochien.jpg",
  "time": 30,
  "rating": 4.8,
  "ratingCount": 190,
  "author": "Cô Thảo",
  "difficulty": "Dễ",
  "calories": "350 kcal",
  "date": "02/06/2025",
  "tags": ["Ăn vặt", "Chiên", "Bữa sáng"],
  "ingredients": [
    "Bánh bao chay đã hấp chín - 5 cái",
    "Thịt nạc vai băm - 150g",
    "Mộc nhĩ, nấm hương - 10g (ngâm nở, thái nhỏ)",
    "Hành tây - 1/2 củ (thái hạt lựu)",
    "Miến dong - 20g (ngâm mềm, cắt khúc ngắn)",
    "Trứng gà - 1 quả",
    "Gia vị: Nước mắm, đường, tiêu, hạt nêm",
    "Dầu ăn - đủ để chiên ngập dầu",
    "Tương ớt, tương cà (để chấm)"
  ],
  "steps": [
    {
      "title": "Làm nhân bánh bao",
      "desc": "1. Trộn thịt nạc vai băm với mộc nhĩ, nấm hương, hành tây, miến dong, trứng gà.\n2. Nêm 1 thìa canh nước mắm, 1/2 thìa cà phê đường, 1/2 thìa cà phê hạt nêm, 1/4 thìa cà phê tiêu. Trộn đều và ướp khoảng 15 phút cho ngấm gia vị.\n3. Xào nhân trên chảo nóng với một chút dầu ăn cho nhân chín tới và săn lại, để nguội."
    },
    {
      "title": "Nhồi và tạo hình bánh",
      "desc": "1. Bánh bao chay đã hấp chín, cắt đôi (không đứt hẳn) hoặc khoét một lỗ nhỏ ở giữa.\n2. Nhồi phần nhân đã xào vào giữa mỗi chiếc bánh bao."
    },
    {
      "title": "Chiên bánh bao",
      "desc": "1. Đặt chảo lên bếp, cho lượng dầu ăn đủ để chiên ngập bánh vào đun nóng già.\n2. Hạ lửa vừa, cho từng chiếc bánh bao đã nhồi nhân vào chiên. Chiên đều hai mặt cho đến khi vỏ bánh vàng giòn đẹp mắt.\n3. Vớt bánh ra, đặt lên giấy thấm dầu để loại bỏ dầu thừa."
    },
    {
      "title": "Thưởng thức",
      "desc": "1. Bánh bao chiên ngon nhất khi ăn nóng.\n2. Thưởng thức kèm với tương ớt, tương cà hoặc nước mắm chua ngọt tùy theo sở thích."
    }
  ],
  "related": [
    {
      "id": "chagio",
      "title": "Chả Giò",
      "image": "/assets/images/mon-an/khai-vi/chagio.jpg",
      "description": "Chả giò vàng giòn, nhân thịt và rau củ, ăn kèm bún và rau sống",
      "time": 40,
      "rating": 4.8
    },
    {
      "id": "khoai-tay-chien",
      "title": "Khoai Tây Chiên",
      "image": "/assets/images/mon-an/an-vat/khoaitaychien.jpg",
      "description": "Khoai tây chiên giòn rụm, vàng ươm, ăn kèm tương ớt hoặc sốt mayonnaise",
      "time": 20,
      "rating": 4.7
    },
    {
      "id": "banh-tep-chien-gion",
      "title": "Bánh Tép Chiên Giòn",
      "image": "/assets/images/mon-an/an-vat/banhtep.jpg",
      "description": "Bánh tép chiên giòn, thơm mùi tép, ăn kèm rau sống và nước mắm",
      "time": 25,
      "rating": 4.8
    }
  ]
},
{
  "id": "banh-goi",
  "title": "Bánh Gối",
  "description": "Bánh gối Hà Nội giòn rụm, nhân thịt băm, miến, mộc nhĩ, nấm hương, ăn kèm nước mắm chua ngọt, rau sống.",
  "image": "/assets/images/mon-an/an-vat/banhgoi.jpg",
  "time": 35,
  "rating": 4.7,
  "ratingCount": 175,
  "author": "Chị Ngọc",
  "difficulty": "Dễ",
  "calories": "320 kcal",
  "date": "02/06/2025",
  "tags": ["Ăn vặt", "Hà Nội", "Chiên"],
  "ingredients": [
    "Vỏ bánh gối (hoặc vỏ hoành thánh loại lớn) - 20 cái",
    "Thịt nạc vai băm - 200g",
    "Mộc nhĩ, nấm hương - 20g (ngâm nở, thái nhỏ)",
    "Miến dong - 30g (ngâm mềm, cắt khúc ngắn)",
    "Trứng cút - 10 quả (luộc chín, bóc vỏ, bổ đôi)",
    "Hành tây - 1/2 củ (thái hạt lựu)",
    "Hành khô - 1 củ (băm nhỏ)",
    "Gia vị: Nước mắm, đường, tiêu, hạt nêm, dầu hào (tùy chọn)",
    "Dầu ăn - đủ để chiên ngập dầu",
    "Rau sống ăn kèm (xà lách, rau thơm)",
    "Nước mắm chua ngọt (để chấm)"
  ],
  "steps": [
    {
      "title": "Làm nhân bánh gối",
      "desc": "1. Trộn đều thịt nạc vai băm, mộc nhĩ, nấm hương, miến dong, hành tây, hành khô.\n2. Nêm 2 thìa canh nước mắm, 1 thìa cà phê đường, 1/2 thìa cà phê tiêu, 1/2 thìa cà phê hạt nêm (có thể thêm 1 thìa cà phê dầu hào).\n3. Trộn đều hỗn hợp và ướp khoảng 15-20 phút cho nhân ngấm gia vị."
    },
    {
      "title": "Gói bánh gối",
      "desc": "1. Trải vỏ bánh gối ra mặt phẳng sạch.\n2. Cho một lượng nhân vừa đủ vào một nửa miếng vỏ bánh.\n3. Đặt 1/2 quả trứng cút luộc lên trên phần nhân.\n4. Gấp đôi vỏ bánh lại, tạo hình bán nguyệt. Dùng nĩa hoặc tay miết chặt mép bánh để nhân không bị bung ra khi chiên. Có thể tạo đường viền hình sóng cho đẹp mắt."
    },
    {
      "title": "Chiên bánh gối",
      "desc": "1. Đặt chảo lên bếp, cho lượng dầu ăn đủ để chiên ngập bánh vào đun nóng già (khoảng 170-180°C).\n2. Hạ lửa vừa, lần lượt cho từng chiếc bánh gối vào chiên. Chiên đều hai mặt cho đến khi vỏ bánh vàng giòn, phồng đẹp mắt.\n3. Vớt bánh ra, đặt lên giấy thấm dầu để loại bỏ dầu thừa."
    },
    {
      "title": "Pha nước chấm và thưởng thức",
      "desc": "1. Pha nước mắm chua ngọt theo công thức: 2 thìa canh nước mắm, 2 thìa canh đường, 3 thìa canh nước lọc, 1 thìa canh nước cốt chanh (hoặc giấm), tỏi ớt băm.\n2. Bánh gối ngon nhất khi ăn nóng, giòn rụm.\n3. Thưởng thức bánh gối kèm rau sống (xà lách, rau mùi, tía tô) và chấm với nước mắm chua ngọt."
    }
  ],
  "related": [
    {
      "id": "banh-duc-nong",
      "title": "Bánh Đúc Nóng",
      "image": "/assets/images/mon-an/an-vat/banhduc.jpg",
      "description": "Bánh đúc nóng mềm mịn, nước mắm mặn ngọt, thịt băm và mộc nhĩ",
      "time": 30,
      "rating": 4.8
    },
    {
      "id": "nem-chua-ran",
      "title": "Nem Chua Rán",
      "image": "/assets/images/mon-an/an-vat/nemchua.jpg",
      "description": "Nem chua rán giòn rụm, vị chua cay, ăn kèm dưa leo và tương ớt",
      "time": 25,
      "rating": 4.7
    },
    {
      "id": "chagio",
      "title": "Chả Giò",
      "image": "/assets/images/mon-an/khai-vi/chagio.jpg",
      "description": "Chả giò vàng giòn, nhân thịt và rau củ, ăn kèm bún và rau sống",
      "time": 40,
      "rating": 4.8
    }
  ]
},
{
  "id": "banh-duc-nong",
  "title": "Bánh Đúc Nóng",
  "description": "Bánh đúc nóng là món ăn dân dã nhưng đầy tinh tế của ẩm thực Hà Nội. Sợi bánh đúc mềm mịn, trắng ngần, tạo nên hương vị ấm áp, quen thuộc.",
  "image": "/assets/images/mon-an/an-vat/banhduc.jpg",
  "time": 30,
  "rating": 4.8,
  "ratingCount": 185,
  "author": "Chị Lan",
  "difficulty": "Dễ",
  "calories": "350 kcal",
  "date": "02/06/2025",
  "tags": ["Ăn vặt", "Hà Nội", "Truyền thống", "Món nóng"],
  "ingredients": [
    "Bột gạo tẻ - 200g",
    "Bột năng - 50g",
    "Thịt nạc băm - 150g",
    "Mộc nhĩ - 20g (ngâm nở, thái sợi)",
    "Hành khô - 30g (băm nhỏ)",
    "Nước mắm - 50ml",
    "Đường - 20g",
    "Hành lá - 10g (thái nhỏ, phi mỡ hành)",
    "Dầu ăn - để xào và phi hành",
    "Muối - 1/2 thìa cà phê",
    "Nước lọc - 600ml (cho bánh đúc) + 100ml (cho nước chấm)",
    "Ớt tươi băm (tùy chọn)"
  ],
  "steps": [
    {
      "title": "Sơ chế và làm nhân thịt",
      "desc": "1. **Mộc nhĩ:** Ngâm nở trong nước ấm, rửa sạch, thái sợi nhỏ. Nếu có nấm hương, có thể ngâm và thái tương tự.\n2. **Hành khô:** Bóc vỏ, băm nhỏ.\n3. **Làm nhân:** Đặt chảo lên bếp, cho một chút dầu ăn. Phi thơm một nửa lượng hành khô băm. Cho **thịt nạc băm** vào xào săn, nêm 1 thìa canh nước mắm, một chút tiêu. Tiếp theo, cho **mộc nhĩ** (và nấm hương nếu dùng) vào xào cùng. Thêm khoảng 50ml nước lọc, rim nhỏ lửa khoảng 5 phút cho nhân thấm đều gia vị và chín tới. Nêm nếm lại cho vừa ăn, tắt bếp."
    },
    {
      "title": "Pha bột bánh đúc",
      "desc": "1. Trong một tô lớn, cho **200g bột gạo tẻ**, **50g bột năng** và **1/2 thìa cà phê muối** vào, trộn đều.\n2. Từ từ đổ **600ml nước lạnh** vào tô bột, khuấy đều tay cho bột tan hoàn toàn, không còn vón cục. Đảm bảo hỗn hợp thật mịn."
    },
    {
      "title": "Nấu bánh đúc",
      "desc": "1. Lọc hỗn hợp bột qua rây một lần nữa để loại bỏ cặn, giúp bánh mịn hơn.\n2. Đặt nồi chứa hỗn hợp bột lên bếp, đun trên lửa nhỏ. **Khuấy liên tục và đều tay** theo một chiều để bột không bị cháy hoặc dính đáy nồi. Quá trình này rất quan trọng để bánh không bị vón cục.\n3. Khi bột bắt đầu sánh đặc lại và chuyển sang màu trong hơn, tiếp tục khuấy thêm khoảng 5-7 phút nữa cho đến khi bột tạo thành một khối dẻo, mịn và có thể dễ dàng tách ra khỏi thành nồi. Tắt bếp."
    },
    {
      "title": "Hoàn thành và làm nước chấm",
      "desc": "1. **Làm mỡ hành:** Đặt chảo nhỏ lên bếp, cho một ít dầu ăn. Phi thơm phần hành khô băm còn lại. Cho hành lá thái nhỏ vào đảo nhanh rồi tắt bếp.\n2. **Pha nước chấm:** Trong một nồi nhỏ, cho **100ml nước lọc** và **20g đường** vào đun sôi cho đường tan hoàn toàn. Sau đó, thêm **50ml nước mắm** và **ớt băm** (tùy khẩu vị) vào, khuấy đều, nêm nếm lại cho vừa vị chua, cay, mặn, ngọt.\n3. **Trình bày:** Múc bánh đúc nóng ra bát. Chan đều nhân thịt băm mộc nhĩ lên trên, rưới thêm mỡ hành phi và chan nước mắm chua ngọt. Ăn nóng để cảm nhận trọn vẹn hương vị của bánh đúc nóng."
    }
  ],
  "related": [
    {
      "id": "banh-goi",
      "title": "Bánh Gối",
      "image": "/assets/images/mon-an/an-vat/banhgoi.jpg",
      "description": "Bánh gối chiên giòn, nhân thịt, miến, mộc nhĩ, ăn kèm nước mắm chua ngọt",
      "time": 35,
      "rating": 4.7
    },
    {
      "id": "banh-duc-la-dua",
      "title": "Bánh Đúc Lá Dứa",
      "image": "/assets/images/mon-an/trang-mieng/banhducladua.jpg",
      "description": "Bánh đúc lá dứa mềm mịn, thơm mùi lá dứa, ăn kèm nước cốt dừa",
      "time": 30,
      "rating": 4.8
    },
    {
      "id": "nem-chua-ran",
      "title": "Nem Chua Rán",
      "image": "/assets/images/mon-an/an-vat/nemchua.jpg",
      "description": "Nem chua rán giòn rụm, vị chua cay, ăn kèm dưa leo và tương ớt",
      "time": 25,
      "rating": 4.7
    }
  ]
},
{
  "id": "nem-chua-ran",
  "title": "Nem Chua Rán",
  "description": "Nem chua rán Hà Nội vàng giòn, vị chua cay đặc trưng, ăn kèm dưa chuột, củ đậu và tương ớt.",
  "image": "/assets/images/mon-an/an-vat/nemchua.jpg",
  "time": 25,
  "rating": 4.7,
  "ratingCount": 280,
  "author": "Bạn Trẻ Hà Nội",
  "difficulty": "Dễ",
  "calories": "300 kcal",
  "date": "02/06/2025",
  "tags": ["Ăn vặt", "Chiên", "Hà Nội", "Đường phố"],
  "ingredients": [
    "Nem chua thành phẩm - 500g (chọn loại nem chua có thể rán)",
    "Bột chiên giòn - 100g",
    "Bột mì đa dụng - 30g",
    "Trứng gà - 1 quả",
    "Nước lọc - 100ml (hoặc sữa tươi không đường)",
    "Dầu ăn - đủ để chiên ngập dầu",
    "Dưa chuột - 1-2 quả",
    "Củ đậu - 1/2 củ (tùy chọn)",
    "Tương ớt, tương cà (để chấm)",
    "Rau răm (tùy chọn)"
  ],
  "steps": [
    {
      "title": "Sơ chế nem chua và pha bột",
      "desc": "1. **Nem chua:** Bóc bỏ lớp lá hoặc vỏ bọc nem chua. Cắt nem thành từng miếng vừa ăn (hoặc để nguyên thanh nếu nem nhỏ).\n2. **Pha bột:** Trong một tô lớn, cho bột chiên giòn, bột mì và trứng gà vào. Từ từ thêm nước lọc (hoặc sữa tươi) vào, khuấy đều cho đến khi hỗn hợp bột sánh mịn, không vón cục. Đảm bảo bột có độ đặc vừa phải để bám đều vào nem."
    },
    {
      "title": "Chiên nem chua",
      "desc": "1. Đặt chảo sâu lòng lên bếp, cho lượng dầu ăn đủ để chiên ngập nem vào đun nóng già (khoảng 170-180°C).\n2. Khi dầu nóng, nhúng từng miếng nem chua vào hỗn hợp bột sao cho bột bám đều và phủ kín nem.\n3. Nhẹ nhàng cho nem đã nhúng bột vào chảo dầu nóng. Chiên trên lửa vừa, đảo đều các mặt để nem vàng đều và giòn rụm.\n4. Khi nem chuyển sang màu vàng cánh gián đẹp mắt, vớt nem ra, đặt lên giấy thấm dầu để loại bỏ dầu thừa."
    },
    {
      "title": "Trình bày và thưởng thức",
      "desc": "1. **Sơ chế rau ăn kèm:** Dưa chuột và củ đậu rửa sạch, thái lát mỏng hoặc thái que vừa ăn.\n2. Bày nem chua rán ra đĩa cùng với dưa chuột, củ đậu (nếu có) và rau răm.\n3. Thưởng thức nem chua rán khi còn nóng, chấm kèm với tương ớt hoặc tương cà. Vị chua cay, giòn tan của nem hòa quyện với rau củ thanh mát sẽ rất hấp dẫn."
    }
  ],
  "related": [
    {
      "id": "banh-goi",
      "title": "Bánh Gối",
      "image": "/assets/images/mon-an/an-vat/banhgoi.jpg",
      "description": "Bánh gối chiên giòn, nhân thịt, miến, mộc nhĩ, ăn kèm nước mắm chua ngọt",
      "time": 35,
      "rating": 4.7
    },
    {
      "id": "khoai-tay-chien",
      "title": "Khoai Tây Chiên",
      "image": "/assets/images/mon-an/an-vat/khoaitaychien.jpg",
      "description": "Khoai tây chiên giòn rụm, vàng ươm, ăn kèm tương ớt hoặc sốt mayonnaise",
      "time": 20,
      "rating": 4.7
    },
    {
      "id": "chagio",
      "title": "Chả Giò",
      "image": "/assets/images/mon-an/khai-vi/chagio.jpg",
      "description": "Chả giò vàng giòn, nhân thịt và rau củ, ăn kèm bún và rau sống",
      "time": 40,
      "rating": 4.8
    }
  ]
},
{
  "id": "banh-chuoi-chien",
  "title": "Bánh Chuối Chiên",
  "description": "Bánh chuối chiên là món ăn vặt dân dã nhưng vô cùng hấp dẫn. Món này thường được thưởng thức nóng, là lựa chọn tuyệt vời cho những buổi xế chiều.",
  "image": "/assets/images/mon-an/an-vat/banhchuoichien.jpg",
  "time": 20,
  "rating": 4.7,
  "ratingCount": 160,
  "author": "Cô Mai",
  "difficulty": "Dễ",
  "calories": "320 kcal",
  "date": "02/06/2025",
  "tags": ["Ăn vặt", "Chiên", "Ngọt", "Dân dã"],
  "ingredients": [
    "Chuối sứ (chuối xiêm) chín - 5-7 quả",
    "Bột gạo - 150g",
    "Bột mì đa dụng - 50g",
    "Bột năng - 20g",
    "Đường - 30g",
    "Nước cốt dừa - 100ml",
    "Nước lạnh - khoảng 100-120ml (điều chỉnh độ sánh)",
    "Baking powder (bột nở) - 1/2 thìa cà phê",
    "Muối - 1/4 thìa cà phê",
    "Dầu ăn - đủ để chiên ngập dầu",
    "Vừng đen hoặc trắng (tùy chọn)"
  ],
  "steps": [
    {
      "title": "Sơ chế chuối và pha bột",
      "desc": "1. **Chuối:** Bóc vỏ chuối, dùng dao hoặc thớt ép dẹt chuối (không quá mỏng) để chuối có độ rộng khi chiên. Có thể cắt đôi nếu chuối quá dài.\n2. **Pha bột:** Trong một tô lớn, cho bột gạo, bột mì, bột năng, đường, baking powder và muối vào trộn đều. Từ từ cho nước cốt dừa và nước lạnh vào, khuấy đều cho đến khi hỗn hợp bột sánh mịn, không vón cục. Để bột nghỉ khoảng 15-20 phút."
    },
    {
      "title": "Chiên bánh chuối",
      "desc": "1. Đặt chảo sâu lòng lên bếp, cho lượng dầu ăn đủ để chiên ngập bánh vào đun nóng già (khoảng 170-180°C).\n2. Khi dầu nóng, nhúng từng miếng chuối đã ép dẹt vào hỗn hợp bột sao cho bột bám đều và phủ kín miếng chuối. Nếu thích, rắc thêm một chút vừng đen/trắng lên bề mặt bánh.\n3. Nhẹ nhàng cho chuối đã nhúng bột vào chảo dầu nóng. Chiên trên lửa vừa, khi bánh vàng đều một mặt thì lật bánh chiên mặt còn lại.\n4. Tiếp tục chiên cho đến khi bánh chín vàng đều, phồng xốp và giòn rụm. Vớt bánh ra, đặt lên giấy thấm dầu để loại bỏ dầu thừa."
    },
    {
      "title": "Thưởng thức",
      "desc": "1. Bánh chuối chiên ngon nhất khi ăn nóng để giữ được độ giòn của vỏ bánh và độ mềm ngọt của chuối bên trong.\n2. Bánh có thể ăn trực tiếp hoặc chấm kèm một chút tương ớt ngọt nếu thích vị cay nhẹ."
    }
  ],
  "related": [
    {
      "id": "banh-cam",
      "title": "Bánh Cam",
      "image": "/assets/images/mon-an/trang-mieng/banhcam.jpg",
      "description": "Bánh cam chiên giòn, nhân đậu xanh ngọt bùi, vỏ ngoài phủ mè",
      "time": 40,
      "rating": 4.7
    },
    {
      "id": "khoai-tay-chien",
      "title": "Khoai Tây Chiên",
      "image": "/assets/images/mon-an/an-vat/khoaitaychien.jpg",
      "description": "Khoai tây chiên giòn rụm, vàng ươm, ăn kèm tương ớt hoặc sốt mayonnaise",
      "time": 20,
      "rating": 4.7
    },
    {
      "id": "banh-bao-chien",
      "title": "Bánh Bao Chiên",
      "image": "/assets/images/mon-an/an-vat/banhbaochien.jpg",
      "description": "Bánh bao chiên vàng giòn, nhân thịt đậm đà, ăn kèm tương ớt",
      "time": 30,
      "rating": 4.8
    }
  ]
}
]