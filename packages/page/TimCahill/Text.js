import {getUrl} from "./utils";


export const Text = {
    en: {
        lang: 'en',
        meta_description: 'Trade share CFDs online and access the largest companies in the world on the NYSE, Nasdaq & ASX markets. Take a position on your favourite stocks today.',
        page_title: 'Trade Share CFDs Online | Share CFD Trading with ACY',

        section_1: {
            title: "Share CFDs",
            subtitle: "Take a position on more than 660 global shares across the Australian Stock Exchange, New York Stock Exchange (NYSE) and the Nasdaq Exchange.",
            button: "Open an Account",
        },
        section_1_below: {
            title: "Share CFDs",
            span1: "Now you can trade over 600 of the world’s largest share CFDs on the powerful ",
            span2: 'MT5 Xchange trading platform ',
            span3: 'at one of the most competitive leverage rates in the world. It has never been easier to take a position on your favourite share CFDs like Apple, Google, Amazon, BHP and Commonwealth Bank, to name a few.'
        },
        section_2: {
            title: "What are Share CFDs?",
            p1: 'Share CFDs are similar to trading regular shares across the global exchanges, except you only need a small amount of money up front to control the total position.',
            p2: 'When you are trading straight shares, you take ownership of the company. When it comes to share CFDs, you can take a position long or short, but you do not own the underlying instrument you are trading.',
            p3: function () {
                return `<span>Now you can create a truly diversified portfolio by adding share CFDs to your buy and sell list, along with <span/><a href=${getUrl("products/forex")} target="_blank">Forex</a><span>, </span><a href=${getUrl("products/indices")} target="_blank">Indices</a><span>, </span> <a href=${getUrl("products/oils")} target="_blank">Commodities</a> <span>and</span> <a href=${getUrl("products/cryptocurrencies")} target="_blank">Cryptocurrencies<a/><span>, all via our </span><a href=${getUrl("trading-platforms/xchange-mt5")} target="_blank">MT5 Xchange trading platform</a>`
            },

        },


        advantageTable: {
            title: 'Advantages of trading Share CFDs',
            points: {

                p1: {
                    title: 'International Markets',
                    subtitle: 'Choose from the largest share CFDs across the New York Stock Exchange (NYSE), Nasdaq and ASX markets to truly diversify your portfolio.'
                },
                p2: {
                    title: 'Low-cost Trading',
                    subtitle: 'Commissions on share CFDs across the ASX are a low 0.08%, and you can trade US share CFDs from $0.02 per share.'
                },
                p3: {
                    title: 'Leverage up to 25 to 1',
                    subtitle: 'Take advantage of one of the best margin rates across over 600 global share CFDs with only 4% margin required. This means you get 25 to 1 leverage on all share CFDs on the NYSE, Nasdaq and ASX exchanges.'
                },
                p4: {
                    title: 'Trade Long or Short',
                    subtitle: 'The significant advantage of share CFDs is the ability to go either long or short at the click of a button on leverage. Never has it been easier to take a short position if you believe the markets are going to fall or even hedge an existing share portfolio. The choice is yours.'
                },
            },
            button_1: "Try Demo Account",
            button_2: "Create Live Account"

        },


        section_logo_group: {
            title: 'Trade the world’s largest companies'
        },

        section_CFD_table: {
            title: 'Share CFD trading example',
            points: {

                p1: {
                    title: 'Open',
                    row1: {
                        point1: 'BHP (BHP.AX) AUD',
                        point2: 'Bid 32.50/Ask 32.52',
                        point3: 'Leverage 25:1',
                        point4: 'BHP (BHP.AX) AUD',
                        point5: 'Position size 1,000 share CFDs'
                    },
                    row2: {title: 'Opened position value', p: '1,000 X 32.52  = $32,520 AUD'},
                    row3: {title: 'Margin per position', p: '32,520 / 25 = $1,300.80 AUD'}
                },
                p2: {
                    title: 'Close',
                    row1: {point1: 'Bid 33.00/Ask 33.01', point2: 'Close price @ $33.00'},
                    row2: {title: 'Closed position value', p: '$33,000'},
                    row3: {title: 'P/L', p: 'Profit: $33,000 - $32,520 = $480'}
                },
                p3: {
                    title: 'Close',
                    row1: {point1: 'Bid 32.00/Ask 32.01', point2: 'Close price @ $32.00'},
                    row2: {title: 'Closed position value', p: '$32,000'},
                    row3: {title: 'P/L', p: 'Loss: $32,520 - $32,000 = $520'}
                }


            },
        },
        section_text_button: {
            title: 'It has never been easier to access the global markets from one trading account. Take a position today.',
            button: 'Open an Account'
        },

        why_trade_with_acy: {
            title: 'Why Trade with ACY Securities',
            subtitle: 'Referred to as half Wall Street and half Silicon Valley, we are a tech-inspired multi-asset broker focused firmly on empowering you, our clients, with institutional-grade trading conditions, premium education and cut-through market analysis. ',
            points: {

                p1: {title: 'Superior Trading Conditions', subtitle: 'Spreads from 0.0 pips | Ultra-fast execution '},
                p2: {
                    title: 'Premium Educational Resources ',
                    subtitle: 'Structured, customizable, bite-sized solutions '
                },
                p3: {title: 'Personal Account Manager', subtitle: 'Dedicated to providing you trading support'},
                p4: {title: 'ASIC-regulated', subtitle: 'Headquartered in ACY Tower – Sydney'},
                p5: {title: 'Cut-through Market Analysis ', subtitle: 'Morning & afternoon reports | Trade Ideas'},
                p6: {title: 'True Multi-Asset Provider', subtitle: 'FX | Indices | Commodities | Stocks | Crypto '}

            },
            button_1: "Open an Account",
            button_2: "Try a Demo Account"

        },

    },


    zh: {
        lang: 'zh',

        meta_description: '交易纽约证券交易所、纳斯达克和澳大利亚证券交易所中全球市值最高的股票差价合约。 现在就开始交易。',
        page_title: '在线交易股票差价合约 | 在ACY交易股票',

        section_1: {
            title: "股票差价合约",
            subtitle: "交易来自澳大利亚证券交易所，纽约证券交易所（NYSE）和纳斯达克的660多支股票。",
            button: "真实账户",
        },

        section_1_below: {
            title: "股票差价合约",
            span1: "运用功能强大的",
            span2: 'MT5 Xchange交易平台,',
            span3: '以全球最具竞争力的杠杆交易600多支全球市值最高的股票。让您轻松持有并交易如苹果、谷歌、亚马逊、必和必拓和澳洲联邦银行等公司的股票差价合约。'
        },

        section_2: {
            title: "什么是股票差价合约？",
            p1: '股票差价合约类似于交易所买卖普通股票。区别在于，股票差价合约可以利用杠杆的灵活性',
            p2: '当您直接购买公司股份，这属于股票交易，意味着您持有了该公司的股份。但是当交易股票差价合约时，是以保证金进行的合约交易，购买的是标的资产衍生品，而非实际持有。',
            p3: function () {
                return `<span>现在开始，通过我们的<span/><a href=${getUrl("trading-platforms/xchange-mt5")} target="_blank">MT5 Xchange交易平台</a><span>将股票差价合约及</span><a href=${getUrl("products/forex")} target="_blank">外汇</a><span>、</span><a href=${getUrl("products/indices")} target="_blank">指数</a><span>、</span><a href=${getUrl("products/cryptocurrencies")} target="_blank">大宗商品<a/><span>和</span><a href=${getUrl("")} target="_blank">数字货币</a><span>一起创建您自己的投资组合。</span>`
            },

        },


        advantageTable: {
            title: '股票差价合约交易的优势',
            points: {

                p1: {title: '国际市场', subtitle: '从纽约证券交易所（NYSE），纳斯达克和澳大利亚证券交易所提供的股票差价合约中进行选择，以真正实现投资组合的多元化'},
                p2: {title: '超低交易成本', subtitle: '澳大利亚证券交易所的股票差价合约佣金低至0.08％，美国股票差价合约的佣金为$ 0.02美元。'},
                p3: {
                    title: '杠杆高达25:1',
                    subtitle: '利用极具竞争性的杠杆，仅需4%的保证金即可开始交易600多支股票。 这意味着您可以使用25:1的杠杆交易纽约证券交易所、纳斯达克和澳大利亚证券交易所的所有股票差价合约。'
                },
                p4: {
                    title: '支持做多和做空',
                    subtitle: '股票差价合约最明显的优势是能够利用杠杆进行双向交易。市场有可能出现下跌趋势，势必影响投资组合的价值，股票差价合约则是用来对冲现有投资组合的最佳保险'
                },


            },
            button_1: "模拟账户",
            button_2: "真实账户"

        },


        section_logo_group: {
            title: '交易全球市值最高的公司股票'
        },

        section_CFD_table: {
            title: '股票差价合约交易示例',
            points: {

                p1: {
                    title: '开仓',
                    row1: {
                        point1: 'BHP (BHP.AX) AUD',
                        point2: 'Bid 32.50/Ask 32.52',
                        point3: '杠杆 25:1',
                        point4: 'BHP (BHP.AX) AUD',
                        point5: '持有仓位 1,000 股票差价合约'
                    },
                    row2: {title: '开仓价值', p: '1,000 X 32.52  = $32,520 AUD'},
                    row3: {title: '开仓保证金', p: '32,520 / 25 = $1,300.80 AUD'}
                },
                p2: {
                    title: '平仓',
                    row1: {point1: '卖价 33.00/Ask 33.01', point2: '平仓价格 @ $33.00'},
                    row2: {title: '平仓价值', p: '$33,000'},
                    row3: {title: 'P/L', p: '盈利: $33,000 - $32,520 = $480'}
                },
                p3: {
                    title: '平仓',
                    row1: {point1: 'Bid 32.00/Ask 32.01', point2: '平仓价格 @ $32.00'},
                    row2: {title: '平仓价值', p: '$32,000'},
                    row3: {title: 'P/L', p: '亏损: $32,520 - $32,000 = $520'}
                }


            },
        },

        section_text_button: {
            title: '通过一个账户即可交易全球市场，就是这么简单。立即开始交易。',
            button: '真实账户'
        },

        why_trade_with_acy: {
            title: '选择ACY稀万证券的六大理由',
            subtitle: '被誉为华尔街和硅谷的完美结合，我们是一家以技术为灵感、以客户为中心的多元资产提供商，致力于为客户提供卓越的在线交易新标准、优质交易最远和深入市场分析',
            points: {

                p1: {title: '超低交易成本', subtitle: '点差从0开始 |闪电般执行速度'},
                p2: {title: '优质教育资源', subtitle: '结构化、定制化、系统化的解决方案'},
                p3: {title: '一对一客户经理', subtitle: '提供全方位的交易支持'},
                p4: {title: '受ASCI监管', subtitle: '部设在澳大利亚金融中心悉尼'},
                p5: {title: '深入市场的分析', subtitle: '早市分析和午后市场报告 | 交易策略'},
                p6: {title: '多资产类别提供商', subtitle: '外汇 | 指数 | 大宗商品 | 股票 | 数字货币'}

            },

            button_1: "真实账户",
            button_2: "模拟账户",

        },


    },

    id: {
        lang: 'id',
        meta_description: 'Perdagangan Saham CFD online dan akses perusahaan-perusahaan terbesar di dunia di pasar NYSE, Nasdaq & ASX. Ambil posisi di saham favorit Anda hari ini',
        page_title: 'Perdagangan Saham CFD Online | Perdagangan Saham CFD dengan ACY',

        section_1: {
            title: "Saham CFD",
            subtitle: "Ambil posisi di lebih dari 660 saham global di Bursa Efek Australia, Bursa Saham New York (NYSE) dan Nasdaq Exchange.",
            button: "Buka akun",
        },
        section_1_below: {
            title: "Saham CFD",
            span1: "Sekarang Anda dapat berdagang lebih dari 600 CFD saham terbesar di dunia pada ",
            span2: 'platform perdagangan MT5 Xchange ',
            span3: 'yang kuat di salah satu tingkat leverage paling kompetitif di dunia. Belum pernah lebih mudah untuk mengambil posisi di CFD saham favorit Anda seperti Apple, Google, Amazon, BHP dan Commonwealth Bank, untuk beberapa nama.'
        },
        section_2: {
            title: "Apa itu Saham CFD ?",
            p1: 'Saham CFD  mirip dengan perdagangan saham biasa di bursa global, kecuali Anda hanya membutuhkan sejumlah kecil uang di depan untuk mengendalikan posisi total.',
            p2: 'Ketika Anda memperdagangkan saham langsung, Anda mengambil kepemilikan perusahaan. Ketika datang untuk membagikan CFD, Anda dapat mengambil posisi panjang atau pendek, tetapi Anda tidak memiliki instrumen dasar yang Anda perdagangkan.',
            p3: function () {
                return `<span>Sekarang Anda dapat membuat portofolio yang benar-benar terdiversifikasi tetapi menambahkan CFD saham ke daftar beli dan jual Anda, bersama dengan  <span/><a href=${getUrl("products/forex")} target="_blank">Forex</a><span>, </span><a href=${getUrl("products/indices")} target="_blank">Indeks</a><span>, </span> <a href=${getUrl("products/oils")} target="_blank">Komoditas </a> <span>dan</span> <a href=${getUrl("products/cryptocurrencies")} target="_blank">Cryptocurrency<a/><span>, semuanya melalui  </span><a href=${getUrl("trading-platforms/xchange-mt5")} target="_blank">platform perdagangan MT5 Xchange kami.</a>`
            },

        },


        advantageTable: {
            title: 'Keuntungan perdagangan Saham CFD ',
            points: {

                p1: {
                    title: 'Pasar Internasional',
                    subtitle: 'Pilih dari CFD saham terbesar di New York Stock Exchange (NYSE), Nasdaq, dan pasar ASX untuk benar-benar mendiversifikasi portofolio Anda.'
                },
                p2: {
                    title: 'Perdagangan berbiaya rendah',
                    subtitle: 'Komisi CFD saham di ASX adalah 0,08% rendah, dan Anda dapat memperdagangkan CFD saham AS dari $ 0,02 per saham.'
                },
                p3: {
                    title: 'Leverage hingga 25 hingga 1',
                    subtitle: 'Manfaatkan salah satu tingkat margin terbaik di lebih dari 600 CFD pangsa global dengan hanya margin 4% yang diperlukan. Ini berarti Anda mendapatkan leverage 25 banding 1 pada semua CFD saham di bursa NYSE, Nasdaq, dan ASX.'
                },
                p4: {
                    title: 'Trade Long atau Short',
                    subtitle: 'Keuntungan yang signifikan dari CFD saham adalah kemampuan untuk melakukan long atau shot di klik tombol pada leverage. Tidak pernah lebih mudah untuk mengambil posisi pendek jika Anda yakin pasar akan jatuh atau bahkan lindung nilai dari portofolio saham yang ada. Pilihan ada padamu.'

                },

            },
            button_1: "Coba Akun Demo",
            button_2: "Buka akun"

        },
            section_logo_group: {
                title: 'Perdagangkan perusahaan terbesar di dunia'
            },

            section_CFD_table: {
                title: 'Contoh perdagangan Saham CFD',
                points: {

                    p1: {
                        title: 'Buka',
                        row1: {
                            point1: 'BHP (BHP.AX) AUD',
                            point2: 'Bid 32.50/Ask 32.52',
                            point3: 'Pengaruh 25:1',
                            point4: 'BHP (BHP.AX) AUD',
                            point5: 'Ukuran posisi 1,000 share CFDs'
                        },
                        row2: {title: 'Nilai posisi terbuka', p: '1,000 X 32.52  = $32,520 AUD'},
                        row3: {title: 'Margin per posisi', p: '32,520 / 25 = $1,300.80 AUD'}
                    },
                    p2: {
                        title: 'Tutup',
                        row1: {point1: 'Tawaran 33.00/Ask 33.01', point2: 'Tutup harga @ $33.00'},
                        row2: {title: 'Nilai posisi tertutup', p: '$33,000'},
                        row3: {title: 'P/L', p: 'keuntungan: $33,000 - $32,520 = $480'}
                    },
                    p3: {
                        title: 'Tutup',
                        row1: {point1: 'Tawaran 32.00/Ask 32.01', point2: 'Tutup harga @ $32.00'},
                        row2: {title: 'Nilai posisi tertutup', p: '$32,000'},
                        row3: {title: 'P/L', p: 'kerugian: $32,520 - $32,000 = $520'}
                    }


                },
            },
            section_text_button: {
                title: 'It has never been easier to access the global markets from one trading account. Take a position today.',
                button: 'Open an Account'
            },

            why_trade_with_acy: {
                title: 'Mengapa Berdagang dengan ACY Securities',
                subtitle: 'Disebut sebagai setengah Wall Street dan setengah Lembah Silikon, kami adalah pialang multi-aset yang diilhami teknologi, dengan fokus kuat pada pemberdayaan Anda, klien kami, dengan kondisi perdagangan tingkat institusi, pendidikan premium, dan analisis pasar yang menyeluruh',
                points: {

                    p1: {
                        title: 'Ketentuan Perdagangan Superior',
                        subtitle: 'Spread mulai 0,0 pips | Eksekusi sangat cepat'
                    },
                    p2: {
                        title: 'Sumber Daya Pendidikan Premium',
                        subtitle: 'Solusi terstruktur, dapat disesuaikan, berukuran gigitan'
                    },
                    p3: {
                        title: 'Manajer Akun Pribadi',
                        subtitle: 'Didedikasikan untuk memberikan Anda dukungan perdagangan'
                    },
                    p4: {title: 'Di awasi ASIC', subtitle: 'Berkantor pusat di ACY Tower - Sydney'},
                    p5: {title: 'Analisis Pasar Cut-through', subtitle: 'Laporan pagi & sore | Ide Perdagangan'},
                    p6: {title: 'Penyedia Multi-Aset Benar', subtitle: 'FX | Indeks | Komoditas | Stok | Crypto'}

                },
                button_1: "Buka Akun",
                button_2: "Coba Akun Demo"

            },

        },

        vi: {
            lang: "vi",
            meta_description: 'Giao dịch Hợp đồng chênh lệch trực tuyến và tiếp cận các công ty lớn nhất trên thế giới được niêm yết tại sàn giao dịch NYSE, NASDAQ và ASX. Đặt vị thế giao dịch trên cổ phiếu ưa thích của bạn ngay hôm nay.',
            page_title: 'Giao dịch Cổ phiếu CFDs trực tuyến | Giao dịch Hợp đồng chênh lệch Cổ phiếu cùng ACY',

            section_1: {
                title: "Hợp đồng chênh lệch Cổ phiếu",
                subtitle: "Đặt vị thế giao dịch trên hơn 660 cổ phiếu trên Sàn giao dịch chứng khoán Úc, Sàn giao dịch New York (NYSE) và Sàn giao dịch NASDAQ",
                button: "Mở tài khoản",
            },
            section_1_below: {
                title: "Hợp đồng chênh lệch Cổ phiếu",
                span1: "Giờ đây, bạn có thể giao dịch hơn 600 cổ phiếu CFDs lớn nhất thế giới trên nền tảng giao dịch ",
                span2: 'MT5 Xchange ',
                span3: 'mạnh mẽ với một trong những tỷ lệ đòn bẩy cạnh tranh nhất trên thế giới. Chưa bao giờ dễ dàng hơn để có một vị thế giao dịch trên các cổ phiếu CFDs ưa thích của bạn, đơn cử như Apple, Google, Amazon, BHP và Commonwealth Bank.'
            },
            section_2: {
                title: "Hợp đồng chênh lệch Cổ phiếu là gì?",
                p1: 'Cổ phiếu CFD tương tự như giao dịch cổ phiếu cơ sở trên các sàn giao dịch toàn cầu, ngoại trừ bạn chỉ cần một khoản vốn nhỏ để có được vị thế giao dịch.',
                p2: 'Khi bạn đang giao dịch cổ phiếu cơ sở, bạn có quyền sở hữu công ty. Còn đồi với cổ phiếu CFD, bạn có thể giữ một vị thế mua hoặc bán, nhưng bạn không sở hữu tài sản cơ bản mà bạn đang giao dịch.',
                p3: function () {
                    return `<span>Giờ đây, bạn có thể tạo một danh mục đầu tư thực sự đa dạng bằng cách thêm cổ phiếu CFD vào danh sách giao dịch của bạn, cùng với <span/><a href=${getUrl("products/forex")} target="_blank">Ngoại hối</a><span>, </span><a href=${getUrl("products/indices")} target="_blank">Chỉ số</a><span>, </span> <a href=${getUrl("products/oils")} target="_blank">Hàng hóa </a> <span>and</span> <a href=${getUrl("products/cryptocurrencies")} target="_blank">Tiền điện tử<a/><span>, tất cả thông qua nền tảng giao dịch </span><a href=${getUrl("trading-platforms/xchange-mt5")} target="_blank">MT5 Xchange </a><span>của chúng tôi</span>`
                },

            },


            advantageTable: {
                title: 'Lợi ích của việc giao dịch cổ phiếu CFDs',
                points: {

                    p1: {
                        title: 'Thị trường quốc tế',
                        subtitle: 'Lựa chọn từ những cổ phiếu CFDs lớn nhất trên Sàn chứng khoán New York (NYSE), NASDAQ và ASX để thực sự đa dạng hóa danh mục đầu tư của bạn.'
                    },
                    p2: {
                        title: 'Giao dịch với chi phí cạnh tranh',
                        subtitle: 'Phí hoa hồng trên cổ phiếu CFDs trên ASX là 0.08% và bạn có thể giao dịch cổ phiếu CFDs của Hoa Kỳ từ 0.02 đô la mỗi cổ phiếu.'
                    },
                    p3: {
                        title: 'Tận dụng tối đa 25 đến 1',
                        subtitle: 'Tận dụng một trong những tỷ lệ ký quỹ tốt nhất trên hơn 600 cổ phiếu CFD toàn cầu với tỷ lệ ký quỹ chỉ 4%. Điều này có nghĩa là bạn nhận được đòn bẩy 25:1 trên tất cả các cổ phiếu CFDs trên các sàn giao dịch NYSE, NASDAQ và ASX.'
                    },
                    p4: {
                        title: 'Giao dịch cả mua và bán',
                        subtitle: 'Ưu điểm đáng kể của cổ phiếu CFD là khả năng mua và bán chỉ bằng một nút bấm trên đòn bẩy. Chưa bao giờ dễ dàng hơn để bán khống nếu bạn tin rằng thị trường sẽ suy giảm hoặc thậm chí phòng hộ một danh mục đầu tư cổ phiếu hiện có. Sự lựa chọn là của bạn.'
                    },


                },
                button_1: "Thử tài khoản demo",
                button_2: "Mở tài khoản"

            },


            section_logo_group: {
                title: 'Giao dịch trên những công ty lớn nhất thế giới'
            },

            section_CFD_table: {
                title: 'Ví dụ giao dịch Hợp đồng chênh lệch Cổ phiếu',
                points: {

                    p1: {
                        title: 'Mở',
                        row1: {
                            point1: 'BHP (BHP.AX) AUD',
                            point2: 'Bid 32.50/Ask 32.52',
                            point3: 'Đòn bẩy 25:1',
                            point4: 'BHP (BHP.AX) AUD',
                            point5: 'Kích cỡ vị thế  1,000 share CFDs'
                        },
                        row2: {title: 'Giá trị của vị thế giao dịch mở', p: '1,000 X 32.52  = $32,520 AUD'},
                        row3: {title: 'Ký quỹ trên một vị thế', p: '32,520 / 25 = $1,300.80 AUD'}
                    },
                    p2: {
                        title: 'Đóng',
                        row1: {point1: 'Bán 33.00/Ask 33.01', point2: 'Giá đóng  @ $33.00'},
                        row2: {title: 'Giá trị của vị thế giao dịch đóng', p: '$33,000'},
                        row3: {title: 'P/L', p: 'Lợi nhuận: $33,000 - $32,520 = $480'}
                    },
                    p3: {
                        title: 'Đóng',
                        row1: {point1: 'Bán 32.00/Ask 32.01', point2: 'Giá đóng  @ $32.00'},
                        row2: {title: 'Giá trị của vị thế giao dịch đóng', p: '$32,000'},
                        row3: {title: 'P/L', p: 'Thua lỗ: $32,520 - $32,000 = $520'}
                    }


                },
            },
            section_text_button: {
                title: 'Việc tiếp cận thị trường toàn cầu từ một tài khoản giao dịch chưa bao giờ dễ dàng hơn thế. Đặt một vị thế ngay hôm nay.',
                button: 'Mở tài khoản'
            },

            why_trade_with_acy: {
                title: 'Tại sao giao dịch cùng ACY Securities',
                subtitle: 'Được mệnh danh như một nửa Phố Wall và một nửa Thung lũng Silicon, chúng tôi là một nhà môi giới đa tài sản lấy cảm hứng từ công nghệ tập trung tối đa vào việc chăm sóc khách hàng, khách hàng của chúng tôi được cung cấp điều kiện giao dịch cấp cao, đào tạo chuyên nghiệp và báo cáo phân tích thị trường sắc bén.',
                points: {

                    p1: {
                        title: 'Điều kiện giao dịch siêu việt',
                        subtitle: 'Spreads từ 0.0 pips | Tốc độ xử lý cực nhanh'
                    },
                    p2: {
                        title: 'Tài liệu đào tạo cấp cao',
                        subtitle: 'Các phương pháp có tính hệ thống, dễ hiểu và phù hợp với từng cá nhân'
                    },
                    p3: {
                        title: 'Nhà quản lý tài khoản cá nhân',
                        subtitle: 'Tận tụy hỗ trợ khách hàng trong quá trình giao dịch'
                    },
                    p4: {title: 'Quản lý bởi ASIC', subtitle: 'Trụ sở tại Tòa tháp ACY – Sydney '},
                    p5: {
                        title: 'Phân tích thị trường sắc bén',
                        subtitle: 'Ngoại hối | Chỉ số | Hàng hóa | Cổ phiếu | Tiền mã hóa'
                    },
                    p6: {title: 'True Multi-Asset Provider', subtitle: 'FX | Indices | Commodities | Stocks | Crypto '}

                },
                button_1: "Mở tài khoản",
                button_2: "Thử tài khoản demo"

            },


        },
    ar: {
        lang: 'ar',
        meta_description:'تداول العقود مقابل الفروقات (CFDs) على الأسهم عبر الإنترنت والوصول إلى أكبر الشركات في العالم في أسواق NYSE و Nasdaq و ASX اتخذ مركز تداولي على الأسهم المفضلة لديك اليوم' ,
        page_title: 'تداول العقود مقابل الفروقات (CFDs) عبر الإنترنت | العقود مقابل الفروقات (CFD) على الأسهم مع  ACY',

        section_1: {
            title: "العقود مقابل الفروقات (CFDs) على الأسهم",
            subtitle: "اتخذ مركز تداولي في أكثر من 660 من الأسهم العالمية عبر البورصة الأسترالية وبورصة نيويورك (NYSE) وبورصة ناسداك",
            button: "افتح حساباً",
        },
        section_1_below: {
            title: "افتح حساباً",
            span1: 'بواحدة من أكثر معدلات الرافعة المالية تنافسية في العالم.',
            span2: 'MT5 Xchange ',
            span3: 'بواحدة من أكثر معدلات الرافعة المالية تنافسية في العالم.لم يكن من السهل أبدًا اتخاذ مركز تداولي على عقود الفروقات (CFDs) على الأسهم المفضلة لديك مثلApple و Google و Amazon و BHP و Commonwealth Bank على سبيل المثال لا الحصر'
        },
        section_2: {
            title: "ما هي عقود الفروقات (CFDs) على الأسهم؟",
            p1: 'الأسهم العادية عبر البورصات العالمية، باستثناء احتياجك فقط إلى مبلغ صغير من المال للتحكم بكامل مراكزك التداولية.',
            p2: 'عندما تقوم بتداول الأسهم بشكل مباشر، فإنك تحصل على امتلاك في الشركة. أما عندما يتعلق الأمر بأسهم العقود مقابل الفروقات، فيمكنك اتخاذ مركز تداول طويل أو قصير الأمد، ولكنك لا تملك الأداة الأساسية التي تتداولها',
            p3: function () {
                return `<span>Now you can create a truly diversified portfolio by adding share CFDs to your buy and sell list, along with <span/><a href=${getUrl("products/forex")} target="_blank">Forex</a><span>, </span><a href=${getUrl("products/indices")} target="_blank">Indices</a><span>, </span> <a href=${getUrl("products/oils")} target="_blank">Commodities</a> <span>and</span> <a href=${getUrl("products/cryptocurrencies")} target="_blank">Cryptocurrencies<a/><span>, all via our </span><a href=${getUrl("trading-platforms/xchange-mt5")} target="_blank">MT5 Xchange trading platform</a>`
            },


        },


        advantageTable: {
            title: 'مزايا تداول عقود الفروقات على الأسهم',
            points: {

                p1: {
                    title: 'الأسواق العالمية',
                    subtitle:'اختر من بين أكبر أسهم CFDs عبر بورصة نيويورك (NYSE) وناسداك و ASX لتنويع محفظتك'
                },
                p2: {
                    title: 'تداول منخفض التكلفة',
                    subtitle: 'الفروقات (CFDs) على الأسهم عبر ASX منخفضة 0.08٪ ويمكنك تداول عقود CFDs على الأسهم الأمريكية بدءاً من 0.02$ لكل سهم.'
                },
                p3: {
                    title: 'الرافعة المالية حتى 1:25',
                    subtitle: 'استفد من واحد من أفضل معدلات الهامش عبر أكثر من 600 سهم عالمي من العقود مقابل الفروقات مع 4٪ فقط من الهامش المطلوب. وهذا يعني أنك تحصل على 1:25 رافعة مالية على جميع عقود CFD على الأسهم في بورصات NYSE و Nasdaq و ASX'
                },
                p4: {
                    title: 'تداول طويل أو قصير الأمد',
                    subtitle:'الميزة الهامة لعقود الفروقات على الأسهم هي القدرة على فتح مركز تداولي طويل الأمد بنقرة زر على الرافعة المالية. ليس من السهل أبدًا اتخاذ مركز تداولي قصير الأمد إذا كنت تعتقد أن الأسواق سوف تهبط أو حتى تقوم بالتحوط على محفظة الأسهم الحالية. الخيار لك'
                },


            },
            button_1: "جرّب الحساب التجريبي",
            button_2: "افتح حساباً"

        },


        section_logo_group: {
            title: 'تداول على أكبر الشركات في العالم'
        },

        section_CFD_table: {
            title: 'مثال لتداول عقود الفروقات (CFD) على الأسهم ',
            points: {

                p1: {
                    title: 'فتح',
                    row1: {
                        point1: 'BHP (BHP.AX) AUD',
                        point2: 'سعر البيع 32.50/سعر الشراء 32.52',
                        point3: 'الرافعة المالية 25:1',
                        point4: 'BHP (BHP.AX) AUD',
                        point5: 'حجم مركز التداول  1,000 sCFD على الأسهم '
                    },
                    row2: {title: 'قيمة المركز المفتوح', p: '32,520 / 25 = $1,300.80 AUD'},
                    row3: {title: 'Margin per position', p: '32,520 / 25 = $1,300.80 AUD'}
                },
                p2: {
                    title: 'غلاق',
                    row1: {point1: 'سعر البيع 33.00/سعر الشراء 33.01', point2: 'سعر الإغلاق @ $33.00'},
                    row2: {title: 'قيمة المركز المغلق', p: '$33,000'},
                    row3: {title: 'P/L', p: 'الربح: $33,000 - $32,520 = $480'}
                },
                p3: {
                    title: 'غلاق',
                    row1: {point1: 'سعر البيع 32.00/سعر الشراء 32.01', point2: 'سعر الإغلاق @ $32.00'},
                    row2: {title: 'قيمة المركز المغلق', p: '$32,000'},
                    row3: {title: 'P/L', p: 'الخسارة: $32,520 - $32,000 = $520'}
                }


            },
        },
        section_text_button: {
            title: 'لم يكن من السهل الوصول إلى الأسواق العالمية من حساب تداول واحد. اتخذ مركز تداول اليوم.',
            button: 'افتح حساباً'
        },

        why_trade_with_acy: {
            title: 'لماذا التداول مع  ACY Securities',
            subtitle: 'يشار إليها على أنها نصف وول ستريت ونصف وادي السيليكون، نحن وسيط متعدد الأصول مستوحى من التكنولوجيا نركز بقوة على تمكينك وعلى عملائنا وبظروف تداول من الدرجة العالية بالإضافة للتعليم المتميز وتحليل السوق الشامل.',
            points: {

                p1: {title: 'ظروف تداول ممتازة', subtitle: 'فروق أسعار من 0.0 نقطة | تنفيذ فائق السرعة'},
                p2: {
                    title: 'مصادر تعليمية متميزة',
                    subtitle: 'حلول منظمة وقابلة للتخصيص بحجم صغير'
                },
                p3: {title: 'مدير حساب شخصي', subtitle: 'متخصص لتقديم دعم التداول لك'},
                p4: {title: 'ترخيص  ASIC', subtitle: 'مقرها الرئيسي برج ACY - Sydney'},
                p5: {title: 'تحليل السوق الشامل', subtitle: 'تقارير الصباح وبعد الظهر | أفكار تداولية'},
                p6: {title: 'مزود حقيقي متعدد الأصول', subtitle: 'عملات أجنبية | مؤشرات | أسهم | عملات رقمية'}

            },
            button_1: "افتح حساباً",
            button_2: "جرّب الحساب التجريبي"

        },

    },


}