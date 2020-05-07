WIDTH = 1920
HEIGHT = 920

var reelsYOffset = 70;
var SGIContainerHeight = 30;

App.Gameplay = new Screen({

    Name: "Gameplay",

    Containers: [{
            name: 'BackgroundContainer',
            scaleStrategyPortrait: ['fit-to-screen', WIDTH, HEIGHT],
            scaleStrategyLandscape: ['fit-to-screen', WIDTH, HEIGHT],
            childs: [{
                    name: 'background container wrapper',
                    childs: [{
                        name: 'background',
                        type: 'sprite',
                        position: [0, 0],
                        image: 'background',
                        scale: [1, 0.92],
                        event: 'screen'
                    }]
                }
            ]
        },
        {
            name: 'MainContainer',
            scaleStrategyPortrait: ['fit-to-screen', WIDTH, HEIGHT],
            scaleStrategyLandscape: ['fit-to-screen', WIDTH, HEIGHT],
            visible: true,
            childs: [{
                name: 'main container wrapper',
                position: [0, 0],
                scale: [1, 0.925],
                childs: [{
                        name: 'background',
                        type: 'sprite',
                        position: [0, 0],
                        image: 'background',
                        event: 'screen',
                        scale: [1, 0.92]
                    },
                    {
                        name: 'anchormanLogo',
                        type: 'sprite',
                        position: [740, -430],
                        image: 'anchormanlogo',
                        event: 'screen',
                        scale: [0.965, 0.92]
                    },
                    {
                        name: 'reel back',
                        childs: [{
                                name: 'maingamebackground',
                                type: 'sprite',
                                position: [0, 0],
                                image: 'maingamebackground',
                                scale: [1, 0.92],
                                event: 'screen'
                            },
                            {
                                name: 'reels_frame',
                                type: 'sprite',
                                position: [0, reelsYOffset],
                                image: 'reels_frame',
                                scale: [1, 0.975],
                                event: 'screen'
                            },
                            /*
                            {
                                name: 'paytable button',
                                type: 'graphics',
                                button: 'button',
                                position: [600, -440],
                                draw: [
                                    ['beginFill', 0x5555dd],
                                    ['drawRoundedRect', [-90 / 2, -25 / 2, 90, 25, 15]]
                                ],
                                childs: [{
                                        name: 'paytable button glow',
                                        type: 'graphics',
                                        position: [0, 0]
                                    },
                                    {
                                        name: 'paytable button border',
                                        type: 'graphics',
                                        position: [0, 0],
                                        draw: [
                                            ['lineStyle', 2, 0x000000, 0.5],
                                            ['beginFill', 0x1e50be],
                                            ['drawRoundedRect', [-85 / 2, -20 / 2, 85, 20, 15]]
                                        ]
                                    },
                                    {
                                        name: 'paytable button text',
                                        type: 'text',
                                        text: 'Paytable',
                                        position: [0, 0],
                                        styles: {
                                            align: 'center',
                                            fontFamily: 'Arial',
                                            fontSize: '12px',
                                            fill: 0xffffff
                                        }
                                    }
                                ]
                            },
                            {
                                name: 'game_rules button',
                                type: 'graphics',
                                button: 'button',
                                position: [700, -440],
                                draw: [
                                    ['beginFill', 0x5555dd],
                                    ['drawRoundedRect', [-90 / 2, -25 / 2, 90, 25, 15]]
                                ],
                                childs: [{
                                        name: 'game_rules button glow',
                                        type: 'graphics',
                                        position: [0, 0],
                                    },
                                    {
                                        name: 'game_rules button border',
                                        type: 'graphics',
                                        position: [0, 0],
                                        draw: [
                                            ['lineStyle', 2, 0x000000, 0.5],
                                            ['beginFill', 0x1e50be],
                                            ['drawRoundedRect', [-85 / 2, -20 / 2, 85, 20, 15]]
                                        ]
                                    },
                                    {
                                        name: 'game_rules button text',
                                        type: 'text',
                                        text: 'Game Rules',
                                        position: [0, 0],
                                        styles: {
                                            align: 'center',
                                            fontFamily: 'Arial',
                                            fontSize: '12px',
                                            fill: 0xffffff
                                        }
                                    }
                                ]
                            },
                            {
                                name: 'audio_set button',
                                type: 'graphics',
                                button: 'button',
                                position: [800, -440],
                                draw: [
                                    ['beginFill', 0x5555dd],
                                    ['drawRoundedRect', [-90 / 2, -25 / 2, 90, 25, 15]]
                                ],
                                childs: [{
                                        name: 'audio_set button glow',
                                        type: 'graphics'
                                    },
                                    {
                                        name: 'audio_set button border',
                                        type: 'graphics',
                                        position: [0, 0],
                                        draw: [
                                            ['lineStyle', 2, 0x000000, 0.5],
                                            ['beginFill', 0x1e50be],
                                            ['drawRoundedRect', [-85 / 2, -20 / 2, 85, 20, 15]]
                                        ]
                                    },
                                    {
                                        name: 'audio_set button text',
                                        type: 'text',
                                        text: 'Audio On',
                                        position: [0, 0],
                                        styles: {
                                            align: 'center',
                                            fontFamily: 'Arial',
                                            fontSize: '12px',
                                            fill: 0xffffff
                                        }
                                    }
                                ]
                            },
                            */
                            {
                                name: 'close button',
                                type: 'graphics',
                                button: 'button',
                                position: [900, -350],
                                draw: [
                                    ['beginFill', 0x5555dd],
                                    ['drawRoundedRect', [-90 / 2, -25 / 2, 90, 25, 15]]
                                ],
                                childs: [{
                                        name: 'close button glow',
                                        type: 'graphics'
                                    },
                                    {
                                        name: 'close button border',
                                        type: 'graphics',
                                        position: [0, 0],
                                        draw: [
                                            ['lineStyle', 2, 0x000000, 0.5],
                                            ['beginFill', 0x1e50be],
                                            ['drawRoundedRect', [-85 / 2, -20 / 2, 85, 20, 15]]
                                        ]
                                    },
                                    {
                                        name: 'close button text',
                                        type: 'text',
                                        text: 'More games',
                                        position: [0, 0],
                                        styles: {
                                            align: 'center',
                                            fontFamily: 'Arial',
                                            fontSize: '12px',
                                            fill: 0xffffff
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'game board container',
                        scale: [1519 / 1522, 726 / 732],
                        position: [0, 160 - (HEIGHT - 595) / 2 + reelsYOffset],
                        childs: [{
                                name: 'game board symbols container',
                                childs: []
                            },
                            {
                                name: 'game board symbols highlighted container',
                                childs: []
                            },
                            {
                                name: 'shine_up',
                                type: 'sprite',
                                scale: [1420 / 800 - 0.1, 1],
                                position: [0, -595 / 2 + 60],
                                image: 'shine_up'
                            },
                            {
                                name: 'shine_middle',
                                type: 'sprite',
                                scale: [1420 / 531 - 0.1, 1],
                                position: [0, -80],
                                image: 'shine_middle'
                            },
                            {
                                name: 'shine_down',
                                type: 'sprite',
                                scale: [1420 / 800 - 0.1, 1],
                                position: [0, 595 / 2 - 60],
                                image: 'shine_down'
                            }
                        ]
                    },
                    {
                        name: 'account data',
                        type: 'text',
                        position: [470, -505],
                        anchor: [1, 0.5],
                        text: ' ',
                        alpha: 1,
                        styles: {
                            fontFamily: 'AGLettericaDemiCondensedC',
                            fontSize: '22px',
                            padding: 20,
                            fill: 0xffea00
                        }
                    },
                    {
                        name: 'popups alert container',
                        type: 'sprite',
                        position: [0, 120 - (HEIGHT - 600) / 2],
                        scale: [1420 / 1017, 600 / 426],
                        image: 'freegame_popup',
                        visible: false,
                        childs: [{
                                name: 'popups header text',
                                type: 'text',
                                text: 'PRESS BUTTON \n TO START',
                                position: [0, -90],
                                scale: [1017 / 1420, 426 / 610],
                                styles: {
                                    align: 'center',
                                    fontFamily: 'AGLettericaDemiCondensedC',
                                    fontweight: 'Bold',
                                    fontSize: '100px',
                                    fill: 0xffc500,
                                    stroke: 0xdd2905,
                                    strokeThickness: 10,
                                    dropShadow: true,
                                    dropShadowAngle: 0.1,
                                    dropShadowColor: "black",
                                    dropShadowDistance: 3
                                }
                            },
                            {
                                name: 'popups body text',
                                type: 'text',
                                text: 'FREE GAMES!',
                                position: [0, 100],
                                scale: [1017 / 1420, 426 / 610],
                                styles: {
                                    align: 'center',
                                    fontFamily: 'AGLettericaDemiCondensedC',
                                    fontweight: 'Bold',
                                    fontSize: '150px',
                                    fill: 0xffc500,
                                    stroke: 0xdd2905,
                                    strokeThickness: 10,
                                    dropShadow: true,
                                    dropShadowAngle: 0.1,
                                    dropShadowColor: "black",
                                    dropShadowDistance: 3
                                }
                            }
                        ]
                    },
                ]
            }]
        },
        {
            name: 'ControlPanelContainer',
            scaleStrategyPortrait: ['fit-to-screen', WIDTH, HEIGHT],
            scaleStrategyLandscape: ['fit-to-screen', WIDTH, HEIGHT],
            childs: [{
                name: 'control panel container wrapper',
                scale: [1, 0.95],
                position: [0, 348],
                childs: [{
                    name: 'control panel bg',
                    type: 'sprite',
                    positionPortrait: [0, 0],
                    positionPortraitIPad: [0, 0],
                    positionLandscape: [0, 0],
                    childs: [{
                            name: 'back_panel',
                            scale: [760 / 742, 150 / 185],
                            type: 'sprite',
                            image: 'decktopuibacker'
                        },
                        {
                            name: 'help button',
                            position: [-365, 0],
                            scale: [0.9, 0.9],
                            type: 'sprite',
                            image: 'buttonhelp',
                            button: 'button',
                            childs: [
                                {
                                    name: 'help button glow',
                                    type: 'sprite',
                                    image: 'buttonhelphover',
                                    alpha: 0
                                }
                            ]
                        },
                        {
                            name: 'autoplay button',
                            position: [-200, 0],
                            scale: [0.9, 0.9],
                            type: 'sprite',
                            image: 'buttonautoplay',
                            button: 'button',
                            childs: [
                                {
                                    name: 'autoplay button glow',
                                    type: 'sprite',
                                    image: 'buttonautoplayhover',
                                    alpha: 0
                                }
                            ]
                        },
                        {
                            name: 'start button',
                            position: [0, -50],
                            scale: [0.8, 0.8],
                            type: 'sprite',
                            image: 'buttonspin',
                            button: 'button',
                            childs: [
                                {
                                    name: 'start button glow',
                                    type: 'sprite',
                                    image: 'buttonspinhover',
                                    alpha: 0
                                },
                                {
                                    name: 'start button text',
                                    type: 'text',
                                    text: '',
                                    visible: false,
                                    styles: {
                                        align: 'center',
                                        lineJoin: "bevel",
                                        fontFamily: 'Arial',
                                        fontWeight: 'Bold',
                                        fontSize: '30px',
                                        padding: 20,
                                        fill: 0xffffff
                                    }
                                },
                            ]
                        },
                        {
                            name: 'decrease button',
                            position: [110, 0],
                            scale: [0.9, 0.9],
                            type: 'sprite',
                            image: 'buttondecreasedim',
                            button: 'button',
                            childs: [
                                {
                                    name: 'decrease button glow',
                                    type: 'sprite',
                                    image: 'buttondecreasedim',
                                    alpha: 0
                                }
                            ]
                        },
                        {
                            name: 'totalbetbacker button',
                            position: [260, 0],
                            type: 'sprite',
                            image: 'totalbetbacker',
                            childs: [{
                                name: 'totalbet text',
                                type: 'text',
                                text: '25',
                                position: [0, 0],
                                styles: {
                                    fill: [0xffffff, 0xffffff],
                                    fontFamily: 'AGLettericaDemiCondensedC',
                                    fontSize: '25px'
                                }
                            }]
                        },
                        {
                            name: 'increase button',
                            position: [410, 0],
                            scale: [0.9, 0.9],
                            type: 'sprite',
                            image: 'buttonincrease',
                            button: 'button',
                            childs: [
                                {
                                    name: 'increase button glow',
                                    type: 'sprite',
                                    image: 'buttonincreasehover',
                                    alpha: 0
                                }
                            ]
                        }
                    ]
                }]
            }]
        },
        {
            name: 'HelpPanelContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', WIDTH, HEIGHT],
            scaleStrategyLandscape: ['fit-to-screen', WIDTH, HEIGHT],
            childs: [
                {
                    name: 'help_background',
                    type: 'sprite',
                    position: [0, 0],
                    image: 'help_background',
                    scale: [1, 0.92 * 0.925],
                    childs: [
                        {
                            name: 'help_backgroundmain',
                            type: 'sprite',
                            position: [0, 0],
                            image: 'help_backgroundmain',
                        },
                        {
                            name: 'helpclose button',
                            type: 'sprite',
                            position: [700, 350],
                            image: 'buttonclose',
                            button: 'button',
                            childs: [
                                {
                                    name: 'helpclose button glow',
                                    type: 'sprite',
                                    image: 'buttonclosehover',
                                    alpha: 0
                                }
                            ]
                        },
                        {
                            name: 'nexthelp button',
                            type: 'sprite',
                            position: [700, 40],
                            image: 'buttonright',
                            button: 'button',
                            childs: [
                                {
                                    name: 'nexthelp button glow',
                                    type: 'sprite',
                                    image: 'buttonrighthover',
                                    alpha: 0
                                }
                            ]
                        },
                        {
                            name: 'prevhelp button',
                            type: 'sprite',
                            position: [-650, 40],
                            image: 'buttonleft',
                            button: 'button',
                            childs: [
                                {
                                    name: 'prevhelp button glow',
                                    type: 'sprite',
                                    image: 'buttonlefthover',
                                    alpha: 0
                                }
                            ]
                        },
                        {
                            name: 'helpPageList',
                            type: 'sprite',
                            position: [-850, 10],
                            image: 'navbar',
                            childs: [
                                {
                                    name: 'helpSection1',
                                    type: 'sprite',
                                    image: 'navbarpipoff',
                                    position: [0, -380],
                                    scale: [1.2, 1.2]
                                },
                                {
                                    name: 'helpPageDash1',
                                    type: 'sprite',
                                    image: 'navbardashoff',
                                    position: [0, -345]
                                },
                                {
                                    name: 'helpPageDash2',
                                    type: 'sprite',
                                    image: 'navbardashoff',
                                    position: [0, -345 + 17]
                                },
                                {
                                    name: 'helpPageDash3',
                                    type: 'sprite',
                                    image: 'navbardashoff',
                                    position: [0, -345 + 17 * 2]
                                },
                                {
                                    name: 'helpPageDash4',
                                    type: 'sprite',
                                    image: 'navbardashoff',
                                    position: [0, -345 + 17 * 3]
                                },
                                {
                                    name: 'helpSection2',
                                    type: 'sprite',
                                    image: 'navbarpipoff',
                                    position: [0, -345 + 17 * 3 + 50],
                                    scale: [1.2, 1.2]
                                },
                                {
                                    name: 'helpPageDash5',
                                    type: 'sprite',
                                    image: 'navbardashoff',
                                    position: [0, -345 + 17 * 3 + 50 + 35]
                                },
                                {
                                    name: 'helpPageDash6',
                                    type: 'sprite',
                                    image: 'navbardashoff',
                                    position: [0, -345 + 17 * 4 + 50 + 35]
                                },
                                {
                                    name: 'helpPageDash7',
                                    type: 'sprite',
                                    image: 'navbardashoff',
                                    position: [0, -345 + 17 * 5 + 50 + 35]
                                },
                                {
                                    name: 'helpSection3',
                                    type: 'sprite',
                                    image: 'navbarpipoff',
                                    position: [0, -345 + 17 * 5 + 50 * 2 + 35],
                                    scale: [1.2, 1.2]
                                },
                                {
                                    name: 'helpPageDash8',
                                    type: 'sprite',
                                    image: 'navbardashoff',
                                    position: [0, -345 + 17 * 5 + 50 * 2 + 35 * 2]
                                },
                                {
                                    name: 'helpPageDash9',
                                    type: 'sprite',
                                    image: 'navbardashoff',
                                    position: [0, -345 + 17 * 6 + 50 * 2 + 35 * 2]
                                },
                                {
                                    name: 'helpSection4',
                                    type: 'sprite',
                                    image: 'navbarpipoff',
                                    position: [0, -345 + 17 * 6 + 50 * 3 + 35 * 2],
                                    scale: [1.2, 1.2]
                                },
                                {
                                    name: 'helpPageDash10',
                                    type: 'sprite',
                                    image: 'navbardashoff',
                                    position: [0, -345 + 17 * 6 + 50 * 3 + 35 * 3]
                                },
                                {
                                    name: 'helpPageDash11',
                                    type: 'sprite',
                                    image: 'navbardashoff',
                                    position: [0, -345 + 17 * 7 + 50 * 3 + 35 * 3]
                                },
                                {
                                    name: 'helpPageDash12',
                                    type: 'sprite',
                                    image: 'navbardashoff',
                                    position: [0, -345 + 17 * 8 + 50 * 3 + 35 * 3]
                                },
                                {
                                    name: 'helpSection5',
                                    type: 'sprite',
                                    image: 'navbarpipoff',
                                    position: [0, -345 + 17 * 8 + 50 * 4 + 35 * 3],
                                    scale: [1.2, 1.2]
                                },
                                {
                                    name: 'helpPageDash13',
                                    type: 'sprite',
                                    image: 'navbardashoff',
                                    position: [0, -345 + 17 * 8 + 50 * 4 + 35 * 4]
                                },
                                {
                                    name: 'helpSection6',
                                    type: 'sprite',
                                    image: 'navbarpipoff',
                                    position: [0, -345 + 17 * 8 + 50 * 5 + 35 * 4],
                                    scale: [1.2, 1.2]
                                },
                                {
                                    name: 'helpPageDash14',
                                    type: 'sprite',
                                    image: 'navbardashoff',
                                    position: [0, -345 + 17 * 8 + 50 * 5 + 35 * 5]
                                },
                                {
                                    name: 'helpSection7',
                                    type: 'sprite',
                                    image: 'navbarpipoff',
                                    position: [0, -345 + 17 * 8 + 50 * 6 + 35 * 5],
                                    scale: [1.2, 1.2]
                                },
                                {
                                    name: 'helpPageDash15',
                                    type: 'sprite',
                                    image: 'navbardashoff',
                                    position: [0, -345 + 17 * 8 + 50 * 6 + 35 * 6]
                                },
                                {
                                    name: 'helpPageDash16',
                                    type: 'sprite',
                                    image: 'navbardashoff',
                                    position: [0, -345 + 17 * 9 + 50 * 6 + 35 * 6]
                                },
                                {
                                    name: 'helpPageDash17',
                                    type: 'sprite',
                                    image: 'navbardashoff',
                                    position: [0, -345 + 17 * 10 + 50 * 6 + 35 * 6]
                                },
                                {
                                    name: 'helpPageDash18',
                                    type: 'sprite',
                                    image: 'navbardashoff',
                                    position: [0, -345 + 17 * 11 + 50 * 6 + 35 * 6]
                                }
                            ]
                        },
                        {
                            name: 'helpPageContainer1',
                            position: [0, 0],
                            visible: false,
                            childs: [
                                {
                                    name: 'helpPageContainer1 titleLeft',
                                    type: 'text',
                                    position: [-420, -490],
                                    text: 'BASE GAME',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'AGLettericaDemiCondensedC',
                                        fontSize: '42px'
                                    }
                                },
                                {
                                    name: 'helpPageContainer1 titleRight',
                                    type: 'text',
                                    position: [430, -490],
                                    text: 'PAY TABLE',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'AGLettericaDemiCondensedC',
                                        fontSize: '42px'
                                    }
                                },
                                {
                                    name: 'helpPageContainer1 topLine',
                                    type: 'graphics',
                                    draw: [
                                        ['beginFill', 0xffffff],
                                        ['drawRect', [-540, -HEIGHT / 2 + 5, 540 * 2, 5]]
                                    ]
                                },
                                {
                                    name: 'helpPageContainer1 wildSymbol',
                                    type: 'sprite',
                                    image: 'wild_symbol',
                                    position: [-200, -335],
                                    scale: [1.2, 1.2]
                                },
                                {
                                    name: 'helpPageContainer1 wildText',
                                    type: 'text',
                                    position: [-200, -240],
                                    text: 'WILD',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '25px',
                                        fontWeight: 700
                                    },
                                    scale: [0.9, 1.2]
                                },
                                {
                                    name: 'helpPageContainer1 bonusSymbol',
                                    type: 'sprite',
                                    image: 'wheelbonus_symbol',
                                    position: [200, -335],
                                    scale: [0.8, 0.8]
                                },
                                {
                                    name: 'helpPageContainer1 bonusText',
                                    type: 'text',
                                    position: [200, -240],
                                    text: 'BONUS',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '25px',
                                        fontWeight: 700
                                    },
                                    scale: [0.9, 1.2]
                                },
                                {
                                    name: 'helpPageContainer1 award1',
                                    type: 'sprite',
                                    position: [-225, -110],
                                    image: 'help_imageframe1',
                                    scale: [0.8, 0.8],
                                    childs: [
                                        {
                                            name: 'helpPageContainer1 award1 symbol',
                                            type: 'sprite',
                                            position: [-135, 0],
                                            image: 'ron_symbol',
                                            scale: [1.1, 1.2]
                                        },
                                        {
                                            name: 'helpPageContainer1 award1 scores',
                                            type: 'text',
                                            position: [35, 0],
                                            text: '5 = 100\n4 = 50\n3 = 5',
                                            styles: {
                                                fill: [0xffffff, 0xffffff],
                                                fontFamily: 'Arial',
                                                fontSize: '31px',
                                                fontWeight: 400
                                            },
                                            scale: [1, 1.2]
                                        }
                                    ]
                                },
                                {
                                    name: 'helpPageContainer1 award2',
                                    type: 'sprite',
                                    position: [225, -110],
                                    image: 'help_imageframe1',
                                    scale: [0.8, 0.8],
                                    childs: [
                                        {
                                            name: 'helpPageContainer1 award2 symbol',
                                            type: 'sprite',
                                            position: [-135, 0],
                                            image: 'champ_symbol',
                                            scale: [1.1, 1.2]
                                        },
                                        {
                                            name: 'helpPageContainer1 award2 scores',
                                            type: 'text',
                                            position: [35, 0],
                                            text: '5 = 75\n4 = 35\n3 = 5',
                                            styles: {
                                                fill: [0xffffff, 0xffffff],
                                                fontFamily: 'Arial',
                                                fontSize: '31px',
                                                fontWeight: 400
                                            },
                                            scale: [1, 1.2]
                                        }
                                    ]
                                },
                                {
                                    name: 'helpPageContainer1 award3',
                                    type: 'sprite',
                                    position: [-225, -110 + 210],
                                    image: 'help_imageframe1',
                                    scale: [0.8, 0.8],
                                    childs: [
                                        {
                                            name: 'helpPageContainer1 award3 symbol',
                                            type: 'sprite',
                                            position: [-135, 0],
                                            image: 'brick_symbol',
                                            scale: [1.1, 1.2]
                                        },
                                        {
                                            name: 'helpPageContainer1 award3 scores',
                                            type: 'text',
                                            position: [35, 0],
                                            text: '5 = 75\n4 = 35\n3 = 5',
                                            styles: {
                                                fill: [0xffffff, 0xffffff],
                                                fontFamily: 'Arial',
                                                fontSize: '31px',
                                                fontWeight: 400
                                            },
                                            scale: [1, 1.2]
                                        }
                                    ]
                                },
                                {
                                    name: 'helpPageContainer1 award4',
                                    type: 'sprite',
                                    position: [225, -110 + 210],
                                    image: 'help_imageframe1',
                                    scale: [0.8, 0.8],
                                    childs: [
                                        {
                                            name: 'helpPageContainer1 award4 symbol',
                                            type: 'sprite',
                                            position: [-135, 0],
                                            image: 'brian_symbol',
                                            scale: [1.1, 1.2]
                                        },
                                        {
                                            name: 'helpPageContainer1 award4 scores',
                                            type: 'text',
                                            position: [35, 0],
                                            text: '5 = 75\n4 = 35\n3 = 5',
                                            styles: {
                                                fill: [0xffffff, 0xffffff],
                                                fontFamily: 'Arial',
                                                fontSize: '31px',
                                                fontWeight: 400
                                            },
                                            scale: [1, 1.2]
                                        }
                                    ]
                                },
                                {
                                    name: 'helpPageContainer1 description',
                                    type: 'text',
                                    position: [0, 328],
                                    text: 'All awards shown are per symbol, per winning line.\nWILD is wild for all symbols except BONUS and WHAMMY.\nOnly highest winner paid per winning combination. Wins on multiple paylines are added together.\nLine pays must occur on adjacent reels, beginning with the leftmost reel.',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '22px',
                                        fontWeight: 500,
                                        lineHeight: 40
                                    },
                                    scale: [1, 1.2]
                                }
                            ]
                        },
                        {
                            name: 'helpPageContainer2',
                            position: [0, 0],
                            visible: false,
                            childs: [
                                {
                                    name: 'helpPageContainer2 titleLeft',
                                    type: 'text',
                                    position: [-420, -490],
                                    text: 'BASE GAME',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'AGLettericaDemiCondensedC',
                                        fontSize: '42px'
                                    }
                                },
                                {
                                    name: 'helpPageContainer2 titleRight',
                                    type: 'text',
                                    position: [430, -490],
                                    text: 'PAY TABLE',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'AGLettericaDemiCondensedC',
                                        fontSize: '42px'
                                    }
                                },
                                {
                                    name: 'helpPageContainer2 topLine',
                                    type: 'graphics',
                                    draw: [
                                        ['beginFill', 0xffffff],
                                        ['drawRect', [-540, -HEIGHT / 2 + 5, 540 * 2, 5]]
                                    ]
                                },
                                {
                                    name: 'helpPageContainer2 wildSymbol',
                                    type: 'sprite',
                                    image: 'wild_symbol',
                                    position: [-200, -335],
                                    scale: [1.2, 1.2]
                                },
                                {
                                    name: 'helpPageContainer2 wildText',
                                    type: 'text',
                                    position: [-200, -240],
                                    text: 'WILD',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '25px',
                                        fontWeight: 700
                                    },
                                    scale: [0.9, 1.2]
                                },
                                {
                                    name: 'helpPageContainer2 bonusSymbol',
                                    type: 'sprite',
                                    image: 'wheelbonus_symbol',
                                    position: [200, -335],
                                    scale: [0.8, 0.8]
                                },
                                {
                                    name: 'helpPageContainer2 bonusText',
                                    type: 'text',
                                    position: [200, -240],
                                    text: 'BONUS',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '25px',
                                        fontWeight: 700
                                    },
                                    scale: [0.9, 1.2]
                                },
                                {
                                    name: 'helpPageContainer2 award1',
                                    type: 'sprite',
                                    position: [0, -110],
                                    image: 'help_imageframe2',
                                    scale: [1.2, 1],
                                    childs: [
                                        {
                                            name: 'helpPageContainer2 award1 symbol1',
                                            type: 'sprite',
                                            position: [-185, 0],
                                            image: 'baxter_symbol',
                                            scale: [0.8, 0.975]
                                        },
                                        {
                                            name: 'helpPageContainer2 award1 symbol2',
                                            type: 'sprite',
                                            position: [-10, 0],
                                            image: 'scotch_symbol',
                                            scale: [0.8, 0.975]
                                        },
                                        {
                                            name: 'helpPageContainer2 award1 scores',
                                            type: 'text',
                                            position: [130, 0],
                                            text: '5 = 35\n4 = 15\n3 = 3',
                                            styles: {
                                                fill: [0xffffff, 0xffffff],
                                                fontFamily: 'Arial',
                                                fontSize: '31px',
                                                fontWeight: 400
                                            },
                                            scale: [0.7, 0.95]
                                        }
                                    ]
                                },
                                {
                                    name: 'helpPageContainer2 award2',
                                    type: 'sprite',
                                    position: [0, -110 + 210],
                                    image: 'help_imageframe2',
                                    scale: [1.5, 1],
                                    childs: [
                                        {
                                            name: 'helpPageContainer2 award2 symbol1',
                                            type: 'sprite',
                                            position: [-195, 0],
                                            image: 'hat_symbol',
                                            scale: [0.7, 1.2]
                                        },
                                        {
                                            name: 'helpPageContainer2 award2 symbol2',
                                            type: 'sprite',
                                            position: [-70, 0],
                                            image: 'glasses_symbol',
                                            scale: [0.7, 1.2]
                                        },
                                        {
                                            name: 'helpPageContainer2 award2 symbol3',
                                            type: 'sprite',
                                            position: [60, 0],
                                            image: 'van_symbol',
                                            scale: [0.7, 1.2]
                                        },
                                        {
                                            name: 'helpPageContainer2 award2 scores',
                                            type: 'text',
                                            position: [165, 0],
                                            text: '5 = 25\n4 = 10\n3 = 1',
                                            styles: {
                                                fill: [0xffffff, 0xffffff],
                                                fontFamily: 'Arial',
                                                fontSize: '31px',
                                                fontWeight: 400
                                            },
                                            scale: [0.55, 0.95]
                                        }
                                    ]
                                },
                                {
                                    name: 'helpPageContainer2 description',
                                    type: 'text',
                                    position: [0, 328],
                                    text: 'All awards shown are per symbol, per winning line.\nWILD is wild for all symbols except BONUS and WHAMMY.\nOnly highest winner paid per winning combination. Wins on multiple paylines are added together.\nLine pays must occur on adjacent reels, beginning with the leftmost reel.',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '22px',
                                        fontWeight: 500,
                                        lineHeight: 40
                                    },
                                    scale: [1, 1.2]
                                }
                            ]
                        },
                        {
                            name: 'helpPageContainer3',
                            position: [0, 0],
                            visible: false,
                            childs: [
                                {
                                    name: 'helpPageContainer3 titleLeft',
                                    type: 'text',
                                    position: [-420, -490],
                                    text: 'BASE GAME',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'AGLettericaDemiCondensedC',
                                        fontSize: '42px'
                                    }
                                },
                                {
                                    name: 'helpPageContainer3 titleRight',
                                    type: 'text',
                                    position: [323, -490],
                                    text: 'MYSTERY STACK REELS',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'AGLettericaDemiCondensedC',
                                        fontSize: '42px'
                                    }
                                },
                                {
                                    name: 'helpPageContainer3 topLine',
                                    type: 'graphics',
                                    draw: [
                                        ['beginFill', 0xffffff],
                                        ['drawRect', [-540, -HEIGHT / 2 + 5, 540 * 2, 5]]
                                    ]
                                },
                                {
                                    name: 'helpPageContainer3 description1',
                                    type: 'text',
                                    position: [-150, -400],
                                    text: 'During base game play, the reels may change to the Mystery Stack Reels.',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550
                                    },
                                    scale: [0.65, 0.9]
                                },
                                {
                                    name: 'helpPageContainer3 description2',
                                    type: 'text',
                                    position: [-15, -305],
                                    text: 'When Mystery Stack Reels are in use, then each reel contains a number of positions that are randomly\nreplaced with one of the following symbols.',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550
                                    },
                                    scale: [0.65, 0.9]
                                },
                                {
                                    name: 'helpPageContainer3 wildSymbol',
                                    type: 'sprite',
                                    image: 'wild_symbol',
                                    position: [-310, -130],
                                    scale: [0.8, 0.8]
                                },
                                {
                                    name: 'helpPageContainer3 ronSymbol',
                                    type: 'sprite',
                                    image: 'ron_symbol',
                                    position: [-310 + 165 * 1, -130],
                                    scale: [0.8, 0.8]
                                },
                                {
                                    name: 'helpPageContainer3 champSymbol',
                                    type: 'sprite',
                                    image: 'champ_symbol',
                                    position: [-310 + 165 * 2, -130],
                                    scale: [0.8, 0.8]
                                },
                                {
                                    name: 'helpPageContainer3 brickSymbol',
                                    type: 'sprite',
                                    image: 'brick_symbol',
                                    position: [-310 + 165 * 3, -130],
                                    scale: [0.8, 0.8]
                                },
                                {
                                    name: 'helpPageContainer3 brianSymbol',
                                    type: 'sprite',
                                    image: 'brian_symbol',
                                    position: [-320 + 165 * 4, -130],
                                    scale: [0.8, 0.8]
                                },
                                {
                                    name: 'helpPageContainer3 baxterSymbol',
                                    type: 'sprite',
                                    image: 'baxter_symbol',
                                    position: [-310, -130 + 140],
                                    scale: [0.8, 0.8]
                                },
                                {
                                    name: 'helpPageContainer3 scotchSymbol',
                                    type: 'sprite',
                                    image: 'scotch_symbol',
                                    position: [-310 + 165 * 1, -130 + 140],
                                    scale: [0.8, 0.8]
                                },
                                {
                                    name: 'helpPageContainer3 hatSymbol',
                                    type: 'sprite',
                                    image: 'hat_symbol',
                                    position: [-310 + 165 * 2, -130 + 140],
                                    scale: [0.8, 0.8]
                                },
                                {
                                    name: 'helpPageContainer3 glassesSymbol',
                                    type: 'sprite',
                                    image: 'glasses_symbol',
                                    position: [-310 + 165 * 3, -130 + 140],
                                    scale: [0.8, 0.8]
                                },
                                {
                                    name: 'helpPageContainer3 vanSymbol',
                                    type: 'sprite',
                                    image: 'van_symbol',
                                    position: [-320 + 165 * 4, -130 + 140],
                                    scale: [0.8, 0.8]
                                },
                                {
                                    name: 'helpPageContainer3 bonusSymbol',
                                    type: 'sprite',
                                    image: 'wheelbonus_symbol',
                                    position: [-320 + 165 /2 + 20, -130 + 140 * 2 + 35],
                                    scale: [0.7, 0.7]
                                },
                                {
                                    name: 'helpPageContainer3 description3',
                                    type: 'text',
                                    position: [110, 180],
                                    text: 'Does not appear on the Mystery Stack Reels.',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550
                                    },
                                    scale: [0.65, 0.9]
                                },
                                {
                                    name: 'helpPageContainer3 description4',
                                    type: 'text',
                                    position: [-240, 360],
                                    text: 'Paylines in use are the same as those in the base game.\nAwards in use are the same as those in the base game.',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 50
                                    },
                                    scale: [0.65, 0.9]
                                }
                            ]
                        },
                        {
                            name: 'helpPageContainer4',
                            position: [0, 0],
                            visible: false,
                            childs: [
                                {
                                    name: 'helpPageContainer4 titleLeft',
                                    type: 'text',
                                    position: [-440, -490],
                                    text: 'PAYLINES',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'AGLettericaDemiCondensedC',
                                        fontSize: '42px'
                                    }
                                },
                                {
                                    name: 'helpPageContainer4 titleRight',
                                    type: 'text',
                                    position: [250, -500],
                                    text: 'BASE GAMES AND WHAMMY!FREE GAMES',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'AGLettericaDemiCondensedC',
                                        fontSize: '32px'
                                    }
                                },
                                {
                                    name: 'helpPageContainer4 topLine',
                                    type: 'graphics',
                                    draw: [
                                        ['beginFill', 0xffffff],
                                        ['drawRect', [-540, -HEIGHT / 2 + 5, 540 * 2, 5]]
                                    ]
                                },
                                {
                                    name: 'helpPageContainer4 description',
                                    type: 'text',
                                    position: [-40, -390],
                                    text: 'The following lines can contribute to wins in the base game and during Whammy Free Games.',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550
                                    },
                                    scale: [0.7, 0.95]
                                },
                                {
                                    name: 'helpPageContainer4 payline',
                                    type: 'sprite',
                                    image: '1to25',
                                    position: [0, -50],
                                    scale: [1, 1]
                                }
                            ]
                        },
                        {
                            name: 'helpPageContainer5',
                            position: [0, 0],
                            visible: false,
                            childs: [
                                {
                                    name: 'helpPageContainer5 titleLeft',
                                    type: 'text',
                                    position: [-320, -495],
                                    text: 'GENERAL INFORMATION',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'AGLettericaDemiCondensedC',
                                        fontSize: '42px'
                                    }
                                },
                                {
                                    name: 'helpPageContainer5 titleRight',
                                    type: 'text',
                                    position: [410, -495],
                                    text: 'GAME RULES',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'AGLettericaDemiCondensedC',
                                        fontSize: '42px'
                                    }
                                },
                                {
                                    name: 'helpPageContainer5 topLine',
                                    type: 'graphics',
                                    draw: [
                                        ['beginFill', 0xffffff],
                                        ['drawRect', [-540, -HEIGHT / 2 + 5, 540 * 2, 5]]
                                    ]
                                },
                                {
                                    name: 'helpPageContainer5 description',
                                    type: 'text',
                                    position: [-10, -85],
                                    text: 'In accordance with fair gaming practices, the outcome of each and every game is completely independent.\nThe chances of getting a particular outcome are always the same at the start of every game.\nOnly highest winner paid per winning combination.\nWinning combinations may contain only one symbol from each adjacent reel, beginning with the leftmost reel.\nMalfunction voids all pays and plays.\nGame Client Version: 1.0.31.\nAnchorman RTP: 96.03%.\nThis reflects the theoretical return across many plays.',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 85
                                    },
                                    scale: [0.6, 0.95]
                                }
                            ]
                        },
                        {
                            name: 'helpPageContainer6',
                            position: [0, 0],
                            visible: false,
                            childs: [
                                {
                                    name: 'helpPageContainer6 titleLeft',
                                    type: 'text',
                                    position: [-320, -495],
                                    text: 'GENERAL INFORMATION',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'AGLettericaDemiCondensedC',
                                        fontSize: '42px'
                                    }
                                },
                                {
                                    name: 'helpPageContainer6 titleRight',
                                    type: 'text',
                                    position: [350, -495],
                                    text: 'LEGAL INFORMATION',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'AGLettericaDemiCondensedC',
                                        fontSize: '42px'
                                    }
                                },
                                {
                                    name: 'helpPageContainer6 topLine',
                                    type: 'graphics',
                                    draw: [
                                        ['beginFill', 0xffffff],
                                        ['drawRect', [-540, -HEIGHT / 2 + 5, 540 * 2, 5]]
                                    ]
                                },
                                {
                                    name: 'helpPageContainer6 description1',
                                    type: 'text',
                                    position: [0, -395],
                                    text: 'Anchorman ©2017 Paramount Pictures. All Rights Reserved.',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 50
                                    },
                                    scale: [0.6, 0.9]
                                },
                                {
                                    name: 'helpPageContainer6 description2',
                                    type: 'text',
                                    position: [0, -395 + 75],
                                    text: 'Music:',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 50
                                    },
                                    scale: [0.6, 0.9]
                                },
                                {
                                    name: 'helpPageContainer6 description3',
                                    type: 'text',
                                    position: [0, -395 + 75 + 80],
                                    text: '"Afternoon Delight"',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 50
                                    },
                                    scale: [0.6, 0.9]
                                },
                                {
                                    name: 'helpPageContainer6 description4',
                                    type: 'text',
                                    position: [0, -395 + 75 + 80 + 50],
                                    text: 'Written by Bill Danoff.',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 50
                                    },
                                    scale: [0.6, 0.9]
                                },
                                {
                                    name: 'helpPageContainer6 description5',
                                    type: 'text',
                                    position: [0, -395 + 75 + 80 + 50 * 2],
                                    text: 'Published by Reservoir Media (ASCAP).',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 50
                                    },
                                    scale: [0.6, 0.9]
                                },
                                {
                                    name: 'helpPageContainer6 description6',
                                    type: 'text',
                                    position: [0, -395 + 75 + 80 + 50 * 3],
                                    text: 'Published by BMG Ruby Songs (ASCAP).',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 50
                                    },
                                    scale: [0.6, 0.9]
                                },
                                {
                                    name: 'helpPageContainer6 description7',
                                    type: 'text',
                                    position: [0, -395 + 75 + 80 + 50 * 4],
                                    text: 'c/o BMG Rights Management (US) LLC.',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 50
                                    },
                                    scale: [0.6, 0.9]
                                },
                                {
                                    name: 'helpPageContainer6 description8',
                                    type: 'text',
                                    position: [0, -395 + 75 + 80 + 50 * 5],
                                    text: 'Used with Permission. All Rights Reserved.',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 50
                                    },
                                    scale: [0.6, 0.9]
                                },
                                {
                                    name: 'helpPageContainer6 description9',
                                    type: 'text',
                                    position: [0, -395 + 75 + 80 * 2 + 50 * 5],
                                    text: '"Every 1\'s a Winner"',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 50
                                    },
                                    scale: [0.6, 0.9]
                                },
                                {
                                    name: 'helpPageContainer6 description10',
                                    type: 'text',
                                    position: [0, -395 + 75 + 80 * 2 + 50 * 6],
                                    text: 'Written by Errol Brown.',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 50
                                    },
                                    scale: [0.6, 0.9]
                                },
                                {
                                    name: 'helpPageContainer6 description11',
                                    type: 'text',
                                    position: [0, -395 + 75 + 80 * 2 + 50 * 7],
                                    text: 'Published by Kobalt Music Publishing America, Inc.',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 50
                                    },
                                    scale: [0.6, 0.9]
                                },
                                {
                                    name: 'helpPageContainer6 description12',
                                    type: 'text',
                                    position: [0, -395 + 75 + 80 * 2 + 50 * 8],
                                    text: 'Performed by Hot Chocolate.',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 50
                                    },
                                    scale: [0.6, 0.9]
                                },
                                {
                                    name: 'helpPageContainer6 description13',
                                    type: 'text',
                                    position: [0, -395 + 75 + 80 * 2 + 50 * 9],
                                    text: 'Courtesy of Parlophone Records Ltd.',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 50
                                    },
                                    scale: [0.6, 0.9]
                                },
                                {
                                    name: 'helpPageContainer6 description14',
                                    type: 'text',
                                    position: [0, -395 + 75 + 80 * 2 + 50 * 10],
                                    text: 'By Arrangement with Warner Music Group Video Game Licensing.',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 50
                                    },
                                    scale: [0.6, 0.9]
                                }
                            ]
                        },
                        {
                            name: 'helpPageContainer7',
                            position: [0, 0],
                            visible: false,
                            childs: [
                                {
                                    name: 'helpPageContainer7 titleLeft',
                                    type: 'text',
                                    position: [-320, -495],
                                    text: 'GENERAL INFORMATION',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'AGLettericaDemiCondensedC',
                                        fontSize: '42px'
                                    }
                                },
                                {
                                    name: 'helpPageContainer7 titleRight',
                                    type: 'text',
                                    position: [350, -495],
                                    text: 'LEGAL INFORMATION',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'AGLettericaDemiCondensedC',
                                        fontSize: '42px'
                                    }
                                },
                                {
                                    name: 'helpPageContainer7 topLine',
                                    type: 'graphics',
                                    draw: [
                                        ['beginFill', 0xffffff],
                                        ['drawRect', [-540, -HEIGHT / 2 + 5, 540 * 2, 5]]
                                    ]
                                },
                                {
                                    name: 'helpPageContainer7 description1',
                                    type: 'text',
                                    position: [0, -320],
                                    text: '"Sunshine (Go Away Today)"',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 50
                                    },
                                    scale: [0.6, 0.9]
                                },
                                {
                                    name: 'helpPageContainer7 description2',
                                    type: 'text',
                                    position: [0, -320 + 50],
                                    text: 'Written and Performed by Jonathan Edwards.',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 50
                                    },
                                    scale: [0.6, 0.9]
                                },
                                {
                                    name: 'helpPageContainer7 description3',
                                    type: 'text',
                                    position: [0, -320 + 50 * 2],
                                    text: 'Published by Castle Hill Publishing Ltd. c/o Soundrights Music.',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 50
                                    },
                                    scale: [0.6, 0.9]
                                },
                                {
                                    name: 'helpPageContainer7 description4',
                                    type: 'text',
                                    position: [0, -320 + 50 * 3],
                                    text: 'c/o A Side Music LLC D/B/A Modern Works Music Publishing.',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 50
                                    },
                                    scale: [0.6, 0.9]
                                },
                                {
                                    name: 'helpPageContainer7 description5',
                                    type: 'text',
                                    position: [0, -320 + 50 * 4],
                                    text: 'Courtesy of Atlanta Recording Corp.',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 50
                                    },
                                    scale: [0.6, 0.9]
                                },
                                {
                                    name: 'helpPageContainer7 description6',
                                    type: 'text',
                                    position: [0, -320 + 50 * 5],
                                    text: 'By Arrangement with Warner Music Group Video Game Licensing.',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 50
                                    },
                                    scale: [0.6, 0.9]
                                },
                                {
                                    name: 'helpPageContainer7 description7',
                                    type: 'text',
                                    position: [0, -320 + 50 * 5 + 80],
                                    text: '"Use Me"',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 50
                                    },
                                    scale: [0.6, 0.9]
                                },
                                {
                                    name: 'helpPageContainer7 description8',
                                    type: 'text',
                                    position: [0, -320 + 50 * 6 + 80],
                                    text: 'Written by William H. Withers,Jr.',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 50
                                    },
                                    scale: [0.6, 0.9]
                                },
                                {
                                    name: 'helpPageContainer7 description9',
                                    type: 'text',
                                    position: [0, -320 + 50 * 7 + 80],
                                    text: 'Universal Music Publishing Group',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 50
                                    },
                                    scale: [0.6, 0.9]
                                },
                                {
                                    name: 'helpPageContainer7 description10',
                                    type: 'text',
                                    position: [0, -320 + 50 * 8 + 80],
                                    text: 'All Rights Reserved. Used by permission.',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 50
                                    },
                                    scale: [0.6, 0.9]
                                },
                                {
                                    name: 'helpPageContainer7 description11',
                                    type: 'text',
                                    position: [0, -320 + 50 * 8 + 80 + 80],
                                    text: 'The look and feel of the game and its individual components and displays are trade dress of Scientific Games \nCorp. and its Subsidiaries. TM and © 2013, 2018 Scientific Games Corp. and its Subsidiaries. All rights\nreserved.',
                                    styles: {
                                        fill: [0xffffff, 0xffffff],
                                        fontFamily: 'Arial',
                                        fontSize: '30px',
                                        fontWeight: 550,
                                        lineHeight: 35
                                    },
                                    scale: [0.6, 0.9]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'SGIContainer',
            scaleStrategyPortrait: ['fit-to-screen', WIDTH, HEIGHT],
            scaleStrategyLandscape: ['fit-to-screen', WIDTH, HEIGHT],
            childs: [
                {
                    name: 'controlbar',
                    position: [0, HEIGHT / 2 - SGIContainerHeight],
                    type: 'sprite',
                    image: 'sgimetersbacker',
                    childs: [
                        {
                            name: 'SGLogo',
                            type: 'sprite',
                            image: 'sgilogo',
                            position: [-920, 3],
                            scale: [0.9, 0.9]
                        },
                        {
                            name: 'timePanel',
                            type: 'text',
                            text: '',
                            position: [-840, 4],
                            styles: {
                                fill: [0xdadada, 0xdadada],
                                fontFamily: 'AGLettericaDemiCondensedC',
                                fontSize: '25px'
                            }
                        },
                        {
                            name: 'smallbreaker1',
                            type: 'sprite',
                            image: 'smallbreaker',
                            position: [-790, 0],
                            scale: [0.5, 1],
                            rotation: 90 / 180 * 3.14
                        },
                        {
                            name: 'speaker button',
                            type: 'sprite',
                            position: [-710, 3],
                            button: 'button',
                            image: 'mute',
                            childs:[
                                {
                                    name: 'speaker button hover',
                                    type: 'sprite',
                                    image: 'mutedown',
                                    alpha:0
                                },
                                {
                                    name: 'speaker button glow',
                                    type: 'sprite',
                                    image: 'mutedown',
                                    alpha:0
                                },
                                {
                                    name: 'speaker button disable',
                                    type: 'sprite',
                                    image: 'mute',
                                    alpha:0
                                }
                            ]
                        },
                        {
                            name: 'externalhelp button',
                            type: 'sprite',
                            image: 'buttonexternalhelp',
                            position: [-650, 3],
                            button: 'button',
                            childs: [
                                {
                                    name: 'externalhelp button glow',
                                    type: 'sprite',
                                    image: 'buttonexternalhelpdim',
                                    alpha: 0
                                }
                            ]
                        },
                        {
                            name: 'smallbreaker2',
                            type: 'sprite',
                            image: 'smallbreaker',
                            position: [-620, 0],
                            scale: [0.5, 1],
                            rotation: 90 / 180 * 3.14
                        },
                        {
                            name: 'balancePanel',
                            type: 'text',
                            text: 'Balance : ',
                            position: [-580, -12.5 + 3],
                            styles: {
                                fill: [0xeeeeee, 0xeeeeee],
                                fontFamily: 'AGLettericaDemiCondensedC',
                                fontSize: '25px'
                            },
                            anchor: {
                                x: 0,
                                y: 0
                            }
                        },
                        {
                            name: 'winAmountPanelBelow',
                            type: 'text',
                            text: 'Win : ',
                            position: [-280, -12.5 + 3],
                            styles: {
                                fill: [0xeeeeee, 0xeeeeee],
                                fontFamily: 'AGLettericaDemiCondensedC',
                                fontSize: '25px'
                            },
                            anchor: {
                                x: 0,
                                y: 0
                            }
                        },
                        {
                            name: 'smallbreaker3',
                            type: 'sprite',
                            image: 'smallbreaker',
                            position: [-50, 0],
                            scale: [0.5, 1],
                            rotation: 90 / 180 * 3.14
                        },
                        {
                            name: 'statusPanel',
                            type: 'text',
                            position: [200, 4],
                            visible: false,
                            styles: {
                                fill: [0x39a3d7, 0x39a3d7],
                                fontFamily: 'AGLettericaDemiCondensedC',
                                fontSize: '30px'
                            }
                        },
                        {
                            name: 'smallbreaker4',
                            type: 'sprite',
                            image: 'smallbreaker',
                            position: [450, 0],
                            scale: [0.5, 1],
                            rotation: 90 / 180 * 3.14
                        },
                        {
                            name: 'totalBetPanel',
                            type: 'text',
                            text: 'Total Bet : 25',
                            position: [480, -12.5 + 3],
                            styles: {
                                fill: [0xdadada, 0xdadada],
                                fontFamily: 'AGLettericaDemiCondensedC',
                                fontSize: '25px'
                            },
                            anchor: {
                                x: 0,
                                y: 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            name: 'Anchorman mark',
            scaleStrategyPortrait: ['fit-to-screen', WIDTH, HEIGHT],
            scaleStrategyLandscape: ['fit-to-screen', WIDTH, HEIGHT],
            childs: [{
                    name: 'anchorman text',
                    type: 'text',
                    text: 'Anchorman',
                    position: [0, 36 + 348],
                    styles: {
                        fill: [0x009eff, 0x009eff],
                        stroke: 0x000000,
                        strokeThickness: 4,
                        fontFamily: 'AGLettericaDemiCondensedC',
                        fontSize: '20px'
                    }
            }]
        },
        {
            name: 'WinAmountPanelContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', WIDTH, HEIGHT],
            scaleStrategyLandscape: ['fit-to-screen', WIDTH, HEIGHT],
            childs: [{
                    name: 'spinswindow',
                    scale: [1, 1],
                    position: [0, -205],
                    type: 'sprite',
                    image: 'spinswindow',
                    childs: [
                        {
                            name: 'winAmountPanel',
                            position: [0, 0],
                            type: 'text',
                            styles: {
                                fill: [0xeeee00],
                                fontFamily: 'AGLettericaDemiCondensedC',
                                fontSize: '56px'
                            }
                        }
                    ]
                }]
        },
        {
            name: 'FreeControlPanelContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', WIDTH, HEIGHT],
            scaleStrategyLandscape: ['fit-to-screen', WIDTH, HEIGHT],
            childs: [{
                    name: 'freecontrol panel container wrapper',
                    scale: [1, 1],
                    position: [0, 355],
                    childs: [{
                        name: 'control panel bg',
                        type: 'sprite',
                        positionPortrait: [0, 0],
                        positionPortraitIPad: [0, 0],
                        positionLandscape: [0, 0],
                        childs: [{
                                name: 'left back_panel',
                                position: [-280, 0],
                                scale: [450 / 370, 160 / 148],
                                type: 'sprite',
                                image: 'freespin_panel'
                            },
                            {
                                name: 'right back_panel',
                                position: [280, 0],
                                scale: [-450 / 370, 160 / 148],
                                type: 'sprite',
                                image: 'freespin_panel'
                            },
                            {
                                name: 'free_start button bar',
                                position: [0, 0],
                                scale: [190 / 221, 190 / 221],
                                childs: [{
                                    name: 'free_start button',
                                    type: 'sprite',
                                    visible: true,
                                    position: [0, 0],
                                    scale: [1, 1],
                                    button: 'button',
                                    image: 'btnSkinSpin_disabled',
                                    childs: [{
                                        name: 'free_start button glow',
                                        type: 'sprite',
                                        image: 'btnSkinSpin_disabled',
                                        alpha: 0
                                    }]
                                }]
                            },
                            {
                                name: 'spitfire container',
                                type: 'sprite',
                                image: 'spitfire',
                                position: [-560, 0],
                                scale: [1, 1],
                                childs: []
                            },
                            {
                                name: 'multiplier container',
                                position: [500, 0],
                                scale: [1, 1],
                                childs: []
                            },
                            {
                                name: 'freegames',
                                position: [-270, -20],
                                scale: [240 / 194, 72 / 67],
                                type: 'sprite',
                                image: 'freespin_window',
                                childs: [{
                                        name: 'freegames text',
                                        type: 'text',
                                        text: '1 / 7',
                                        position: [0, 0],
                                        scale: [194 / 220, 67 / 72],
                                        styles: {
                                            stroke: 0xfd9d04,
                                            strokeThickness: 2,
                                            fill: [0xf9bb00, 0xfef2c4, 0xb54619],
                                            fontFamily: 'AGLettericaDemiCondensedC',
                                            fontSize: '50px'
                                        }
                                    },
                                    {
                                        name: 'freegames label',
                                        type: 'text',
                                        text: 'FREE GAMES',
                                        position: [0, 55],
                                        styles: {
                                            fill: [0xfbcb00, 0xfd9400],
                                            fontFamily: 'BerlinSansFBDemi-Bold',
                                            fontSize: '30px'
                                        }
                                    }
                                ]
                            },
                            {
                                name: 'bonus_win bar',
                                position: [270, -20],
                                scale: [240 / 194, 72 / 67],
                                type: 'sprite',
                                image: 'freespin_window',
                                childs: [{
                                        name: 'bonus_win bar text',
                                        type: 'text',
                                        position: [0, 0],
                                        styles: {
                                            stroke: 0xfd9d04,
                                            strokeThickness: 2,
                                            fill: [0xf9bb00, 0xfef2c4, 0xb54619],
                                            fontFamily: 'AGLettericaDemiCondensedC',
                                            fontSize: '50px'
                                        }
                                    },
                                    {
                                        name: 'bonus_win bar label',
                                        type: 'text',
                                        text: 'BONUS WIN',
                                        position: [0, 55],
                                        styles: {
                                            fill: [0xfbcb00, 0xfd9400],
                                            fontFamily: 'BerlinSansFBDemi-Bold',
                                            fontSize: '30px'
                                        }
                                    }
                                ]
                            }
                        ]
                    }]
                },
                {
                    name: 'reel_fire container wrapper',
                    scale: [1700 / 1000, 780 / 460],
                    position: [0, -90],
                    alpha: 0.9,
                    event: 'screen',
                    childs: [{
                            name: 'main_fire container',
                            position: [0, 0],
                            scale: [1, 1],
                            visible: false,
                            childs: []
                        },
                        {
                            name: '2x_fire container',
                            position: [0, 0],
                            scale: [1, 1],
                            visible: false,
                            childs: []
                        },
                        {
                            name: '3x_fire container',
                            position: [0, 0],
                            scale: [1, 1],
                            visible: false,
                            childs: []
                        },
                        {
                            name: '4x_fire container',
                            position: [0, 0],
                            scale: [1, 1],
                            visible: false,
                            childs: []
                        },
                        {
                            name: '5x_fire container',
                            position: [0, 0],
                            scale: [1, 1],
                            visible: false,
                            childs: []
                        },
                        {
                            name: '6x_fire container',
                            position: [0, 0],
                            scale: [1, 1],
                            visible: false,
                            childs: []
                        },
                        {
                            name: '7x_fire container',
                            position: [0, 0],
                            scale: [1, 1],
                            visible: false,
                            childs: []
                        }
                    ]
                },
                {
                    name: 'multiplier container',
                    position: [500, 355],
                    scale: [1, 1],
                    childs: [{
                            name: 'multiplier_2x container',
                            position: [0, 0],
                            scale: [1, 1],
                            visible: false,
                            childs: []
                        },
                        {
                            name: 'multiplier_3x container',
                            position: [0, 0],
                            scale: [1, 1],
                            visible: false,
                            childs: []
                        },
                        {
                            name: 'multiplier_4x container',
                            position: [0, 0],
                            scale: [1, 1],
                            visible: false,
                            childs: []
                        },
                        {
                            name: 'multiplier_5x container',
                            position: [0, 0],
                            scale: [1, 1],
                            visible: false,
                            childs: []
                        },
                        {
                            name: 'multiplier_6x container',
                            position: [0, 0],
                            scale: [1, 1],
                            visible: false,
                            childs: []
                        },
                        {
                            name: 'multiplier_7x container',
                            position: [0, 0],
                            scale: [1, 1],
                            visible: false,
                            childs: []
                        },
                    ]
                }
            ]
        },
        {
            name: 'AutoMenuContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', WIDTH, HEIGHT],
            scaleStrategyLandscape: ['fit-to-screen', WIDTH, HEIGHT],
            childs: [{
                name: 'automenu overlay',
                childs: [{
                        name: 'automenu overlay rect',
                        event: 'automenu overlay',
                        type: 'graphics',
                        preventDefault: false,
                        draw: [
                            ['beginFill', 0x0],
                            ['drawRect', [-WIDTH / 2, -HEIGHT / 2, WIDTH, HEIGHT]]
                        ],
                        alpha: 0.7,
                    },
                    {
                        name: 'automenu items container',
                        type: 'graphics',
                        position: [0, 0],
                        draw: [
                            ['beginFill', 0x0],
                            ['drawRoundedRect', [-320, -160, 640, 320, 10]]
                        ],
                        alpha: 1,
                        childs: [{
                                name: 'automenu items container border',
                                type: 'graphics',
                                draw: [
                                    ['beginFill', 0x0],
                                    ['drawRoundedRect', [-320, -160, 640, 320, 10]]
                                ],
                            },
                            {
                                name: 'automenu title',
                                type: 'text',
                                text: 'AUTO PLAY',
                                position: [0, -135],
                                styles: {
                                    fontFamily: 'Arial',
                                    fontSize: '20px',
                                    padding: 20,
                                    fill: 0xffffff
                                }
                            },
                            {
                                name: 'automenu split_line',
                                type: 'graphics',
                                position: [0, 0],
                                scale: [1, 1],
                                draw: [
                                    ['beginFill', 0xaaaaaa],
                                    ['drawRect', [-320, -110, 640, 2]]
                                ]
                            },
                            {
                                name: 'automenu text2',
                                type: 'text',
                                text: 'NUMBER OF AUTOSPINS',
                                position: [0, -75],
                                styles: {
                                    fontFamily: 'Arial',
                                    fontSize: '18px',
                                    padding: 20,
                                    fill: 0xffffff
                                }
                            },
                            {
                                name: 'button automenu_200',
                                type: 'graphics',
                                draw: [
                                    ['beginFill', 0xeeeeee],
                                    ['drawRoundedRect', [-130 / 2, -50 / 2, 130, 50, 5]]
                                ],
                                step: 200,
                                position: [130 * 1.5 + 15 * 1.5, -20],
                                button: 'autobet option button',
                                scale: [1, 1],
                                childs: [{
                                        name: 'button automenu_200 glow',
                                        type: 'graphics',
                                        draw: [
                                            ['beginFill', 0x1b9ddb],
                                            ['drawRoundedRect', [-130 / 2, -50 / 2, 130, 50, 5]]
                                        ],
                                        alpha: 0,
                                        childs: [{
                                            name: "button border",
                                            type: 'graphics',
                                            draw: [
                                                ['beginFill', 0xeeeeee],
                                                ['drawRoundedRect', [-125 / 2, -45 / 2, 125, 45, 5]]
                                            ],
                                        }]
                                    },
                                    {
                                        name: 'button automenu_200 selected',
                                        type: 'graphics',
                                        draw: [
                                            ['beginFill', 0x06d806],
                                            ['drawRoundedRect', [-125 / 2, -45 / 2, 125, 45, 5]]
                                        ],
                                        alpha: 0
                                    },
                                    {
                                        name: 'button automenu_200 text',
                                        type: 'text',
                                        text: '200',
                                        scale: [1, 1],
                                        position: [0, 0],
                                        styles: {
                                            align: 'center',
                                            fontFamily: 'Arial',
                                            fontWeight: 'Bold',
                                            fontSize: '25px',
                                            padding: 20,
                                            fill: 0x000000
                                        }
                                    }
                                ]
                            },
                            {
                                name: 'button automenu_100',
                                type: 'graphics',
                                draw: [
                                    ['beginFill', 0xeeeeee],
                                    ['drawRoundedRect', [-130 / 2, -50 / 2, 130, 50, 5]]
                                ],
                                step: 100,
                                position: [130 * 0.5 + 15 * 0.5, -20],
                                button: 'autobet option button',
                                scale: [1, 1],
                                childs: [{
                                    name: 'button automenu_100 glow',
                                    type: 'graphics',
                                    draw: [
                                        ['beginFill', 0x1b9ddb],
                                        ['drawRoundedRect', [-130 / 2, -50 / 2, 130, 50, 5]]
                                    ],
                                    alpha: 0,
                                    childs: [{
                                        name: "button border",
                                        type: 'graphics',
                                        draw: [
                                            ['beginFill', 0xeeeeee],
                                            ['drawRoundedRect', [-125 / 2, -45 / 2, 125, 45, 5]]
                                        ],
                                    }]
                                },
                                {
                                    name: 'button automenu_100 selected',
                                    type: 'graphics',
                                    draw: [
                                        ['beginFill', 0x06d806],
                                        ['drawRoundedRect', [-125 / 2, -45 / 2, 125, 45, 5]]
                                    ],
                                    alpha: 0
                                },
                                {
                                    name: 'button automenu_100 text',
                                    type: 'text',
                                    text: '100',
                                    scale: [1, 1],
                                    position: [0, 0],
                                    styles: {
                                        align: 'center',
                                        fontFamily: 'Arial',
                                        fontWeight: 'Bold',
                                        fontSize: '25px',
                                        padding: 20,
                                        fill: 0x000000
                                    }
                                }]
                            },
                            {
                                name: 'button automenu_50',
                                type: 'graphics',
                                draw: [
                                    ['beginFill', 0xeeeeee],
                                    ['drawRoundedRect', [-130 / 2, -50 / 2, 130, 50, 5]]
                                ],
                                step: 50,
                                position: [-130 * 0.5 - 15 * 0.5, -20],
                                button: 'autobet option button',
                                scale: [1, 1],
                                childs: [{
                                    name: 'button automenu_50 glow',
                                    type: 'graphics',
                                    draw: [
                                        ['beginFill', 0x1b9ddb],
                                        ['drawRoundedRect', [-130 / 2, -50 / 2, 130, 50, 5]]
                                    ],
                                    alpha: 0,
                                    childs: [{
                                        name: "button border",
                                        type: 'graphics',
                                        draw: [
                                            ['beginFill', 0xeeeeee],
                                            ['drawRoundedRect', [-125 / 2, -45 / 2, 125, 45, 5]]
                                        ],
                                    }]
                                },
                                {
                                    name: 'button automenu_50 selected',
                                    type: 'graphics',
                                    draw: [
                                        ['beginFill', 0x06d806],
                                        ['drawRoundedRect', [-125 / 2, -45 / 2, 125, 45, 5]]
                                    ],
                                    alpha: 0
                                },
                                {
                                    name: 'button automenu_50 text',
                                    type: 'text',
                                    text: '50',
                                    scale: [1, 1],
                                    position: [0, 0],
                                    styles: {
                                        align: 'center',
                                        fontFamily: 'Arial',
                                        fontWeight: 'Bold',
                                        fontSize: '25px',
                                        padding: 20,
                                        fill: 0x000000
                                    }
                                }]
                            },
                            {
                                name: 'button automenu_10',
                                type: 'graphics',
                                draw: [
                                    ['beginFill', 0xeeeeee],
                                    ['drawRoundedRect', [-130 / 2, -50 / 2, 130, 50, 5]]
                                ],
                                step: 10,
                                position: [-130 * 1.5 - 15 * 1.5, -20],
                                button: 'autobet option button',
                                scale: [1, 1],
                                childs: [{
                                    name: 'button automenu_10 glow',
                                    type: 'graphics',
                                    draw: [
                                        ['beginFill', 0x1b9ddb],
                                        ['drawRoundedRect', [-130 / 2, -45 / 2, 130, 45, 5]]
                                    ],
                                    alpha: 0,
                                    childs: [{
                                        name: "button border",
                                        type: 'graphics',
                                        draw: [
                                            ['beginFill', 0xeeeeee],
                                            ['drawRoundedRect', [-125 / 2, -45 / 2, 125, 45, 5]]
                                        ],
                                    }]
                                },
                                {
                                    name: 'button automenu_10 selected',
                                    type: 'graphics',
                                    draw: [
                                        ['beginFill', 0x06d806],
                                        ['drawRoundedRect', [-125 / 2, -45 / 2, 125, 45, 5]]
                                    ],
                                    alpha: 0
                                },
                                {
                                    name: 'button automenu_10 text',
                                    type: 'text',
                                    text: '10',
                                    scale: [1, 1],
                                    position: [0, 0],
                                    styles: {
                                        align: 'center',
                                        fontFamily: 'Arial',
                                        fontWeight: 'Bold',
                                        fontSize: '25px',
                                        padding: 20,
                                        fill: 0x000000
                                    }
                                }]
                            },
                            {
                                name: 'autospin_dialog close button',
                                type: "graphics",
                                button: 'button',
                                draw: [
                                    ['beginFill', 0x810f22],
                                    ['drawRoundedRect', [-160 / 2, -50 / 2, 160, 50, 5]]
                                ],
                                position: [-100, 80],
                                childs: [{
                                        name: 'autospin_dialog close button glow',
                                        type: "graphics",
                                        draw: [
                                            ['beginFill', 0x810f22],
                                            ['drawRoundedRect', [-160 / 2, -50 / 2, 160, 50, 5]]
                                        ],
                                        position: [0, 0]
                                    },
                                    {
                                        name: 'close button text',
                                        type: 'text',
                                        text: 'CANCEL',
                                        position: [0, 0],
                                        scale: [1, 0.8],
                                        styles: {
                                            fontFamily: 'AGLettericaDemiCondensedC',
                                            fontSize: '28px',
                                            fill: 0xffffff
                                        }
                                    }
                                ]
                            },
                            {
                                name: 'refresh start button',
                                type: "graphics",
                                button: 'button',
                                draw: [
                                    ['beginFill', 0x058605],
                                    ['drawRoundedRect', [-160 / 2, -50 / 2, 160, 50, 5]]
                                ],
                                position: [100, 80],
                                childs: [{
                                        name: 'refresh start button glow',
                                        type: 'graphics',
                                        draw: [
                                            ['beginFill', 0x058605],
                                            ['drawRoundedRect', [-160 / 2, -50 / 2, 160, 50, 5]]
                                        ],
                                        position: [0, 0],
                                        alpha: 0
                                    },
                                    {
                                        name: 'refresh start button disabled',
                                        type: 'graphics',
                                        draw: [
                                            ['beginFill', 0xa8a9ab],
                                            ['drawRoundedRect', [-160 / 2, -50 / 2, 160, 50, 5]]
                                        ],
                                        position: [0, 0],
                                        alpha: 1
                                    },
                                    {
                                        name: 'refresh button text',
                                        type: 'text',
                                        text: 'START',
                                        position: [0, 0],
                                        scale: [1, 0.8],
                                        styles: {
                                            fontFamily: 'AGLettericaDemiCondensedC',
                                            fontSize: '28px',
                                            fill: 0xffffff
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }]
        },
        {
            name: 'BonusWinContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', WIDTH, 1080],
            scaleStrategyLandscape: ['fit-to-screen', WIDTH, 1080],
            childs: [{
                name: 'bonus_win overlay',
                childs: [{
                        name: 'bonus_win overlay rect',
                        event: 'automenu overlay',
                        type: 'graphics',
                        preventDefault: false,
                        draw: [
                            ['beginFill', 0x00000000],
                            ['drawRect', [-WIDTH, -WIDTH, 3840, 3840]]
                        ],
                        alpha: 0.7,
                    },
                    {
                        name: 'bonus_win items container',
                        type: 'sprite',
                        image: 'popup_award_back',
                        position: [0, -50],
                        scale: [1500 / 1017, 700 / 426],
                        // draw: [['beginFill', 0xffffff], ['drawRoundedRect', [-930 / 2, -310 / 2, 930, 310, 40]]],
                        alpha: 1,
                        childs: [{
                                name: 'bonus_win header',
                                type: 'text',
                                text: 'TOTAL BONUS WIN',
                                position: [0, -80],
                                scale: [1.4, 1.8],
                                styles: {
                                    fontFamily: 'AGLettericaDemiCondensedC',
                                    fontSize: '80px',
                                    padding: 20,
                                    fill: [0xffd236, 0xff8e00],
                                    stroke: 0xe3ac16,
                                    strokeThickness: 3
                                }
                            },
                            {
                                name: 'bonus_win title',
                                type: 'text',
                                text: '150',
                                position: [0, 80],
                                scale: [1.4, 1.8],
                                styles: {
                                    fontFamily: 'AGLettericaDemiCondensedC',
                                    fontSize: '80px',
                                    padding: 20,
                                    fill: [0xd0b172, 0xf8e2a3, 0x97783d],
                                    stroke: 0x553e1c,
                                    strokeThickness: 3,
                                    dropShadow: true,
                                    dropShadowAngle: 0.1,
                                    dropShadowColor: "black",
                                    dropShadowDistance: 3
                                }
                            }
                        ]
                    }
                ]
            }]
        },
        {
            name: 'OverlayContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1500, 725],
            scaleStrategyLandscape: ['fit-to-screen', 1500, 725],
            childs: [{
                name: 'overlay',
                visible: false,
                childs: [{
                    name: 'overlay rect',
                    event: 'overlay',
                    type: 'graphics',
                    draw: [
                        ['beginFill', 0x000000],
                        ['drawRect', [-1500, -1500, 3000, 3000]]
                    ]
                }]
            }]
        },
        {
            name: 'InfoContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', WIDTH, HEIGHT],
            scaleStrategyLandscape: ['fit-to-screen', WIDTH, HEIGHT],
            childs: [{
                name: 'info container wrapper',
                type: 'sprite',
                image: 'help_background',
                childs: [{
                        name: 'info control container',
                        childs: [{
                                name: 'info close button',
                                type: 'sprite',
                                image: 'BtnClose_enabled',
                                position: [(940 - 90) / 2 - 8, -(915 - 90) / 2 + 8],
                                scale: [90 / 110, 90 / 110],
                                button: 'button',
                                childs: [{
                                    name: 'info close button glow',
                                    type: 'sprite',
                                    image: 'BtnClose_over'
                                }]
                            },
                            {
                                name: 'info next button',
                                type: 'sprite',
                                image: 'BtnArrow_enabled',
                                position: [120, (915 - 90) / 2 - 8],
                                scale: [-90 / 110, 90 / 110],
                                button: 'button',
                                childs: [{
                                    name: 'info next button glow',
                                    type: 'sprite',
                                    image: 'BtnArrow_over'
                                }]
                            },
                            {
                                name: 'info prev button',
                                type: 'sprite',
                                image: 'BtnArrow_enabled',
                                position: [-120, (915 - 90) / 2 - 8],
                                scale: [90 / 110, 90 / 110],
                                button: 'button',
                                childs: [{
                                    name: 'info prev button glow',
                                    type: 'sprite',
                                    image: 'BtnArrow_over'
                                }]
                            },
                            {
                                name: 'info current page text',
                                type: 'text',
                                text: '1 / 9',
                                position: [0, (915 - 90) / 2 - 8],
                                styles: {
                                    fill: [0xfbcb00, 0xfd9400],
                                    fontFamily: 'Oswald-Bold',
                                    fontSize: '55px'
                                }
                            }
                        ]
                    },
                    {
                        name: 'info container 1',
                        childs: [{
                                name: 'info container1 label',
                                text: 'L I N E  W I N S',
                                type: 'text',
                                position: [0, -(950 / 2 - 90)],
                                styles: {
                                    fill: [0xfbcb00, 0xfd9400],
                                    fontFamily: 'Oswald-Bold',
                                    fontSize: '60px'
                                }
                            },
                            {
                                name: 'info content 1',
                                type: 'graphics',
                                draw: [
                                    ['beginFill', 0xffffff],
                                    ['drawRect', [-450, -50, 900, 100]]
                                ],
                                position: [0, -(950 / 2 - 230)],
                                childs: [{
                                        name: 'triple card1',
                                        type: 'sprite',
                                        image: 'symbol-6.png',
                                        scale: [120 / 400, 80 / 250],
                                        position: [-240, 0]
                                    },
                                    {
                                        name: 'triple card2',
                                        type: 'sprite',
                                        image: 'symbol-6.png',
                                        scale: [120 / 400, 80 / 250],
                                        position: [-130, 0]
                                    },
                                    {
                                        name: 'triple card3',
                                        type: 'sprite',
                                        image: 'symbol-6.png',
                                        scale: [120 / 400, 80 / 250],
                                        position: [-20, 0]
                                    },
                                    {
                                        name: 'triple text',
                                        type: 'text',
                                        text: '2 0 0 0 0',
                                        position: [230, 0],
                                        styles: {
                                            fill: [0xfbcb00, 0xfd9400],
                                            stroke: 'black',
                                            strokeThickness: 2,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '50px'
                                        }
                                    }
                                ]
                            },
                            {
                                name: 'info content 2',
                                type: 'graphics',
                                draw: [
                                    ['beginFill', 0xffffff],
                                    ['drawRect', [-450, -50, 900, 100]]
                                ],
                                position: [0, -(950 / 2 - 230 - 140)],
                                childs: [{
                                        name: 'triple card1',
                                        type: 'sprite',
                                        image: 'symbol-2.png',
                                        scale: [120 / 400, 80 / 250],
                                        position: [-260, 0]
                                    },
                                    {
                                        name: 'triple card2',
                                        type: 'sprite',
                                        image: 'symbol-2.png',
                                        scale: [120 / 400, 80 / 250],
                                        position: [-130, 0]
                                    },
                                    {
                                        name: 'triple card3',
                                        type: 'sprite',
                                        image: 'symbol-2.png',
                                        scale: [120 / 400, 80 / 250],
                                        position: [0, 0]
                                    },
                                    {
                                        name: 'triple text',
                                        type: 'text',
                                        text: '1 5 0',
                                        position: [230, 0],
                                        styles: {
                                            fill: [0xfbcb00, 0xfd9400],
                                            stroke: 'black',
                                            strokeThickness: 2,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '50px'
                                        }
                                    }
                                ]
                            },
                            {
                                name: 'info content 3',
                                type: 'graphics',
                                draw: [
                                    ['beginFill', 0xffffff],
                                    ['drawRect', [-450, -50, 900, 100]]
                                ],
                                position: [0, -(950 / 2 - 230 - 140 * 2)],
                                childs: [{
                                        name: 'triple card1',
                                        type: 'sprite',
                                        image: 'symbol-1.png',
                                        scale: [120 / 400, 80 / 250],
                                        position: [-260, 0]
                                    },
                                    {
                                        name: 'triple card2',
                                        type: 'sprite',
                                        image: 'symbol-1.png',
                                        scale: [120 / 400, 80 / 250],
                                        position: [-130, 0]
                                    },
                                    {
                                        name: 'triple card3',
                                        type: 'sprite',
                                        image: 'symbol-1.png',
                                        scale: [120 / 400, 80 / 250],
                                        position: [0, 0]
                                    },
                                    {
                                        name: 'triple text',
                                        type: 'text',
                                        text: '8 0',
                                        position: [230, 0],
                                        styles: {
                                            align: 'right',
                                            fill: [0xfbcb00, 0xfd9400],
                                            stroke: 'black',
                                            strokeThickness: 2,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '50px'
                                        }
                                    }
                                ]
                            },
                            {
                                name: 'info content 4',
                                type: 'graphics',
                                draw: [
                                    ['beginFill', 0xffffff],
                                    ['drawRect', [-450, -50, 900, 100]]
                                ],
                                position: [0, -(950 / 2 - 230 - 140 * 3)],
                                childs: [{
                                        name: 'triple card1',
                                        type: 'sprite',
                                        image: 'symbol-0.png',
                                        scale: [120 / 400, 80 / 250],
                                        position: [-260, 0]
                                    },
                                    {
                                        name: 'triple card2',
                                        type: 'sprite',
                                        image: 'symbol-0.png',
                                        scale: [120 / 400, 80 / 250],
                                        position: [-130, 0]
                                    },
                                    {
                                        name: 'triple card3',
                                        type: 'sprite',
                                        image: 'symbol-0.png',
                                        scale: [120 / 400, 80 / 250],
                                        position: [0, 0]
                                    },
                                    {
                                        name: 'triple text',
                                        type: 'text',
                                        text: '4 0',
                                        position: [230, 0],
                                        styles: {
                                            align: 'right',
                                            fill: [0xfbcb00, 0xfd9400],
                                            stroke: 'black',
                                            strokeThickness: 2,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '50px'
                                        }
                                    }
                                ]
                            },
                            {
                                name: 'info content 5',
                                type: 'text',
                                position: [0, -(950 / 2 - 230 - 150 * 3 - 100)],
                                text: 'Line wins pay left to right \n Line wins multiplied by line bet',
                                styles: {
                                    align: 'center',
                                    fill: 0xffffff,
                                    fontFamily: 'Myriad Pro Black Condensed',
                                    fontSize: '35px'
                                }
                            }
                        ]
                    },
                    {
                        name: 'info container 2',
                        visible: false,
                        childs: [{
                                name: 'info container1 label',
                                text: 'L I N E  W I N S',
                                type: 'text',
                                position: [0, -(950 / 2 - 90)],
                                styles: {
                                    fill: [0xfbcb00, 0xfd9400],
                                    fontFamily: 'Oswald-Bold',
                                    fontSize: '60px'
                                }
                            },
                            {
                                name: 'info content 1',
                                type: 'graphics',
                                draw: [
                                    ['beginFill', 0xffffff],
                                    ['drawRect', [-450, -50, 900, 100]]
                                ],
                                position: [0, -(950 / 2 - 90 - 100)],
                                childs: [{
                                        name: 'triple card1',
                                        type: 'sprite',
                                        image: 'symbol-3.png',
                                        scale: [135 / 400, 90 / 250],
                                        position: [-260, 0]
                                    },
                                    {
                                        name: 'triple card2',
                                        type: 'sprite',
                                        image: 'symbol-3.png',
                                        scale: [135 / 400, 90 / 250],
                                        position: [-130, 0]
                                    },
                                    {
                                        name: 'triple card3',
                                        type: 'sprite',
                                        image: 'symbol-3.png',
                                        scale: [135 / 400, 90 / 250],
                                        position: [0, 0]
                                    },
                                    {
                                        name: 'triple text',
                                        type: 'text',
                                        text: '2 5',
                                        position: [330, 0],
                                        styles: {
                                            fill: [0xfbcb00, 0xfd9400],
                                            stroke: 'black',
                                            strokeThickness: 2,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '50px'
                                        }
                                    }
                                ]
                            },
                            {
                                name: 'info content 2',
                                type: 'graphics',
                                draw: [
                                    ['beginFill', 0xffffff],
                                    ['drawRect', [-450, -50, 900, 100]]
                                ],
                                position: [0, -(950 / 2 - 190 - 110)],
                                childs: [{
                                        name: 'triple card1',
                                        type: 'sprite',
                                        image: 'symbol-4.png',
                                        scale: [135 / 400, 90 / 250],
                                        position: [-260, 0]
                                    },
                                    {
                                        name: 'triple card2',
                                        type: 'sprite',
                                        image: 'symbol-4.png',
                                        scale: [135 / 400, 90 / 250],
                                        position: [-130, 0]
                                    },
                                    {
                                        name: 'triple card3',
                                        type: 'sprite',
                                        image: 'symbol-4.png',
                                        scale: [135 / 400, 90 / 250],
                                        position: [0, 0]
                                    },
                                    {
                                        name: 'triple text',
                                        type: 'text',
                                        text: '2 0',
                                        position: [330, 0],
                                        styles: {
                                            fill: [0xfbcb00, 0xfd9400],
                                            stroke: 'black',
                                            strokeThickness: 2,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '50px'
                                        }
                                    }
                                ]
                            },
                            {
                                name: 'info content 3',
                                type: 'graphics',
                                draw: [
                                    ['beginFill', 0xffffff],
                                    ['drawRect', [-450, -50, 900, 100]]
                                ],
                                position: [0, -(950 / 2 - 190 - 110 * 2)],
                                childs: [{
                                        name: 'anytwo label',
                                        type: 'text',
                                        text: 'ANY TWO',
                                        position: [-320, 0],
                                        styles: {
                                            fill: 0xff0000,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '60px'
                                        }
                                    },
                                    {
                                        name: 'triple card3',
                                        type: 'sprite',
                                        image: 'symbol-6.png',
                                        scale: [120 / 400, 80 / 250],
                                        position: [50, 0]
                                    },
                                    {
                                        name: 'triple text',
                                        type: 'text',
                                        text: '1 0',
                                        position: [330, 0],
                                        styles: {
                                            align: 'right',
                                            fill: [0xfbcb00, 0xfd9400],
                                            stroke: 'black',
                                            strokeThickness: 2,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '50px'
                                        }
                                    }
                                ]
                            },
                            {
                                name: 'info content 4',
                                type: 'graphics',
                                draw: [
                                    ['beginFill', 0xffffff],
                                    ['drawRect', [-450, -190 / 2, 900, 190]]
                                ],
                                position: [0, -(950 / 2 - 190 - 110 * 3 - 45)],
                                childs: [{
                                        name: 'anytwo label',
                                        type: 'text',
                                        text: 'ANY THREE',
                                        position: [-320, 0],
                                        styles: {
                                            fill: 0xff0000,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '60px'
                                        }
                                    },
                                    {
                                        name: 'triple card3',
                                        type: 'sprite',
                                        image: 'symbol-4.png',
                                        scale: [140 / 400, 90 / 250],
                                        position: [-20, -40]
                                    },
                                    {
                                        name: 'triple card3',
                                        type: 'sprite',
                                        image: 'symbol-0.png',
                                        scale: [140 / 400, 90 / 250],
                                        position: [80, -40]
                                    },
                                    {
                                        name: 'triple card3',
                                        type: 'sprite',
                                        image: 'symbol-2.png',
                                        scale: [140 / 400, 90 / 250],
                                        position: [195, -40]
                                    },
                                    {
                                        name: 'triple card3',
                                        type: 'sprite',
                                        image: 'symbol-3.png',
                                        scale: [140 / 400, 90 / 250],
                                        position: [40, 40]
                                    },
                                    {
                                        name: 'triple card3',
                                        type: 'sprite',
                                        image: 'symbol-1.png',
                                        scale: [140 / 400, 90 / 250],
                                        position: [140, 40]
                                    },
                                    {
                                        name: 'triple text',
                                        type: 'text',
                                        text: '5',
                                        position: [330, 0],
                                        styles: {
                                            align: 'right',
                                            fill: [0xfbcb00, 0xfd9400],
                                            stroke: 'black',
                                            strokeThickness: 2,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '50px'
                                        }
                                    }
                                ]
                            },
                            {
                                name: 'info content 5',
                                type: 'graphics',
                                draw: [
                                    ['beginFill', 0xffffff],
                                    ['drawRect', [-450, -50, 900, 100]]
                                ],
                                position: [0, -(950 / 2 - 190 - 110 * 4 - 90)],
                                childs: [{
                                        name: 'anytwo label',
                                        type: 'text',
                                        text: 'ANY ONE',
                                        position: [-320, 0],
                                        styles: {
                                            fill: 0xff0000,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '60px'
                                        }
                                    },
                                    {
                                        name: 'triple card3',
                                        type: 'sprite',
                                        image: 'symbol-6.png',
                                        scale: [120 / 400, 80 / 250],
                                        position: [50, 0]
                                    },
                                    {
                                        name: 'triple text',
                                        type: 'text',
                                        text: '2',
                                        position: [330, 0],
                                        styles: {
                                            align: 'right',
                                            fill: [0xfbcb00, 0xfd9400],
                                            stroke: 'black',
                                            strokeThickness: 2,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '50px'
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'info container 3',
                        visible: false,
                        childs: [{
                                name: 'info container1 label',
                                text: 'W I L D  M U L T  I P L I E R',
                                type: 'text',
                                position: [0, -(950 / 2 - 90)],
                                styles: {
                                    fill: [0xfbcb00, 0xfd9400],
                                    fontFamily: 'Oswald-Bold',
                                    fontSize: '60px'
                                }
                            },
                            {
                                name: 'info content 1',
                                position: [0, -(950 / 2 - 300)],
                                childs: [{
                                        name: 'triple card1',
                                        type: 'sprite',
                                        image: 'symbol-6.png',
                                        scale: [240 / 400, 150 / 250],
                                        position: [-260, 0]
                                    },
                                    {
                                        name: 'triple card2',
                                        type: 'sprite',
                                        image: 'symbol-5.png',
                                        scale: [220 / 400, 140 / 250],
                                        position: [260, -80]
                                    },
                                    {
                                        name: 'triple card3',
                                        type: 'sprite',
                                        image: 'symbol-6.png',
                                        scale: [220 / 400, 140 / 250],
                                        position: [260, 80]
                                    },
                                    {
                                        name: 'triple text',
                                        type: 'text',
                                        text: 'IS WILD AND \n SUBSTITUTES \n FOR ALL \n SYMBOLS EXCEPT:',
                                        position: [0, 0],
                                        styles: {
                                            align: 'center',
                                            fill: 0xffffff,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '40px'
                                        }
                                    }
                                ]
                            },
                            {
                                name: 'info content 2',
                                position: [0, -(950 / 2 - 290 - 110 * 2)],
                                childs: [{
                                        name: 'each label',
                                        type: 'text',
                                        text: 'EACH',
                                        position: [-380, 0],
                                        styles: {
                                            align: 'center',
                                            fill: 0xffffff,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '40px'
                                        }
                                    },
                                    {
                                        name: 'triple card3',
                                        type: 'sprite',
                                        image: 'symbol-6.png',
                                        scale: [200 / 400, 130 / 250],
                                        position: [-230, -20]
                                    },
                                    {
                                        name: 'triple text',
                                        type: 'text',
                                        text: 'THAT SUBSTITUTES IN A LINE WIN',
                                        position: [150, 0],
                                        styles: {
                                            align: 'center',
                                            fill: 0xffffff,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '40px'
                                        }
                                    },
                                    {
                                        name: 'triple text',
                                        type: 'text',
                                        text: 'MULTIPLIES THAT WIN BY 3X. \n MORE THAN ONE MULTIPLIER MAY \n SUBSTITUTE ON A LINE WIN, UP TO 9X.',
                                        position: [0, 120],
                                        styles: {
                                            align: 'center',
                                            fill: 0xffffff,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '40px'
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'info container 4',
                        visible: false,
                        childs: [{
                                name: 'info container1 label',
                                text: 'F R E E  G A M E S',
                                type: 'text',
                                position: [0, -(950 / 2 - 90)],
                                styles: {
                                    fill: [0xfbcb00, 0xfd9400],
                                    fontFamily: 'Oswald-Bold',
                                    fontSize: '60px'
                                }
                            },
                            {
                                name: 'info content 1',
                                position: [0, -(950 / 2 - 230)],
                                childs: [{
                                    name: 'triple card1',
                                    type: 'sprite',
                                    image: 'symbol-5.png',
                                    scale: [240 / 400, 150 / 250],
                                    position: [0, 0]
                                }]
                            },
                            {
                                name: 'info content 2',
                                position: [0, -(950 / 2 - 230 - 180)],
                                childs: [{
                                        name: 'each label',
                                        type: 'text',
                                        text: '3 BONUS SYMBOLS IN ANY POSITION \n IN THE BASE GAME PAY A \n SCATTER WIN OF 1X TOTAL BET \n AND TRIGGER 7 FREE GAMES.',
                                        position: [0, 0],
                                        styles: {
                                            align: 'center',
                                            fill: 0xffffff,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '40px'
                                        }
                                    },
                                    {
                                        name: 'triple text',
                                        type: 'text',
                                        text: '3 BONUS SYMBOLS IN ANY POSITION \n DURING FREE GAMES PAY A \n SCATTER WIN OF 1X TOTAL BET \n AND TRIGGER 7 ADDITIONAL FREE \n GAMES UP TO A MAXIMUM OF 700.',
                                        position: [0, 235],
                                        styles: {
                                            align: 'center',
                                            fill: 0xf84e4f,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '40px'
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'info container 5',
                        visible: false,
                        childs: [{
                                name: 'info container1 label',
                                text: 'F R E E  G A M E S',
                                type: 'text',
                                position: [0, -(950 / 2 - 90)],
                                styles: {
                                    fill: [0xfbcb00, 0xfd9400],
                                    fontFamily: 'Oswald-Bold',
                                    fontSize: '60px'
                                }
                            },
                            {
                                name: 'info content 1',
                                position: [0, -(950 / 2 - 230)],
                                childs: [{
                                    name: 'triple card1',
                                    type: 'sprite',
                                    image: 'spitfire',
                                    scale: [240 / 254, 150 / 156],
                                    position: [0, 0]
                                }]
                            },
                            {
                                name: 'info content 2',
                                position: [0, -(950 / 2 - 230 - 140)],
                                childs: [{
                                        name: 'each label',
                                        type: 'text',
                                        text: 'EACH FREE GAME TRIGGERS A SPITFIRE MULTIPLIER \n BETWEEN 2X AND 7X',
                                        position: [0, 0],
                                        styles: {
                                            align: 'center',
                                            fill: 0xffffff,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '40px'
                                        }
                                    },
                                    {
                                        name: 'help_back',
                                        type: 'sprite',
                                        image: 'help_bg',
                                        position: [0, 90]
                                    },
                                    {
                                        name: 'triple text',
                                        type: 'text',
                                        text: 'WINS FOR THE CURRENT GAME ARE MULTIPLIED BY \n THE AWARDED SPITFIRE MULTIPLIER, EXCEPT FOR:',
                                        position: [0, 210],
                                        styles: {
                                            align: 'center',
                                            fill: 0xffffff,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '40px'
                                        }
                                    }
                                ]
                            },
                            {
                                name: 'info content 2',
                                position: [0, -(950 / 2 - 230 - 500)],
                                childs: [{
                                        name: 'help_back1',
                                        type: 'sprite',
                                        scale: [240 / 400, 150 / 250],
                                        image: 'symbol-6.png',
                                        position: [0, 0]
                                    },
                                    {
                                        name: 'help_back2',
                                        type: 'sprite',
                                        scale: [240 / 400, 150 / 250],
                                        image: 'symbol-6.png',
                                        position: [-260, 0]
                                    },
                                    {
                                        name: 'help_back3',
                                        type: 'sprite',
                                        scale: [240 / 400, 150 / 250],
                                        image: 'symbol-6.png',
                                        position: [260, 0]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'info container 6',
                        visible: false,
                        childs: [{
                                name: 'info container1 label',
                                text: 'P A Y L I N E S',
                                type: 'text',
                                position: [0, -(950 / 2 - 90)],
                                styles: {
                                    fill: [0xfbcb00, 0xfd9400],
                                    fontFamily: 'Oswald-Bold',
                                    fontSize: '60px'
                                }
                            },
                            {
                                name: 'info content 1',
                                position: [0, 0],
                                childs: [{
                                    name: 'triple card1',
                                    type: 'sprite',
                                    image: 'help_bg2',
                                    scale: [1, 1],
                                    position: [0, 0]
                                }]
                            }
                        ]
                    },
                    {
                        name: 'info container 7',
                        visible: false,
                        childs: [{
                                name: 'info container1 label',
                                text: 'P A Y B A C K  I N F O R M A T I O N',
                                type: 'text',
                                position: [0, -(950 / 2 - 90)],
                                styles: {
                                    fill: [0xfbcb00, 0xfd9400],
                                    fontFamily: 'Oswald-Bold',
                                    fontSize: '60px'
                                }
                            },
                            {
                                name: 'info content 1',
                                position: [0, 0],
                                childs: [{
                                        name: 'triple card1',
                                        type: 'text',
                                        text: 'In accordance with fair gaming practices required in \n most legal jurisdictions worldwide, each and every game \n outcome is completely independent, except in cases \n where one spin unlocks a feature for a subsequent spin \n or series of spins, per the game rules. The odds of getting \n any particular outcome are always the same.',
                                        scale: [1, 1],
                                        position: [0, -160],
                                        styles: {
                                            align: 'center',
                                            fill: 0xffffff,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '40px'
                                        }
                                    },
                                    {
                                        name: 'triple card1',
                                        type: 'text',
                                        text: 'The odds do not vary based on prior outcomes, bet size, \n balance size, time of day, day of week, etc. For example, if\n the top award is won on given play of the game, the\n chances of winning the top award on the next play are \n exactly the same. Likewise, prior losses do not change \n future odds.',
                                        scale: [1, 1],
                                        position: [0, 170],
                                        styles: {
                                            align: 'center',
                                            fill: 0xffffff,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '40px'
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'info container 8',
                        visible: false,
                        childs: [{
                                name: 'info container1 label',
                                text: 'P A Y B A C K  I N F O R M A T I O N',
                                type: 'text',
                                position: [0, -(950 / 2 - 90)],
                                styles: {
                                    fill: [0xfbcb00, 0xfd9400],
                                    fontFamily: 'Oswald-Bold',
                                    fontSize: '60px'
                                }
                            },
                            {
                                name: 'info content 1',
                                position: [0, 0],
                                childs: [{
                                        name: 'triple card1',
                                        type: 'text',
                                        text: 'The expected payback reflects the theoretical return \n across a very large number of plays by numerous players\n over an extended period of time.',
                                        scale: [1, 1],
                                        position: [0, -160],
                                        styles: {
                                            align: 'center',
                                            fill: 0xffffff,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '40px'
                                        }
                                    },
                                    {
                                        name: 'triple card1',
                                        type: 'text',
                                        text: 'For this game, the long-term, theoretically expected \n payback is from 92.01% to 96.13%. The results for any\n  given player over a play session can vary widely from this \n long-term, expected average in either direction. The fewer \n the number of games played, the wider the normal \n variance of actual payback may be experienced.',
                                        scale: [1, 1],
                                        position: [0, 130],
                                        styles: {
                                            align: 'center',
                                            fill: 0xffffff,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '40px'
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'info container 9',
                        visible: false,
                        childs: [{
                                name: 'info container1 label',
                                text: 'P A Y B A C K  I N F O R M A T I O N',
                                type: 'text',
                                position: [0, -(950 / 2 - 90)],
                                styles: {
                                    fill: [0xfbcb00, 0xfd9400],
                                    fontFamily: 'Oswald-Bold',
                                    fontSize: '60px'
                                }
                            },
                            {
                                name: 'info content 1',
                                position: [0, 0],
                                childs: [{
                                        name: 'triple card1',
                                        type: 'text',
                                        text: 'The expected payback value is also based upon correct \n player choices for any games which involve main game \n and/or bonus game play strategy.',
                                        scale: [1, 1],
                                        position: [0, -160],
                                        styles: {
                                            align: 'center',
                                            fill: 0xffffff,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '40px'
                                        }
                                    },
                                    {
                                        name: 'triple card1',
                                        type: 'text',
                                        text: 'The maximum win on any trasaction including the \n results of the Free Spins bonus, plus the outcome which \n launched the bonus, is capped at 9999999999.00.',
                                        scale: [1, 1],
                                        position: [0, 100],
                                        styles: {
                                            align: 'center',
                                            fill: 0xffffff,
                                            fontFamily: 'Oswald-Bold',
                                            fontSize: '40px'
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }, ]
        },
        {
            name: 'ErrorContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1280, 1280],
            scaleStrategyLandscape: ['fit-to-screen', 1280, 1080],
            childs: [{
                name: 'error container',
                visible: false,
                childs: [
                    { name: 'error rect', type: 'graphics' },
                    {
                        name: 'error text 1',
                        type: 'text',
                        text: 'Error',
                        position: [0, -450 / 2],
                        styles: { fontFamily: 'Vinque', fontSize: '46px', padding: 20, fill: 0xcccccc }
                    },
                    { name: 'error line', type: 'graphics' },
                    {
                        name: 'error close button',
                        type: 'graphics',
                        position: [565 / 2, -445 / 2],
                        button: 'error close',
                        hit: ['rect', -60, -20, 80, 40],
                        childs: [{
                            name: 'error close button text',
                            type: 'text',
                            text: "CLOSE",
                            position: [-30, 0],
                            styles: { fontFamily: 'Vinque', fontSize: '25px', padding: 20, fill: 0xcccccc }
                        }]
                    },
                    {
                        name: 'error text 2',
                        type: 'text',
                        text: 'Something went wrong.',
                        position: [0, 0],
                        styles: { fontFamily: 'Vinque', fontSize: '30px', padding: 20, fill: 0xffde00 }
                    }
                ]
            }]
        },
        {
            name: 'BonusContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1280, 1280],
            scaleStrategyLandscape: ['fit-to-screen', 1280, 1080],
            childs: [{
                name: 'bonus container',
                visible: false,
                childs: [
                    { name: 'bonus rect', type: 'sprite', image: 'bonuspane.png' },
                    { name: 'bonus line', type: 'graphics' },
                    // {name: 'bonus close button', type: 'graphics', position: [565/2, -445/2], button: 'bonus close', hit: ['rect', -60, -20, 80, 40], childs:[
                    // 	{name: 'bonus close button text', type:'text', text: "CLOSE",position:[-30,0], styles: {fontFamily: 'Vinque', fontSize: '25px', padding: 20, fill: 0xcccccc}}
                    // ]},
                    {
                        name: 'bonus text 2',
                        type: 'text',
                        text: 'Something went wrong.',
                        position: [0, -90],
                        styles: {
                            align: 'center',
                            fontFamily: 'Vinque, serif',
                            fontwegiht: 600,
                            stroke: 'white',
                            'strokeThickness': 5,
                            fontSize: '60px',
                            padding: 15,
                            fill: [0xff0b00, 0xffa61f]
                        }
                    }
                ]
            }]
        },
        {
            name: 'OrientSwitchContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1080, 1920],
            scaleStrategyLandscape: [0, 0],
            visibleLandscape: false,
            visiblePortrait: true,
            childs: [{
                name: 'orient switch background',
                type: 'graphics',
                scale: [1, 1],
                draw: [
                    ['beginFill', 0x212121],
                    ['drawRect', [-WIDTH, -WIDTH, 3840, 3840]]
                ],
                childs: [{
                        name: 'orient switch icon',
                        type: 'sprite',
                        image: 'orient_switch',
                    },
                    {
                        name: 'orient switch text',
                        type: 'text',
                        position: [0, -300],
                        text: 'PLEASE TURN YOUR DEVICE',
                        alpha: 1,
                        styles: {
                            fontFamily: 'AGLettericaDemiCondensedC',
                            fontSize: '60px',
                            fontWeight: 'Bold',
                            fill: 0xffffff
                        }
                    }
                ]
            }]
        }
    ],

    Events: {

        'Gameplay before build': function() {
            this.updateChildParamsByName(Settings[this.Name]);
        },

        'Gameplay menu overlay up': function(container, e) {
            MRAID.markMeaningfulInteraction();
            this.menu_mode = false;
            this['MenuContainer'].visible = this.menu_mode;
        },

        'Gameplay automenu overlay up': function(container, e) {
            // MRAID.markMeaningfulInteraction();
            // this.automenu_mode = false;
            // this['AutoMenuContainer'].visible = this.automenu_mode;
        },

        'overlay down': function() {
            MRAID.markMeaningfulInteraction();
            this['overlay'].visible = false;
        },

        'Gameplay build': function() {
            this.is_local_mode = true;
            //getting init data from server
            if (!this.is_local_mode) {
                var reg1 = new RegExp("(^|&)" + "game_id" + "=([^&]*)(&|$)", "i");
                var reg2 = new RegExp("(^|&)" + "key" + "=([^&]*)(&|$)", "i");
                var r1 = window.location.search.substr(1).match(reg1);
                var r2 = window.location.search.substr(1).match(reg2);
                if (r2 !== null) {
                    // Global.session_id = r1[2];
                    localStorage.api_key = r2[2];
                    // console.log(r2[2])
                }
                if (r1 !== null) {
                    this.session_id = r1[2];
                    // console.log(this.session_id)
                } else {
                    console.log("no");
                    //this.userBlockLayer.active = true;
                    return;
                }
            }
            // server end

            this.is_bonus = false;

            this.const = {
                RESULT_TYPE: {
                    NORMAL: 0,
                    // BIGMONEY: 1,
                    // JACKPOT: 2,
                    // BLUEJACKPOT: 3,
                    // REDJACKPOT: 4
                }
            };
            this.win_anim_mode = 0x0;

            this.menu_mode = false;
            this.automenu_mode = false;

            this.current_auto_amount = 0;

            this.credits = {
                value: 1000,
                drawed: 1000
            };
            if (!this.is_local_mode) {
                var cashinfo = this.getCashInfo();
                this.gamesession_id = cashinfo.response.gamesession_id;
                this.credits = {
                    value: parseInt(cashinfo.response.balance),
                    drawed: parseInt(cashinfo.response.balance)
                };
                this.gamespec = cashinfo.response.gamespec;
                this.gamesession_id = cashinfo.response.gamesession_id;
            }

            this['balancePanel'].text = "Balance : " + this.credits.value;

            this.bet = {
                amount: 25,
                drawed: 25,
                step: 0
            };

            this.arrLinesValue = 25;
            this.arrBetValue = [1, 2, 4, 8, 16, 32, 64, 80];

            this.lines = {
                value: 1,
                step: 1
            };

            this.betperlines = {
                value: 25,
                step: 1
            };

            this.bonus_amount = 0;

            this.line_value_list = [1, 3, 4, 5];

            if (this.is_local_mode)
                this.arrBetValue = [1, 2, 4, 8, 16, 32, 64, 80];
            else
                this.getServerInitialInfo();

            this.spinCombinations = [];

            this.helpPageVisabilityFlag = false;
            this.helpPageIndex = 1;
            this.HELP_PAGE_CNT = 7;
            this.helpPageSections = [4, 3, 2, 3, 1, 1, 4];

            this.cur_mouse_capture_container_name = "";

            this['error rect'].beginFill(0x444444);
            this['error rect'].lineStyle(2, 0x111111);
            this['error rect'].drawRoundedRect(-620 / 2, -500 / 2, 1240 / 2, 1000 / 2, 10);

            this['error line'].lineStyle(2, 0x111111);
            this['error line'].moveTo(-620 / 2, -390 / 2);
            this['error line'].lineTo(620 / 2, -390 / 2);
            this['error line'].endFill();

            this.accountData = {
                name: ' ',
                cpu: 0,
                net: 0,
                balance: ' '
            };

            this.allSprites = [];

            this.wildBackTween = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],

                show: () => {
                    this.wildBackTween.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if (container.children.length > 0 && container.children[0].type === "movie-clip") {
                                container.children[0].gotoAndPlay(0);
                            }
                        });
                        tween.play();
                    });
                },
                hide: () => {
                    this.wildBackTween.showTweens.forEach((tween) => {
                        tween.stop();
                    });
                    this.wildBackTween.showTweens = [];
                    this.wildBackTween.hideTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.wildBackTween.hideTweens = [];
                },
                hideQuick: () => {
                    this.wildBackTween.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].stop();
                            }
                        });
                        tween.stop();
                        tween = null;
                    });
                    this.wildBackTween.showTweens = [];
                    this.wildBackTween.hideTweens.forEach((tween) => {
                        tween.stop();
                        tween = null;
                    });
                    this.wildBackTween.hideTweens = [];
                    this.wildBackTween.hideQuickTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.wildBackTween.hideQuickTweens = [];
                }
            };

            this.currentTweens = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],
                show: () => {
                    this.currentTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if (container.children.length > 0 && container.children[0].type === "movie-clip") {
                                container.children[0].gotoAndPlay(0);
                                if (container.children.length > 1) {
                                    container.children[1].gotoAndPlay(0);
                                    container.children[2].gotoAndPlay(0);
                                }
                            }
                        });
                        tween.play();
                    });
                },
                hide: () => {
                    this.currentTweens.showTweens.forEach((tween) => {
                        tween.stop();
                    });
                    this.currentTweens.showTweens = [];
                    this.currentTweens.hideTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.currentTweens.hideTweens = [];
                },
                hideQuick: () => {
                    this.currentTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].stop();
                            }
                        });
                        tween.stop();
                        tween = null;
                    });
                    this.currentTweens.showTweens = [];
                    this.currentTweens.hideTweens.forEach((tween) => {
                        tween.stop();
                        tween = null;
                    });
                    this.currentTweens.hideTweens = [];
                    this.currentTweens.hideQuickTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.currentTweens.hideQuickTweens = [];
                }
            };

            this.auto_mode = false;
            this.sound_mode = true;
            this.creditsNotInc = true;

            this.backgroundSound = null;
            this.currentSound = null;

            this.COLUMNS_COUNT = 5;
            this.ROWS_COUNT = 3;

            this.REEL_SYMBOLS_COUNT = this.ROWS_COUNT + this.ROWS_COUNT + 1;

            this.BOARD_SIZE = [800, 440];
            this.COLUMNS_OFFSET = 208.5;
            this.ROWS_OFFSET = 145; // symbols offset in the reel

            this.INERTIA = 50;

            this.REELS_STOP_TIMEOUT = 1000;
            this.REELS_STOP_DELAY = 400;
            this.REELS_START_TIMEOUT = 0;
            this.REELS_START_DELAY = 150;

            this.SYMBOLS_SCALE = 1;

            this.reels = [];

            this.winAmountIsIncreasing = false;
            this.winAmountToDisplay = {
                currentValue: 0,
                targetValue: 0
            };

            let init_cards = [
                [
                    [3, 2, 4],
                    [2, 5, 0],
                    [4, 5, 1],
                    [4, 2, 3],
                    [3, 2, 1]
                ],
                [
                    [1, 4, 0],
                    [4, 2, 3],
                    [2, 3, 2],
                    [1, 5, 0],
                    [3, 2, 1]
                ],
                [
                    [5, 4, 2],
                    [4, 3, 3],
                    [2, 5, 4],
                    [3, 2, 1],
                    [5, 1, 5]
                ]
            ];

            let sample_index = _.random(0, init_cards.length - 1);

            //symbol
            for (let i = 0; i < this.COLUMNS_COUNT; i++) {
                let mostLeft = -1 * (this.COLUMNS_COUNT - 1) / 2 * this.COLUMNS_OFFSET; // the most left element on game board

                this.buildChild(this['game board symbols container'], {
                    name: 'reel mask ' + i,
                    type: 'graphics',
                    draw: [
                        ['beginFill', [0x000000]],
                        ['drawRect', [-this.BOARD_SIZE[0] / 2, -this.BOARD_SIZE[1] / 2, this.BOARD_SIZE[0], this.BOARD_SIZE[1]]]
                    ],
                    position: [mostLeft + this.COLUMNS_OFFSET * i, 0]
                });

                let reelSprite = this.buildChild(this['game board symbols container'], {
                    name: 'reel ' + i,
                    mask: 'reel mask ' + i,
                    position: [mostLeft + this.COLUMNS_OFFSET * i, -1 * (this.ROWS_COUNT - 1) / 2 * this.ROWS_OFFSET - (this.ROWS_COUNT + 1) * this.ROWS_OFFSET]
                });

                let reelSpriteHighlight = this.buildChild(this['game board symbols highlighted container'], {
                    name: 'reel highlighted ' + i,
                    position: [mostLeft + this.COLUMNS_OFFSET * i, -1 * (this.ROWS_COUNT - 1) / 2 * this.ROWS_OFFSET - (this.ROWS_COUNT + 1) * this.ROWS_OFFSET]
                });

                this.reels.push({
                    sprite: reelSprite,
                    spriteHighlight: reelSpriteHighlight,
                    speed: null,
                    completeSymbol: null,
                    completed: null,
                    animationState: null
                });

                for (let j = 0; j < this.REEL_SYMBOLS_COUNT; j++) {

                    this.buildChild(this['reel ' + i], {
                        name: 'reel ' + i + ' symbol container ' + j,
                        scale: [this.SYMBOLS_SCALE, this.SYMBOLS_SCALE],
                        position: [0, this.ROWS_OFFSET * j]
                    });

                    this.buildChild(this['reel highlighted ' + i], {
                        name: 'reel ' + i + ' symbol highlighted container ' + j,
                        scale: 1,
                        position: [0, this.ROWS_OFFSET * j]
                    });

                    this.buildChild(this['reel ' + i + ' symbol highlighted container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' highlight',
                        type: 'sprite',
                        visible: false
                    });

                    this.buildChild(this['reel ' + i + ' symbol container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' crisp',
                        type: 'sprite'
                    });

                    this.buildChild(this['reel ' + i + ' symbol container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' blur',
                        type: 'sprite',
                        visible: false
                    });

                    var card_index = 7;
                    if (j > this.ROWS_COUNT)
                        card_index = init_cards[sample_index][i][j - this.ROWS_COUNT - 1];
                    else
                        card_index = _.random(0, App.Symbols.length - 1);

                    this.setSymbolTexture('reel ' + i + ' symbol container ' + j, App.Symbols[card_index].Image);
                }
            }

            // // anticipation movie-clip
            // let frames = [];
            // let image = "anticipation.png";
            // for (let k = 1; k <= 56; k++) {
            //     frames.push(image.replace('.png', ((k < 10) ? '-0' : '-') + k + '.png'))
            // }
            // /* this.buildChild(this['anticipation container'], {
            //     name: 'anticipation container animation',
            //     type: 'movie-clip',
            //     frames: frames,
            //     speed: 0.2,
            //     loop: true
            // }); */

            // let reel_fire_list = ['2x_fire', '3x_fire', '4x_fire', '5x_fire', '6x_fire', '7x_fire', 'main_fire'];
            // for (let i = 0; i < reel_fire_list.length; i++) {
            //     let frames = [];
            //     let image = reel_fire_list[i] + "_reels.png";
            //     for (let j = 1; j <= 18; j++) {
            //         if (j % 5 === 0)
            //             continue;
            //         frames.push(image.replace('.png', ((j < 10) ? '_0' : '_') + j + '.png'));
            //     }
            //     this.buildChild(this[reel_fire_list[i] + ' container'], {
            //         name: reel_fire_list[i] + ' container animation1',
            //         type: 'movie-clip',
            //         frames: frames,
            //         speed: 0.15,
            //         visible: false,
            //         loop: true
            //     });
            //     frames = [];
            //     for (let j = 19; j <= 28; j++) {
            //         if (j % 5 === 0)
            //             continue;
            //         frames.push(image.replace('.png', ((j < 10) ? '_0' : '_') + j + '.png'));
            //     }
            //     this.buildChild(this[reel_fire_list[i] + ' container'], {
            //         name: reel_fire_list[i] + ' container animation2',
            //         type: 'movie-clip',
            //         frames: frames,
            //         visible: false,
            //         speed: 0.09,
            //         loop: true
            //     });
            // }
            //
            // let spitfire_list = ['2x', '3x', '4x', '5x', '6x', '7x'];
            // for (let i = 0; i < spitfire_list.length; i++) {
            //     let frames = [];
            //     let image = "multiplier_" + spitfire_list[i] + ".png";
            //     for (let j = 0; j <= 23; j++) {
            //         frames.push(image.replace('.png', ((j < 10) ? '-0' : '-') + j + '.png'));
            //     }
            //     this.buildChild(this['multiplier_' + spitfire_list[i] + ' container'], {
            //         name: 'multiplier_' + spitfire_list[i] + ' container animation1',
            //         type: 'movie-clip',
            //         scale: [260 / 158, 200 / 108],
            //         frames: frames,
            //         visible: false,
            //         speed: 0.5,
            //         loop: true
            //     });
            //     frames = [];
            //     image = "multiplier_" + spitfire_list[i] + "1.png";
            //     for (let j = 0; j <= 23; j++) {
            //         frames.push(image.replace('.png', ((j < 10) ? '-0' : '-') + j + '.png'));
            //     }
            //     this.buildChild(this['multiplier_' + spitfire_list[i] + ' container'], {
            //         name: 'multiplier_' + spitfire_list[i] + ' container animation2',
            //         type: 'movie-clip',
            //         scale: [260 / 158, 200 / 108],
            //         frames: frames,
            //         visible: false,
            //         speed: 0.5,
            //         loop: true
            //     });
            //     frames = [];
            //     image = "multiplier_" + spitfire_list[i] + "2.png";
            //     for (let j = 0; j <= 21; j++) {
            //         frames.push(image.replace('.png', ((j < 10) ? '-0' : '-') + j + '.png'));
            //     }
            //     this.buildChild(this['multiplier_' + spitfire_list[i] + ' container'], {
            //         name: 'multiplier_' + spitfire_list[i] + ' container animation3',
            //         type: 'movie-clip',
            //         scale: [260 / 158, 200 / 108],
            //         frames: frames,
            //         visible: false,
            //         speed: 0.5,
            //         loop: false
            //     });
            //     this.buildChild(this['multiplier_' + spitfire_list[i] + ' container'], {
            //         name: 'multiplier_' + spitfire_list[i] + ' number',
            //         type: 'sprite',
            //         image: 'multi_number_' + spitfire_list[i],
            //         scale: [130 / 103, 130 / 103],
            //         position: [-30, 0],
            //         visible: true
            //     });
            //     this.buildChild(this['multiplier_' + spitfire_list[i] + ' container'], {
            //         name: 'multiplier_' + spitfire_list[i] + ' x',
            //         type: 'sprite',
            //         image: 'multi_x_' + spitfire_list[i],
            //         scale: [130 / 103, 130 / 103],
            //         position: [30, 0],
            //         visible: true
            //     });
            // }

            // setTimeout(() => {
            //     this.startReelfireAnimation("2x_fire");
            //     this.startMultiplierAnimation("3x");
            //     this.startMultiplierAnimation("4x");
            //     setTimeout(() => {
            //         // this.stopReelfireAnimation("2x_fire");
            //         this.stopMultiplierAnimation("4x");
            //     }, 3000)
            // }, 3000);
            // this.stopMultiplierAnimation("2x");

            this.playSound('aud_AM_BG_Loop_Online', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false}, sound => {
                this.backgroundSound = sound;
            });
        },

        'Gameplay resize': function() {
            this.refreshPanelValues();

            if (this.helpPageVisabilityFlag)
                this.showHelpPage();

            if (this.auto_mode === true) {
                this['start button'].texture = this.getTexture("buttonstop");
                this['start button glow'].texture = this.getTexture("buttonstophover");
                this['start button text'].visible = true;
            }
            else {
                this['start button'].texture = this.getTexture("buttonspin");
                this['start button glow'].texture = this.getTexture("buttonspinhover");
                this['start button text'].visible = false;
            }

            if (this.automenu_mode === true)
                this['AutoMenuContainer'].visible = true;
        },

        'Gameplay showed': function() {
            if (Settings["intro"]) {
                this.showIntro(function() {
                    this.startGame();
                });
            }
            else {
                this.skipIntro(function() {
                    this.startGame();
                });
            }
        },

        'Gameplay update': function() {
            let time = this.updateTimeOffset / (1000 / 60);
            //if (time > 2) time = 2;

            if (this.state === 'spin' || this.state === 'spinStop') {
                for (let i = 0; i < this.COLUMNS_COUNT; i++) {
                    if (this.reels[i].completed) continue;
                    if (this.state === 'spinStop' && this.reels[i].completeSymbol) {
                        if (this.reels[i].animation.state === 0) {
                            let dist = (this.ROWS_COUNT + 1) * this.ROWS_OFFSET + this.INERTIA - this[this.reels[i].completeSymbol].position.y;  // inertia effect ;  adjust this.INERTIA
                            this.reels[i].speed = dist * 0.5;
                            if (this.reels[i].speed <= 1)
                                this.reels[i].animation.state = 1;
                        }
                        else if (this.reels[i].animation.state === 1) {
                            let dist = (this.ROWS_COUNT + 1) * this.ROWS_OFFSET - this[this.reels[i].completeSymbol].position.y;
                            this.reels[i].speed = dist * 0.3 - 1;
                        }
                    }

                    this.reels[i].sprite.children.forEach(symbol => {
                        symbol.position.set(null, symbol.position.y + this.reels[i].speed * time);
                    });

                    this.reels[i].spriteHighlight.children.forEach(symbol => {
                        symbol.position.set(null, symbol.position.y + this.reels[i].speed * time);
                    });

                    if (this.state === 'spinStop' && this.reels[i].completeSymbol && this.reels[i].animation.state === 1) {
                        if (this[this.reels[i].completeSymbol].position.y <= (this.ROWS_COUNT + 1) * this.ROWS_OFFSET) {
                            for (let j = 0; j < this.reels[i].sprite.children.length; j++) {
                                let symbol = this.reels[i].sprite.children[j];
                                symbol.position.set(null, j * this.ROWS_OFFSET);

                                if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {
                                    symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;
                                    symbol.parent.addChildAt(symbol, 0);
                                }
                            }

                            for (let j = 0; j < this.reels[i].spriteHighlight.children.length; j++) {
                                let symbol = this.reels[i].spriteHighlight.children[j];
                                symbol.position.set(null, j * this.ROWS_OFFSET);

                                if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {
                                    symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;
                                    symbol.parent.addChildAt(symbol, 0);
                                }
                            }

                            this.reels[i].completed = true;

                            if (this.reels.every(item => item.completed))
                                this.completeSpin();
                        }
                    }
                }
            }

            if (this.winAmountIsIncreasing){
                this.winAmountToDisplay.currentValue += 1;
                if (this.winAmountToDisplay.currentValue >= this.winAmountToDisplay.targetValue){
                    this.winAmountIsIncreasing = false;
                    this.winAmountToDisplay.currentValue = this.winAmountToDisplay.targetValue;
                }
                this['winAmountPanelBelow'].text = "Win : " + this.winAmountToDisplay.currentValue;
            }
        },

        'Gameplay update tick 5': function() {
            if (this.state === 'spin' || this.state === 'spinStop') {
                for (let i = 0; i < this.COLUMNS_COUNT; i++) {
                    if (this.reels[i].completed) continue;
                    this.reels[i].sprite.children.forEach(symbol => {
                        if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {
                            symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;
                            symbol.parent.addChildAt(symbol, 0);
                        }
                    });
                    this.reels[i].spriteHighlight.children.forEach(symbol => {
                        if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {
                            symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;
                            symbol.parent.addChildAt(symbol, 0);
                        }
                    });
                }
            }

            this.updateTimePanel();
        },

        'Gameplay button over': function(container, e) {
            this.handleButtonOver(container, e);
        },

        'Gameplay button out': function(container, e) {
            this.handleButtonOut(container, e);
        },

        'Gameplay button up': function(container, e) {
            this.handleButtonUp(container, e);
        },

        'Gameplay button down': function(container, e) {
            this.handleButtonDown(container, e);
        },

        'Gameplay autobet option button over': function(container, e) {
            // this.handleButtonOver(container, e);
        },

        'Gameplay autobet option button out': function(container, e) {
            // this.handleButtonOut(container, e);
        },

        'Gameplay autobet option button up': function(container, e) {
            this.handleButtonUp(container, e);
        },

        'Gameplay autobet option button down': function(container, e) {
            this.handleButtonDown(container, e);
        },

        'Gameplay error close down': function() {
            this.tween({
                to: ['alpha', 0, 250, 0, Power1.easeIn]
            }, 'overlay', () => {
                this['overlay'].visible = false;
            });

            this.tween({
                to: ['alpha', 0, 250, 0, Power1.easeIn]
            }, 'error container', () => {
                this['error container'].visible = false;
            });

        },

        'Gameplay bonus close down': function() {
            this.tween({
                to: ['alpha', 0, 250, 0, Power1.easeIn]
            }, 'overlay', () => {
                this['overlay'].visible = false;
            });

            this.tween({
                to: ['alpha', 0, 250, 0, Power1.easeIn]
            }, 'bonus container', () => {
                this['bonus container'].visible = false;
            });

        },

        'Gameplay transaction confirmed': function(data) {

            // console.log('spin combination: ', data);

            // this.spinCombination = App.escalibur.mathForCombination(this.bet.amount, [data.reel1, data.reel2, data.reel3, data.reel4, data.reel5]);

        },

        'Gameplay new jackpot': function(data) {

            App.escalibur.Jackpot.value = parseFloat(data.amount);

            this.drawJackpot();

        },

        'Gameplay account name set': function(accountName) {

            // client.streamTableRows({code: "slottyslotty", scope: "slottyslotty", table: "jackpot"}, (message) => {
            // 		if (message.type === dfuseClient.InboundMessageType.TABLE_DELTA) {
            //
            // 			if (message.data.dbop.new.json){
            // 				Broadcast.call("Gameplay new jackpot", [message.data.dbop.new.json]);
            // 			}
            //
            // 		} else if (message.type === dfuseClient.InboundMessageType.TABLE_SNAPSHOT) {
            //
            // 			if (message.data.rows[0].json){
            // 				Broadcast.call("Gameplay new jackpot", [message.data.rows[0].json]);
            // 			}
            //
            // 		}
            // 	},
            // 	{
            // 		fetch: true
            // 	}
            // ).catch((error) => {
            // 	console.log("An error occurred.", error)
            // });


            // const client = dfuseClient.createDfuseClient({ apiKey: "web_d15e7917b5e6759becdc4665bb87bafe", network: "kylin" });
            // client.streamTableRows({code: "eosio.token", scope: accountName, table: "accounts"}, (message) => {
            // 		if (message.type === dfuseClient.InboundMessageType.TABLE_DELTA) {
            //
            // 			if (message.data.dbop.new.json){
            // 				Broadcast.call("Gameplay balance update", [message.data.dbop]);
            // 			}
            //
            // 		}
            // 	}
            // ).catch((error) => {
            // 	console.log("An error occurred.", error)
            // });

        },

        'Gameplay balance update': function(data) {

            if (parseFloat(data.new.json.balance) < parseFloat(data.old.json.balance)) {

                // this['account data'].text = 'Cpu: ' + (this.accountData.cpu * 100).toFixed(2) + '%  ' + 'Net: ' + (this.accountData.net * 100).toFixed(2) + '%  ' + 'Balance: ' + data.new.json.balance + '  ' + this.accountData.name;

            }

        }

    },

    autoplay: function() {

        // this.spin();
        //
        // if (this.spinButtonTween) this.spinButtonTween.stop();
        //
        // this.tween({
        // 	to: ['scale', 0.95, 100, 0, Power1.easeOut],
        // 	next: ['scale', 1, 100, 0, Power1.easeIn]
        // }, 'spin button');

        // this['spin button'].texture = this.spinButtonGreyTexture;

    },

    transferToCTA: function() {

        this.tween(['alpha', 0, 500], ['BackgroundContainer', 'MainContainer']);
        //
        // if (!App.CallToAction.showed) App.CallToAction.show();

    },

    showIntro: function(next) {

        //Show intro animation if needed and call next

        if (next) next.call(this);

    },

    skipIntro: function(next) {

        //Hide intro animation elements if needed and call next

        if (next) next.call(this);

    },

    startGame: function() {

        MRAID.track('Game Starts');

        this.tutorialTimeout(0);

        this.state = 'ready';

        this['grant jackpot'] = {
            value: App.escalibur.Jackpot.value,
            drawed: App.escalibur.Jackpot.value
        };
    },

    spin: function() {
        if (this.allSprites != null && this.allSprites.length > 0) {
            this.allSprites.forEach((sprite) => {
                sprite.alpha = 1;
            });
        }

        this.winAnimationMode = false;
        this.is_bonus = false;
        if (this.winSound !== null) {
            this.playSound('base_sound', {}, {
                volume: this.sound_mode ? 0.5 : 0,
                loop: false
            }, sound => {
                this.winSound = sound;
            });
        }

        this.allbuttondisable();

        if (this.credits.value - this.bet.amount >= 0) {
            this.credits.value -= this.bet.amount;
            this['balancePanel'].text = "Balance : " + Math.round(this.credits.value * 100) / 100;
        }
        else {
            this['autoplay button'].texture = this.getTexture("buttonautoplay");
            this['autoplay button glow'].texture = this.getTexture("buttonautoplayhover");
            this.auto_mode = false;
            this.current_auto_amount = 0;
            return;
        }

        this['statusPanel'].text = "GOOD LUCK!";
        this['statusPanel'].visible = true;
        this['winAmountPanelBelow'].text = "Win : ";

        this.first_reel = false;
        this.second_reel = false;
        this.third_reel = false;

        if (this.winSound) {
            this.winSound.stop();
            this.winSound = false;

            // if (this.mainSound) this.mainSound.volume = this.sound_mode ? 1 : 0;
        }

        if (this.state !== 'ready') return;

        this.state = 'spin';

        this.currentTweens.hide();
        this.currentTweens.hideQuick();

        var self = this;

        this.spinCombination = null;

        if (this.auto_mode === true) {
            if (this.current_auto_amount === 0) {
                this['start button'].texture = this.getTexture("buttonspin");
                this['start button glow'].texture = this.getTexture("buttonspinhover");
                this['start button text'].visible = false;
                return;
            }

            this.current_auto_amount--;
            if (this.current_auto_amount === 0) {
                this['start button'].texture = this.getTexture("buttonspindim");
                this['start button glow'].texture = this.getTexture("buttonspindim");
                this['start button text'].visible = false;
                this.auto_mode = false;
            }

            this.refreshPanelValues();
        }

        $.when((this.is_local_mode ? this.getServerData() : this.getServerCardsInfo(this.bet.step, this.isfreespin))).done(function(response) {
            var serverData = response;
            if (serverData.error === "0") {
                self.credits.value = Math.round(serverData.response.balance * 100) / 100;
                self.server_connection = true;
                self.server_initMatrix = serverData.response.initCards;
                self.spinCombination = null;
                self.spinCombination = App.escalibur.mathFromServer(self.bet.amount, self.server_initMatrix);
                var arrRetval = serverData.response.arrRetVal;
                var newArrRetval = [];
                self.bellcolumnx = [];
                self.win_anim_mode = 0;
                self.server_win_amount.value = serverData.response.winAmount;
                self.nomean_multiplier = _.random(2, 7);

                for (let i = 0; i < arrRetval.length; i++) {
                    if (arrRetval[i].retType === 0) {
                        if (self.isfreespin && self.freespin_count !== self.freespin_index) {
                            self.nomean_multiplier = arrRetval[i].spitfire;
                        }
                        newArrRetval.push(arrRetval[i]);
                    }

                    // if (arrRetval[i].retType === 5) {
                    //     self.win_anim_mode = self.win_anim_mode | self.const.RESULT_TYPE.JACKPOT;
                    //     //jackpot
                    // }
                    //
                    // if (arrRetval[i].retType === 6) {
                    //     //bigmoney
                    //     self.win_anim_mode = self.win_anim_mode | self.const.RESULT_TYPE.BIGMONEY;
                    // }

                    // //In bonus case
                    // if (arrRetval[i].retType === 2) {
                    //     self.isfreespin = true;
                    //     self.auto_mode = false;
                    //     self.freespin_animation = true;
                    //     self.freespin_count = arrRetval[i].count;
                    //     self.freespin_first_animation = true;
                    // }
                }
                if (self.isfreespin && self.freespin_first_animation === false) {
                    if ((self.freespin_count) !== self.freespin_index) {
                        console.log(self.freespin_count - 1);
                        console.log(self.freespin_index);

                        if ((self.freespin_count - 1) === self.freespin_index) {
                            console.log("ended");
                            self.freespin_end = true;
                            self.auto_mode = false;
                        }
                        self.total_freespin_amount += serverData.response.winAmount;
                        //self.animFieldPoints('bonus_win bar', self.total_freespin_amount);
                        self.freespin_index++;
                        self['freegames text'].text = self.freespin_index + " / " + self.freespin_count;

                        //Reel fire animation
                        //self.stopReelfireAnimation("main_fire");
                        //self.startReelSplashAnimation("main_fire");
                        // setTimeout(() => {
                        //     //self.stopReelSplashAnimation("main_fire");
                        //     //self.startReelfireAnimation(self.nomean_multiplier.toString() + 'x_fire');
                        //     //self.startMultiplierAnimation(self.nomean_multiplier.toString() + "x");
                        // }, 500);
                        //Reel fire animation

                    } else {}
                }

                if (self.freespin_first_animation === true)
                    self.freespin_first_animation = false;
                self.server_arrRetVal = newArrRetval;

                if (arrRetval.length !== 0) {
                    if (arrRetval[0].retType === 0) {           // In Case NORMAL
                        self.is_bonus = false;
                        self.spinCombination.winData.winLines = self.generateWinData();
                    }
                    else if (arrRetval[0].retType === 1) {

                    }
                    else if (arrRetval[0].retType === 3) {
                        // // In Case Jackpot
                        // self.is_bonus = true;
                        // self.bonus_amount = parseInt(arrRetval[0].win);
                        // self.server_win_amount.value = parseInt(arrRetval[0].win);
                    }
                }
            }
            else {
                this.server_connection = false;
            }
            // self.sendSignalToSite();
        });

        if (this.timeouts && this.timeouts.length > 0) {
            this.timeouts.forEach((timeout) => {
                clearTimeout(timeout);
            });
        }

        for (let i = 0; i < this.COLUMNS_COUNT; i++) {

            this.timeout(() => {
                for (let j = 0; j < this.REEL_SYMBOLS_COUNT; j++) {
                    var card_index = _.random(0, App.Symbols.length - 1);
                    this.setSymbolTexture(this.reels[i].sprite.children[j].name, App.Symbols[card_index].Image);
                    this.setSymbolsBlur(this.reels[i].sprite.children[j].name, true);
                }

                this.reels[i].completed = false;
                this.reels[i].completeSymbol = null;
                this.reels[i].speed = 60;

                let stopReelInterval = setInterval(() => {
                    if (this.spinCombination) {
                        if (stopReelInterval) clearInterval(stopReelInterval);
                        this.timeout(() => {
                            this.stopReel(i);
                        }, this.REELS_STOP_TIMEOUT + i * this.REELS_STOP_DELAY);
                    }
                }, 60);
            }, this.REELS_START_TIMEOUT + i * this.REELS_START_DELAY);
        }

        if (this.currentSound) {
            this.currentSound.stop();
            this.currentSound = false;
        }

        this.playSound('btn_spin', {}, { volume: this.sound_mode ? 1 : 0, loop: false });
        this.playSound('btn_spin', {}, { volume: this.sound_mode ? 0.5 : 0, loop: false });
        this.playSound('reel', {}, { volume: this.sound_mode ? 0.5 : 0, loop: false }, sound => {
            this.currentSound = sound;
        });
    },

    showError: function(message) {

        this['error container'].visible = true;
        this['overlay'].visible = true;

        if (message) this['error text 2'].text = lineBreak(40, message);

        this.tween({
            set: ['alpha', 0],
            to: ['alpha', 1, 250, 100, Power1.easeOut]
        }, 'error container');

        this.tween({
            set: ['alpha', 0],
            to: ['alpha', 0.6, 250, 100, Power1.easeOut]
        }, 'overlay');

        function lineBreak(length, text) {
            let newString = "";
            for (let i = 0; i < text.length; i++) {
                if ((i !== 0) && (i % length === 0)) {
                    newString = newString + text[i] + '\n';
                } else {
                    newString = newString + text[i];
                }
            }
            return newString;
        }

    },

    showBounupane: function(message) {
        this['bonus container'].visible = true;
        this['overlay'].visible = true;

        if (message) this['bonus text 2'].text = message;

        this.tween({
            set: ['alpha', 0],
            to: ['alpha', 1, 250, 100, Power1.easeOut]
        }, 'bonus container');

        this.tween({
            set: ['alpha', 0],
            to: ['alpha', 0.6, 250, 100, Power1.easeOut]
        }, 'overlay');
    },

    stopReel: function(reel, errorStop) {
        this.reels[reel].completeSymbol = this.reels[reel].sprite.children[0].name;
        this.reels[reel].animation = {
            state: 0
        };

        let reelStopAudio = 'aud_Block_ReelStop_0' + (reel + 1);

        for (let i = 0; i < this.ROWS_COUNT; i++) {
            let highlightSprites = [];
            let activeSprites = [];
            let imageName;

            if (errorStop) {
                imageName = App.Symbols[_.random(0, App.Symbols.length - 1)].Image;
                this.setSymbolTexture(this.reels[reel].sprite.children[i].name, imageName);
            }
            else {
                imageName = this.spinCombination.symbols[i][reel];
                this.setSymbolTexture(this.reels[reel].sprite.children[i].name, App.SymbolsNames[imageName]);

                if (imageName === "Symbol_Wild")
                    reelStopAudio = 'aud_AM_BG_WildHit';

                if (imageName === "Symbol_Wheel_Bonus" && reel !== 0 && reel !== 4) {
                    if (reel === 1) {
                        this.playSound('bonus_one', {}, { volume: this.sound_mode ? 1 : 0, loop: false });
                        this.first_reel = true;
                    } else if (reel === 2 && this.first_reel) {
                        this.playSound('bonus_two', {}, { volume: this.sound_mode ? 1 : 0, loop: false });
                        this.second_reel = true;
                    } else if (reel === 3 && this.first_reel && this.second_reel) {
                        this.third_reel = true;
                        this.playSound('bonus_three', {}, { volume: this.sound_mode ? 1 : 0, loop: false });
                        this.isfreespin = true;
                        this.bonus_highlights.push(this.reels[reel].spriteHighlight.children[i].children[0].params.name.replace('crisp', 'highlight'));
                        this.bonus_active.push(this.reels[reel].sprite.children[i]);
                    } else continue;

                    this.playSound(imageName, {}, { volume: this.sound_mode ? 1 : 0, loop: false });

                    activeSprites.push(this.reels[reel].sprite.children[i]);
                    highlightSprites.push(this.reels[reel].spriteHighlight.children[i].children[0].params.name.replace('crisp', 'highlight'));
                    this.bonus_highlights.push(this.reels[reel].spriteHighlight.children[i].children[0].params.name.replace('crisp', 'highlight'));
                    this.bonus_active.push(this.reels[reel].sprite.children[i]);

                    this.wildBackTween.showTweens.push(this.tween({
                        name: 'win-animation',
                        set: [
                            ['alpha', 0],
                            ['visible', false]
                        ]
                    }, activeSprites));

                    this.wildBackTween.showTweens[this.wildBackTween.showTweens.length - 1].stop();
                    this.wildBackTween.hideTweens.push(this.tween({
                        name: 'win-animation',
                        to: [
                            ['scale', this.SYMBOLS_SCALE],
                            ['alpha', 1, 100, 900]
                        ],
                        next: {
                            set: [
                                ['visible', true],
                                ['alpha', 1]
                            ]
                        }
                    }, activeSprites));

                    this.wildBackTween.hideTweens[this.wildBackTween.hideTweens.length - 1].stop();

                    this.wildBackTween.showTweens.push(this.tween({
                        name: 'win-animation',
                        set: [
                            ['alpha', 1],
                            ['visible', true],
                            ['scale', this.SYMBOLS_SCALE]
                        ]
                    }, highlightSprites));

                    this.wildBackTween.showTweens[this.wildBackTween.showTweens.length - 1].stop();

                    this.wildBackTween.hideTweens.push(this.tween({
                        name: 'win-animation',
                        to: [
                            ['scale', this.SYMBOLS_SCALE],
                            ['alpha', 0, 100, 900]
                        ],
                        next: {
                            set: [
                                ['visible', false],
                                ['alpha', 0]
                            ]
                        }
                    }, highlightSprites));

                    this.wildBackTween.hideTweens[this.wildBackTween.hideTweens.length - 1].stop();
                    this.wildBackTween.show();

                    let temptimeout = setTimeout(() => {
                        this.wildBackTween.hide();
                        this.wildBackTween.showTweens = [];
                        this.wildBackTween.hideTweens = [];
                    }, 900);
                }
            }
        }

        for (let i = 0; i < this.reels[reel].sprite.children.length; i++) {
            let symbol = this.reels[reel].sprite.children[i];
            this.setSymbolsBlur(symbol.name, false);
            symbol.position.set(null, (i + 1) * this.ROWS_OFFSET);
            if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {
                symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;
                symbol.parent.addChildAt(symbol, 0);
            }
        }

        for (let i = 0; i < this.reels[reel].spriteHighlight.children.length; i++) {
            let symbol = this.reels[reel].spriteHighlight.children[i];
            // this.setSymbolsBlur(symbol.name, false);
            symbol.position.set(null, (i + 1) * this.ROWS_OFFSET);
            if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {
                symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;
                symbol.parent.addChildAt(symbol, 0);
            }
        }

        this.playSound(reelStopAudio, {}, { volume: this.sound_mode ? 0.5 : 0, loop: false });
        this.state = 'spinStop';
    },

    completeSpin: function() {

        function callback() {
            this.currentSpin = _.random(0, 2);
            // if (this.currentSpin >= this.SPIN_COUNT) return this.endGame();
            this.state = 'ready';
            // this.spinButtonTween = this.tween({
            // 	to: ['scale', 0.95, 200, 0, Power1.easeInOut],
            // 	next: ['scale', 1, 200, 0, Power1.easeInOut],
            // 	loop: true
            // }, 'start button');

            // this['spin button'].texture = this.getTexture('button.png');
        }

        this['statusPanel'].visible = false;
        setTimeout(() => {this['balancePanel'].text = "Balance : " + Math.round(this.credits.value * 100) / 100;},1000);
        if (this.server_win_amount.value > 0) {
            this['winAmountPanel'].text = this.server_win_amount.value;
            this['WinAmountPanelContainer'].visible = true;
            setTimeout(() => {
                this['WinAmountPanelContainer'].visible = false;
            }, 3000);

            this.winAmountToDisplay.currentValue = 0;
            this.winAmountToDisplay.targetValue = this.server_win_amount.value;
            this.winAmountIsIncreasing = true;
        }

        if ( !this.auto_mode || this.current_auto_amount == 0 )
            this.allbuttonenable();

        this.win_sound_play = false;
        if (this.spinCombination) {
            if (!this.is_bonus) {
                if (this.freespin_animation) {
                    this['start button text'].text = "";
                    this.wildBackTween.showTweens.push(this.tween({
                        name: 'win-animation',
                        set: [
                            ['alpha', 0],
                            ['visible', false]
                        ]
                    }, this.bonus_active));

                    this.wildBackTween.showTweens[this.wildBackTween.showTweens.length - 1].stop();
                    this.wildBackTween.hideTweens.push(this.tween({
                        name: 'win-animation',
                        to: [
                            ['scale', this.SYMBOLS_SCALE],
                            ['alpha', 1, 100, 900]
                        ],
                        next: {
                            set: [
                                ['visible', true],
                                ['alpha', 1]
                            ]
                        }
                    }, this.bonus_active));

                    this.wildBackTween.hideTweens[this.wildBackTween.hideTweens.length - 1].stop();

                    this.wildBackTween.hideQuickTweens.push(this.tween({
                        name: 'win-animation',
                        to: [
                            ['scale', this.SYMBOLS_SCALE - 0.05, 50, 0, Back.easeIn.config(2)],
                            ['alpha', 0, 50, 0]
                        ],
                        next: {
                            set: [
                                ['visible', true],
                                ['alpha', 1]
                            ]
                        }
                    }, this.bonus_active));

                    this.wildBackTween.hideQuickTweens[this.wildBackTween.hideQuickTweens.length - 1].stop();

                    this.wildBackTween.showTweens.push(this.tween({
                        name: 'win-animation',
                        set: [
                            ['alpha', 1],
                            ['visible', true],
                            ['scale', this.SYMBOLS_SCALE]
                        ]
                    }, this.bonus_highlights));

                    this.wildBackTween.showTweens[this.wildBackTween.showTweens.length - 1].stop();

                    this.wildBackTween.hideTweens.push(this.tween({
                        name: 'win-animation',
                        to: [
                            ['scale', this.SYMBOLS_SCALE],
                            ['alpha', 0, 100, 900]
                        ],
                        next: {
                            set: [
                                ['visible', false],
                                ['alpha', 0]
                            ]
                        }
                    }, this.bonus_highlights));

                    this.wildBackTween.hideTweens[this.wildBackTween.hideTweens.length - 1].stop();

                    this.wildBackTween.hideQuickTweens.push(this.tween({
                        name: 'win-animation',
                        to: [
                            ['scale', this.SYMBOLS_SCALE - 0.05, 50, 0, Back.easeIn.config(2)],
                            ['alpha', 0, 50, 0]
                        ],
                        next: {
                            set: [
                                ['visible', false],
                                ['alpha', 0]
                            ]
                        }
                    }, this.bonus_highlights));

                    this.wildBackTween.hideQuickTweens[this.wildBackTween.hideQuickTweens.length - 1].stop();

                    this.wildBackTween.show();

                    setTimeout(() => {
                        this.wildBackTween.hide();
                        this.wildBackTween.showTweens = [];
                        this.wildBackTween.hideTweens = [];
                        this['popups header text'].text = "CONGRATULATIONS \n YOU WON";
                        this['popups body text'].text = "7 \n FREE GAMES";
                        this['popups alert container'].visible = true;
                        this.freezeControlPanel();
                        setTimeout(() => {
                            this.unfreezeControlPanel();
                            this['popups header text'].text = "PRESS BUTTON \n TO START";
                            this['popups body text'].text = "FREE GAMES!";
                        }, 5000);
                    }, 900);
                    this.freespin_animation = false;
                }
                if (this.spinCombination.winData.winLines.length > 0) {
                    this.spinCombinations.push(this.spinCombination);
                    this.winSpinCombination = this.spinCombination;
                    this.state = 'ready';
                    this.win_sound_play = true;
                    this.winAnimationMode = true;

                    // if (this.win_anim_mode && this.const.RESULT_TYPE.BIGMONEY) {
                    //     // this.startBigMoneyAnimation();
                    // }
                    // if (this.win_anim_mode && this.const.RESULT_TYPE.JACKPOT) {
                    //     // this.startJackpotAnimation();
                    // }

                    this.winAnimationWhole = true;
                    this.winAnimation();

                    // this.credits.value += this.server_win_amount.value;  // already added
                    this.credits.drawed = this.credits.value;

                    this.server_win_amount.drawed = this.server_win_amount.value;
                    this.refreshPanelValues();

                    let sound_level = 10;
                    if (this.server_win_amount.value > 10000)
                        sound_level = 2;
                    else if (this.server_win_amount.value > 5000)
                        sound_level = 1;
                    else if (this.server_win_amount.value > 1000)
                        sound_level = 0;
                    else if (this.server_win_amount.value > 500)
                        sound_level = 11;
                    this.playSound('rollup' + sound_level.toString(), {}, {
                        volume: this.sound_mode ? 1 : 0,
                        loop: false
                    }, sound => {
                        this.roll_sound = sound;
                    });
                }
                else {
                    this.spinCombinations.push(0);
                    // this.animFieldPoints('win', 0);
                    this.winAnimationMode = false;
                    this.state = 'ready';
                    this.credits.drawed = this.credits.value;
                    this.server_win_amount.drawed = this.server_win_amount.value;
                    this.refreshPanelValues();
                    // this.drawJackpot();
                    if (this.freespin_end && this.isfreespin) {
                        setTimeout(() => {
                            this['bonus_win title'].text = this.total_freespin_amount;
                            this['BonusWinContainer'].visible = true;
                            this.freespin_count = 0;
                            this.freespin_index = 0;
                            this.total_freespin_amount = 0;
                            this.isfreespin = false;
                            this.freespin_end = false;
                            setTimeout(() => {
                                this['BonusWinContainer'].visible = false;
                                this.completeFreespin();
                            }, 3000);
                        }, 3000);
                    }

                    if (!this.auto_mode) {
                        this.allbuttonenable();
                    }
                    setTimeout(() => {
                        if (this.state === 'ready' && this.auto_mode) {
                            this.spin();
                        }
                    }, 1000);
                }
            }
            // else {
            //     this.credits.value += parseInt(this.bonus_amount);
            //     this.credits.drawed += parseInt(this.bonus_amount);
            //     this.refreshPanelValues();
            //
            //     this.showBounupane("+" + this.bonus_amount);
            //     this.playSound('bonus.mp3', {}, { volume: this.sound_mode ? 1 : 0, loop: false });
            //
            //     setTimeout(() => {
            //         this.bonusclose();
            //         this.state = 'ready';
            //     }, 3000);
            // }
        }
        else {
            this.state = 'ready';
        }

        if (this.currentSound) {
            this.currentSound.stop();
            this.currentSound = false;
        }
    },

    drawJackpot: function() {

    },

    setSymbolTexture: function(container, image) {
        let name = container.replace('container ', '');
        this[name + ' crisp'].texture = this.getTexture(image);
        this[name + ' blur'].texture = this.getTexture(image);

        let frames = [];

        for (let k = App.SymbolsHighlight[image].frameStart; k <= App.SymbolsHighlight[image].frameEnd; k++)
            if (image == "wheelbonus_symbol" || image == "glasses_symbol" || image == "hat_symbol" || image == "van_symbol" || image == "scotch_symbol" || image == "wild_symbol")
                frames.push(`${image}`);
            else frames.push(`${image} (${k})`);

        this[name + ' highlight'].removeChildren();
        this.buildChild(this[name + ' highlight'], {
            name: name + ' highlight animation',
            type: 'movie-clip',
            frames: frames,
            speed: 0.2,
            loop: true
        });
    },

    setSymbolsBlur: function(container, state) {
        let name = container.replace('container ', '');

        this[name + ' crisp'].visible = false;
        this[name + ' blur'].visible = false;

        if (state) this[name + ' blur'].visible = true;
        else this[name + ' crisp'].visible = true;
    },

    tweensBySprites: function(activeSprites, highlightSprites, callback) {

        if (this.state !== 'ready' || this.winAnimationMode == false) {
            callback = null;
            return;
        }

        this.currentTweens.showTweens = [];
        this.currentTweens.hideTweens = [];
        this.currentTweens.hideQuickTweens = [];
        if (this.state === 'ready') {
            this.currentTweens.showTweens.push(this.tween({
                name: 'win-animation',
                set: [
                    ['alpha', 0.5],
                    ['visible', true]
                ]
            }, this.allSprites));
            this.currentTweens.showTweens[this.currentTweens.showTweens.length - 1].stop();
            this.currentTweens.showTweens.push(this.tween({
                name: 'win-animation',
                set: [
                    ['alpha', 0],
                    ['visible', false]
                ]
            }, activeSprites));

            this.currentTweens.showTweens[this.currentTweens.showTweens.length - 1].stop();
            this.currentTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['scale', this.SYMBOLS_SCALE],
                    ['alpha', 1, 100, 1000]
                ],
                next: {
                    set: [
                        ['visible', true],
                        ['alpha', 1]
                    ]
                }
            }, activeSprites));

            this.currentTweens.hideTweens[this.currentTweens.hideTweens.length - 1].stop();

            this.currentTweens.hideQuickTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['scale', this.SYMBOLS_SCALE, 50, 0],
                    ['alpha', 1, 50, 0]
                ],
                next: {
                    set: [
                        ['visible', true],
                        ['alpha', 1]
                    ]
                }
            }, activeSprites));

            this.currentTweens.hideQuickTweens[this.currentTweens.hideQuickTweens.length - 1].stop();
        }

        //init highlight sprite tweens
        if (this.state === 'ready') {
            this.currentTweens.showTweens.push(this.tween({
                name: 'win-animation',
                set: [
                    ['visible', true],
                    ['alpha', 1]
                ],
                to: [
                    ['scale', 1.2, 900]
                ],
                next: {
                    to: [
                        ['scale', 1 / 1.2, 1000]
                    ]
                }
            }, highlightSprites));
            this.currentTweens.showTweens[this.currentTweens.showTweens.length - 1].stop();

            this.currentTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['scale', this.SYMBOLS_SCALE],
                    ['alpha', 0, 100, 1000]
                ],
                next: {
                    set: [
                        ['visible', false],
                        ['alpha', 0]
                    ]
                }
            }, highlightSprites));

            this.currentTweens.hideTweens[this.currentTweens.hideTweens.length - 1].stop();

            this.currentTweens.hideQuickTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['scale', this.SYMBOLS_SCALE, 50, 0],
                    ['alpha', 0, 50, 0]
                ],
                next: {
                    set: [
                        ['visible', false],
                        ['alpha', 0]
                    ]
                }
            }, highlightSprites));

            this.currentTweens.hideQuickTweens[this.currentTweens.hideQuickTweens.length - 1].stop();
        }

        if (this.state === 'ready'){
            this.currentTweens.show();
        }

        let tempTimeout = null;
        if (this.state === 'ready') tempTimeout = setTimeout(() => {

            if (this.state !== 'ready') {
                if (tempTimeout) clearTimeout(tempTimeout);
                return;
            }

            if (this.state === 'ready') {
                this.currentTweens.hide();
            }

            if (callback && (this.state === 'ready')) {

                let tempTimeout2 = null;
                let tempTimeout3 = null;

                if (this.state === 'ready') tempTimeout2 = setTimeout(() => {

                    if (this.state !== 'ready') {
                        if (tempTimeout2) clearTimeout(tempTimeout2);
                        return;
                    }

                    if (this.state === 'ready') {
                        this.currentTweens.hide();
                        // callback.call(this);
                    }
                }, 300);
                if (this.state === 'ready') tempTimeout3 = setTimeout(() => {
                    if (this.state !== 'ready') {
                        if (tempTimeout2) clearTimeout(tempTimeout2);
                        return;
                    }
                    callback.call(this);
                }, 1500);
            }
        }, 1200);
    },

    animateLine: function(line, callback) {
        if (this.state !== 'ready' || this.winAnimationMode === false) {
            callback = null;
            return;
        }

        let highlightSprites = [], activeSprites = [];
        this.allSprites = [];
        let linesNum = line[4], cardCount = line[3];

        for (let i = 0; i < cardCount; i++) {          //for (let i = 0; i < this.COLUMNS_COUNT; i++) {
            if (this.state !== 'ready' || this.winAnimationMode === false)
                break;

            for (let j = 0; j < this.ROWS_COUNT; j++) {
                if (this.state !== 'ready' || this.winAnimationMode === false)
                    break;

                if (line[0][j][i] !== 0) {
                    activeSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);
                    highlightSprites.push(this.reels[i].spriteHighlight.children[this.ROWS_COUNT + 1 + j].children[0].params.name.replace('crisp', 'highlight'));
                }
            }
        }
        for (i = 0; i < this.COLUMNS_COUNT; i ++)
            for(let j = 0; j < this.ROWS_COUNT; j ++)
                this.allSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);

        if (this.state !== 'ready' || this.winAnimationMode === false)
            return;

        this.tweensBySprites(activeSprites, highlightSprites, callback);
    },

    animateEachLine: function(winLines, callback) {
        if (this.state !== 'ready' || this.winAnimationMode === false) {
            callback = null;
            return;
        }

        this.timeouts = [];

        for (let i = 0; i < winLines.length; i++) {
            let lineData = winLines[i];
            let lineNum = i;

            if (this.state !== 'ready' || this.winAnimationMode === false) {
                callback = null;
                return;
            }

            let tempTimeout = null;
            if (this.state === 'ready') tempTimeout = setTimeout(() => {
                if (this.state !== 'ready' || this.winAnimationMode === false) {
                    if (tempTimeout) clearTimeout(tempTimeout);
                    callback = null;
                    return;
                }

                if (this.state === 'ready' && this.spinCombination) {
                    this.animateLine(lineData, () => {
                        if (this.spinCombination) {
                            if (this.spinCombination.winData.winLines.length - 1 === lineNum) { // if last
                                if (this.state !== 'ready' || this.winAnimationMode === false) {
                                    callback = null;
                                    return;
                                }
                                if ((callback) && (this.state === 'ready')) callback.call(this);
                            }
                        }
                    });
                    this['statusPanel'].text = `Line ${lineData[4]} - ${lineData[5]}`;
                    this['statusPanel'].visible = true;
                }
                //if (this.state === 'ready') //this.playSound('symb'+lineData[4]+'.mp3', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
            }, lineNum * 2500);

            this.timeouts.push(tempTimeout);
        }
    },

    winAnimation: function() {
        if (this.spinCombination.winData.winLines.length > 0) {
            if (this.state !== 'ready' || this.winAnimationMode === false) {
                this.refreshPanelValues();
                return;
            }

            let delayForEachLineAnimation = 0;
            // animate whole
            if (this.winAnimationWhole)
            {
                this.winAnimationWhole = false;

                this['statusPanel'].text = "";
                this['statusPanel'].visible = false;

                let highlightSprites = [], activeSprites = [];
                this.allSprites = [];

                for (let k = 0; k < this.spinCombination.winData.winLines.length; k++) {
                    let lineData = this.spinCombination.winData.winLines[k];
                    let cardCount = lineData[3], payline = lineData[0];

                    for (let i = 0; i < cardCount; i++) {
                        for (let j = 0; j < this.ROWS_COUNT; j++) {
                            if (payline[j][i] !== 0 && !activeSprites.includes(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j])) {
                                activeSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);
                                highlightSprites.push(this.reels[i].spriteHighlight.children[this.ROWS_COUNT + 1 + j].children[0].params.name.replace('crisp', 'highlight'));
                            }
                        }
                    }
                }

                for (i = 0; i < this.COLUMNS_COUNT; i ++) {
                    for (let j = 0; j < this.ROWS_COUNT; j++)
                        this.allSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);
                }

                this.tweensBySprites(activeSprites, highlightSprites);
                delayForEachLineAnimation = 2500;
                this.playSound('aud_AM_BG_CreditSync_Online', {}, { volume: this.sound_mode ? 0.5 : 0, loop: false, end: (this.auto_mode ? 1 : 3) });
            }

            setTimeout(() => {
                if (!this.auto_mode) {
                    this.animateEachLine(this.spinCombination.winData.winLines, () => {
                        if (this.state !== 'ready') return;
                        let tempTimeout = null;
                        if (this.state === 'ready') tempTimeout = setTimeout(() => {
                            if (this.state !== 'ready' || this.winAnimationMode === false) {
                                if (tempTimeout) clearTimeout(tempTimeout);
                                return;
                            }

                            this.state = 'ready';
                            // this.winAnimationMode = false;
                            if (this.state === 'ready') this.winAnimation();
                        }, 200);
                    });
                }
                else {
                    this.spin();    // repeat
                    // if (this.spinButtonTween) this.spinButtonTween.stop();
                }
            }, delayForEachLineAnimation);
        }
        else {
            if (this.creditsNotInc) {
                this.credits.value += this.server_win_amount;
                this.credits.drawed = this.credits.value;
            }

            this.refreshPanelValues();
        }
    },

    animFieldPoints: function(fieldName, points, bAnim = false, speed = 0) {
        if (bAnim === false) {
            if (this[fieldName + ' text'].text === points.toString()) return;
            this[fieldName + ' text'].text = points.toString();
        } else if (this[fieldName].text !== points.toString()) {
            let duration = 1000;
            if (points > 10000)
                duration = 9000;
            else if (points > 5000)
                duration = 6000;
            else if (points > 1000)
                duration = 4000;
            else if (points > 500)
                duration = 2000;

            this.tween({
                set: ['drawed', this[fieldName].drawed],
                to: ['drawed', points, duration, 100, Expo.easeOut],
                update: () => {
                    this[fieldName + ' text'].text = Math.trunc(this[fieldName].drawed).toString();
                    this.roll_sound_play = false;
                }
            }, fieldName);
        }
    },

    tutorialTimeout: function(timeout) {
        if (this.state !== 'intro') {
            clearTimeout(this.TutorialTimeout);
            this.TutorialTimeout = setTimeout(function() {
                if (Settings["tutorial"] && !App.Tutorial.showed && !App.CallToAction.showed) App.Tutorial.show();
            }, typeof timeout === "number" ? timeout : Settings["tutorial-timeout"]);
        }
    },

    hideTutorial: function() {
        clearTimeout(this.TutorialTimeout);
        if (App.Tutorial.showed) App.Tutorial.hide();
    },

    handleButtonOut: function(container, e) {
        if (this.freeze_status)
            return;
        let nameGlow = container.name + ' glow';

        if (this[nameGlow].tween) this[nameGlow].tween.stop();

        this[nameGlow].tween = this.tween({
            to: ['alpha', 0, 150, 0, Power1.easeOut]
        }, nameGlow);
    },

    handleButtonOver: function(container, e) {
        if (this.freeze_status || this.state != 'ready')
            return;
        // if (this.cur_mouse_capture_container_name != "") {
        let nameGlow1 = container.name + ' glow';
        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
        this[nameGlow1].tween = this.tween({
            to: ['alpha', 1, 150, 0, Power1.easeOut]
        }, nameGlow1);
        // }
    },

    handleButtonUp: function(container, e) {
        if (this.freeze_status || this.auto_mode || this.state == 'spin' || this.state == 'spinStop')
            if (container.name != 'start button') return;

        this.cur_mouse_capture_container_name = "";
        let nameGlow = container.name + ' glow';

        if (this[nameGlow].tween) this[nameGlow].tween.stop();

        this[nameGlow].tween = this.tween({
            to: ['alpha', 0, 150, 0, Power1.easeOut]
        }, nameGlow);

        let name = container.name;

        this.playSound('aud_Click', {}, { volume: this.sound_mode ? 0.5 : 0, loop: false });

        switch (name) {
            case 'start button':
                if (!this.isfreespin)
                    this.buttonHandleStartButton(container, false);
                else
                    this.buttonHandleFreeStartButton(container);
                break;
            case 'increase button':
                if(this.bet.step < this.arrBetValue.length - 1)
                    this.bet.step ++;
                this.bet.amount = this.arrBetValue[this.bet.step] * this.arrLinesValue;
                this['totalbet text'].text = this.arrBetValue[this.bet.step];
                this['totalBetPanel'].text = `Total Bet : ${this.bet.amount}`;

                if(this.bet.step > 0){
                    this['decrease button'].texture = this.getTexture("buttondecrease");
                    this['decrease button glow'].texture = this.getTexture("buttondecrease");
                }
                else {
                    this['decrease button'].texture = this.getTexture("buttondecreasedim");
                    this['decrease button glow'].texture = this.getTexture("buttondecreasedim");
                }
                if(this.bet.step < this.arrBetValue.length - 1) {
                    this['increase button'].texture = this.getTexture("buttonincrease");
                    this['increase button glow'].texture = this.getTexture("buttonincrease");
                }
                else {
                    this['increase button'].texture = this.getTexture("buttonincreasedim");
                    this['increase button glow'].texture = this.getTexture("buttonincreasedim");
                }
                break;
            case 'decrease button':
                if(this.bet.step > 0)
                    this.bet.step --;
                this.bet.amount = this.arrBetValue[this.bet.step] * this.arrLinesValue;
                this['totalbet text'].text = this.arrBetValue[this.bet.step];
                this['totalBetPanel'].text = `Total Bet : ${this.bet.amount}`;

                if(this.bet.step > 0){
                    this['decrease button'].texture = this.getTexture("buttondecrease");
                    this['decrease button glow'].texture = this.getTexture("buttondecrease");
                }
                else {
                    this['decrease button'].texture = this.getTexture("buttondecreasedim");
                    this['decrease button glow'].texture = this.getTexture("buttondecreasedim");
                }
                if(this.bet.step < this.arrBetValue.length - 1) {
                    this['increase button'].texture = this.getTexture("buttonincrease");
                    this['increase button glow'].texture = this.getTexture("buttonincrease");
                }
                else {
                    this['increase button'].texture = this.getTexture("buttonincreasedim");
                    this['increase button glow'].texture = this.getTexture("buttonincreasedim");
                }
                break;
            case 'help button':
                this.helpPageIndex = 1;
                this.showHelpPage();
                break;
            case 'nexthelp button':
                this.helpPageIndex = this.helpPageIndex % this.HELP_PAGE_CNT + 1;
                this.showHelpPage();
                break;
            case 'prevhelp button':
                this.helpPageIndex --;
                if (this.helpPageIndex == 0) this.helpPageIndex = this.HELP_PAGE_CNT;
                this.showHelpPage();
                break;
            case 'autoplay button':
                this.showAutoPlaySettingDialog();
                break;
            case 'autospin_dialog close button':
                this.buttonHandlerCloseDialog(container);
                break;
            case 'refresh start button':
                this.buttonHandleStartButton(container, true);
                break;
            case 'externalhelp button':
                window.open("https://d1gpiy04es6c1f.cloudfront.net/4.57.0.0-1568717648/resource-service/content/anchorman/resources/help/anchorman_rules_en_us.html",
                            'Anchorman',
                            'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=700, height=400');
                break;
            case 'speaker button':
                this.buttonHandlerSound(container, name);
                break;

            case 'lines bar down':
                this.buttonHandleLinesBarUpDown(false, container, name);
                break;
            case 'lines bar up':
                this.buttonHandleLinesBarUpDown(true, container, name);
                break;
            case 'betperline bar down':
                this.buttonHandleBetPerLineUpDown(false, container, name);
                break;
            case 'betperline bar up':
                this.buttonHandleBetPerLineUpDown(true, container, name);
                break;
            case 'stop button':
                this.buttonHandleStartButton(container, true);
                break;
            case 'info next button':
                this.buttonHandlerNext(container);
                break;
            case 'info prev button':
                this.buttonHandlerPrev(container);
                break;
            case 'info close button':
                this.returnToOrginalFromHelp();
                break;
            case 'paytable button':
                this.buttonHandlerPaytable(container);
                break;
            case 'audio_set button':
                this.buttonHandlerAudioSet(container);
                break;
            case 'game_rules button':
                this.buttonHandlerGamerules(container);
                break;
            case 'close button':
                this.buttonHandlerClose(container);
                break;

            default:
                if (name.indexOf('button automenu') === 0) {
                    this.buttonHandleAutoItem(container, name);
                }
                break;
        }
    },

    handleButtonDown: function(container, e) {
        if (this.freeze_status || this.auto_mode || this.state == 'spin' || this.state == 'spinStop')
            if (container.name != 'start button') return;

        let nameGlow1 = container.name + ' glow';
        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
        this[nameGlow1].tween = this.tween({
            to: ['alpha', 1, 150, 0, Power1.easeOut]
        }, nameGlow1);

        this.cur_mouse_capture_container_name = container.name;

        switch (this.cur_mouse_capture_container_name) {
            case 'helpclose button':
                this.hideHelpPage();
                break;
        }
    },

    showAutoPlaySettingDialog: function() {
        this.refreshAutoItemBack('');
        this.allbuttonenable();
        if (this.auto_mode === true) {
            this['autoplay button'].texture = this.getTexture("buttonautoplay");
            this['autoplay button glow'].texture = this.getTexture("buttonautoplayhover");
            this.auto_mode = false;
            this.current_auto_amount = 0;
            return;
        }
        if (this.state !== 'ready') return;
        if (this.auto_mode === false) {
            this.winAnimationMode = false;

            if (this.automenu_mode !== true) {
                this.playSound('btn_auto_open', {}, { volume: this.sound_mode ? 1 : 0, loop: false });
                this.automenu_mode = true;
            }
            else this.automenu_mode = false;

            this['AutoMenuContainer'].visible = this.automenu_mode;
        }
    },

    buttonHandleAutoItem: function(container, name) {
        if (this.state !== 'ready') return;

        this.winAnimationMode = false;
        this.current_auto_amount = container.step;
        this.total_auto_amount = this.current_auto_amount;
        //this.refreshPanelValues();
        let number = name.split('_')[1];
        let nameGlow1 = container.name + ' selected';
        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
        this[nameGlow1].tween = this.tween({
            to: ['alpha', 1, 150, 0, Power1.easeOut]
        }, nameGlow1);
        this.refreshAutoItemBack(number)
    },

    buttonHandlerSound: function (container, name) {

        if (this.state !== 'ready') return;

        if (this.sound_mode) {

            this.sound_mode = false;

            if (this.currentSound) this.currentSound.volume = 0;
            if (this.backgroundSound) this.backgroundSound.volume = 0;

            this[name].texture = this.getTexture('unmute');
            this[name + ' hover'].texture = this.getTexture('unmutedown');
            this[name + ' glow'].texture = this.getTexture('unmutedown');
            this[name + ' disable'].texture = this.getTexture('unmutedown');

        } else {

            this.sound_mode = true;

            this.playSound('audio-on', {}, {volume: this.sound_mode ? 1 : 0, loop: false});

            if (this.currentSound) this.currentSound.volume = 0.5;
            if (this.backgroundSound) this.backgroundSound.volume = 0.5;

            this[name].texture = this.getTexture('mute');
            this[name + ' hover'].texture = this.getTexture('mutedown');
            this[name + ' glow'].texture = this.getTexture('mutedown');
            this[name + ' disable'].texture = this.getTexture('mutedown');
        }

    },

    refreshAutoItemBack: function(number) {
        let items = ["10", "50", "100", "200"];
        var exist = false;
        for (let i = 0; i < items.length; i++) {
            if (number !== items[i]) {
                let tweenname = "button automenu_" + items[i] + " selected";
                this.tween({
                    to: ['alpha', 0, 150, 0, Power1.easeOut]
                }, tweenname);
            }
            else exist = true;
        }

        this['refresh start button disabled'].alpha = (exist ? 0 : 1);
    },

    showHelpPage: function() {
        this.helpPageVisabilityFlag = true;
        this['HelpPanelContainer'].visible = true;
        this['MainContainer'].visible = this['ControlPanelContainer'].visible = false;

        for (let i = 1; i <= this.HELP_PAGE_CNT; i ++) {
            this['helpPageContainer' + i].visible = (i == this.helpPageIndex ? true : false);
            this['helpPageDash' + i].texture = this.getTexture(i <= this.helpPageIndex ? 'navbardash' : 'navbardashoff');
        }
        for (var nSection = 1, nDashes = 0; ; nSection ++) {
            nDashes += this.helpPageSections[nSection - 1];
            this['helpSection' + nSection].texture = this.getTexture('navbarpip');
            if (nDashes >= this.helpPageIndex) break;
        }
        for (nSection ++; nSection <= this.helpPageSections.length; nSection ++)
            this['helpSection' + nSection].texture = this.getTexture('navbarpipoff');
    },

    hideHelpPage: function() {
        this.helpPageVisabilityFlag = false;
        this['HelpPanelContainer'].visible = false;
        this['MainContainer'].visible = this['ControlPanelContainer'].visible = true;
    },

    buttonHandleLinesBarUpDown: function(bUp, container, name) {
        if (this.state !== 'ready' || this.auto_mode) return;
        this.winAnimationMode = false;
        var cur_step = this.lines.step;
        if (bUp === true) {
            if (cur_step >= 4) {
                this[container.name].texture = this.getTexture("plus_btn_2_disabled")
                return;
            }
            if (cur_step < 5) {
                this['lines bar down'].texture = this.getTexture("minus_btn_2_enabled")
                this[container.name].texture = this.getTexture("plus_btn_2_enabled")
                cur_step++;
            }
            this.playSound('btn_plus', {}, { volume: this.sound_mode ? 1 : 0, loop: false });
        } else {
            if (cur_step <= 1) {
                this[container.name].texture = this.getTexture("minus_btn_2_disabled")
                return;
            }
            if (cur_step > 1) {
                this['lines bar up'].texture = this.getTexture("plus_btn_2_enabled")
                this[container.name].texture = this.getTexture("minus_btn_2_enabled")
                cur_step--;
            }
            this.playSound('btn_minus', {}, { volume: this.sound_mode ? 1 : 0, loop: false });
        }

        if (this.setBetAmountValues(cur_step, this.betperlines.step) == false)
            cur_step = this.lines.step;

    },

    buttonHandleBetPerLineUpDown: function(bUp, container, name) {
        if (this.state !== 'ready' || this.auto_mode) return;

        this.winAnimationMode = false;

        var cur_step = this.betperlines.step;
        if (bUp === true) {
            if (cur_step === 7) {
                this[container.name].texture = this.getTexture("plus_btn_2_disabled")
                return;
            }
            if (cur_step < 7) {
                this['betperline bar down'].texture = this.getTexture("minus_btn_2_enabled")
                this[container.name].texture = this.getTexture("plus_btn_2_enabled")
                cur_step++;
            }
            this.playSound('btn_plus', {}, { volume: this.sound_mode ? 1 : 0, loop: false });
        } else {
            if (cur_step === 1) {
                this[container.name].texture = this.getTexture("minus_btn_2_disabled")
                return;
            }
            if (cur_step > 1) {
                this['betperline bar up'].texture = this.getTexture("plus_btn_2_enabled")
                this[container.name].texture = this.getTexture("minus_btn_2_enabled")
                cur_step--;
            }
            this.playSound('btn_minus', {}, { volume: this.sound_mode ? 1 : 0, loop: false });
        }

        if (this.setBetAmountValues(this.lines.step, cur_step) == false)
            cur_step = this.betperlines.step;
    },

    buttonHandleStartButton: function(container, isAuto = false) {

        if (this.auto_mode){
            this.auto_mode = false;
            this.current_auto_amount = 0;
            this['start button'].texture = this.getTexture("buttonspin");
            this['start button glow'].texture = this.getTexture("buttonspinhover");
            this['start button text'].visible = false;
        }

        if (isAuto) {
            if (this['refresh start button disabled'].alpha == 1) return;

            if (this.state === 'ready') {
                if (this.auto_mode === false) {
                    this.auto_mode = true;
                    this['start button'].texture = this.getTexture("buttonstop");
                    this['start button glow'].texture = this.getTexture("buttonstophover");
                    this['start button text'].visible = true;
                    this['start button text'].text = this.current_auto_amount;
                    this.spin();
                    //if (this.spinButtonTween) this.spinButtonTween.stop();
                }
                else {
                    this.auto_mode = false;
                    this.current_auto_amount = 0;
                    this['start button'].texture = this.getTexture("buttonspin");
                    this['start button glow'].texture = this.getTexture("buttonspinhover");
                    this['start button text'].visible = false;
                }
            }
            else {
                this['start button'].texture = this.getTexture("buttonspin");
                this['start button'].texture = this.getTexture("buttonspinhover");
                this['start button text'].visible = false;
                this.auto_mode = false;
                this.current_auto_amount = 0;
            }
            this.automenu_mode = false;
            this['AutoMenuContainer'].visible = this.automenu_mode;
        }
        else {
            if (this.credits.value < this.bet.amount)
                return;
            MRAID.markMeaningfulInteraction();
            if (this.state !== 'ready') return;
            this.spin();
            //if (this.spinButtonTween) this.spinButtonTween.stop();
        }

        this.refreshPanelValues();
    },

    buttonHandleFreeStartButton: function(container) {
        this.state = 'ready';
        this['popups alert container'].visible = false;
        this['ControlPanelContainer'].visible = false;
        this['FreeControlPanelContainer'].visible = true;
        this['background container wrapper'].visible = false;

        this.currentTweens.hide();
        this.currentTweens.hideQuick();
        this.wildBackTween.hide();
        this.wildBackTween.hideQuick();

        this.back_interval = setInterval(() => {
            this['free_background'].play();
        }, 280);

        setTimeout(() => {
            this.auto_mode = true;
            this.current_auto_amount = this.freespin_count;
            this.spin();
        }, 2000);
    },

    completeFreespin: function() {
        this['ControlPanelContainer'].visible = true;
        this['FreeControlPanelContainer'].visible = false;
        this['background container wrapper'].visible = true;
        this['start button'].texture = this.getTexture("buttonspin");
        this['start button glow'].texture = this.getTexture("buttonspinhover");
        clearInterval(this.back_interval);
    },

    buttonHandlerCloseDialog: function(container) {
        MRAID.markMeaningfulInteraction();
        this.playSound('btn_auto_close', {}, { volume: this.sound_mode ? 1 : 0, loop: false });
        this.automenu_mode = false;
        this['AutoMenuContainer'].visible = this.automenu_mode;
        this.refreshAutoItemBack('');
    },

    buttonHandlerNext: function(container) {
        this.playSound('button', {}, { volume: this.sound_mode ? 0.5 : 0, loop: false });

        if (this.helpPageIndex === 9) {

            this.helpPageIndex = 1;

            this.hideHelpPage(9);
            this.showHelpPage(this.helpPageIndex);

        } else {

            this.hideHelpPage(this.helpPageIndex);

            this.helpPageIndex++;

            this.showHelpPage(this.helpPageIndex);

        }

        this['info current page text'].text = this.helpPageIndex + ' / 9';
    },

    buttonHandlerPrev: function(container) {
        this.playSound('button', {}, { volume: this.sound_mode ? 0.5 : 0, loop: false });

        if (this.helpPageIndex === 1) {

            this.helpPageIndex = 9;

            this.hideHelpPage(1);
            this.showHelpPage(this.helpPageIndex);

        } else {

            this.hideHelpPage(this.helpPageIndex);

            this.helpPageIndex--;

            this.showHelpPage(this.helpPageIndex);

        }

        this['info current page text'].text = this.helpPageIndex + ' / 9';
    },

    buttonHandlerAudioSet: function(container) {
        this.sound_mode = !(this.sound_mode);
        if (this.sound_mode)
            this['audio_set button text'].text = "Audio On";
        else
            this['audio_set button text'].text = "Audio Off";
    },

    buttonHandlerGamerules: function(container) {
        document.getElementById("game_rule").style.zIndex = 999;
        document.getElementById("game_rule").style.display = "block";
    },

    buttonHandlerClose: function(container) {
        if (this.state !== 'ready') return;
        this.closeGame();
    },

    buttonHandlerPaytable: function(container) {
        this['MainContainer'].visible = false;
        this['ControlPanelContainer'].visible = false;
        this['LogoContainer'].visible = false;
        this['InfoContainer'].visible = true;
    },

    returnToOrginalFromHelp: function() {
        this['MainContainer'].visible = true;
        this['ControlPanelContainer'].visible = true;
        this['LogoContainer'].visible = true;
        this['InfoContainer'].visible = false;
    },

    setBetAmountValues: function(line_step, betperline_step) {

        let line_value = this.line_value_list[line_step - 1];
        let betperline_value = this.betperline_value_list[betperline_step - 1];

        let betAmount = line_value * betperline_value;

        if (this.credits.value < betAmount)
            return false;

        this.lines.value = line_value;
        this.lines.step = line_step;

        this.betperlines.value = betperline_value;
        this.betperlines.step = betperline_step;

        this.bet.amount = betAmount;

        this.refreshPanelValues();
    },

    updateTimePanel: function(){
        var date = new Date;
        var h = date.getHours();
        var m = date.getMinutes();
        h = (h < 10 ? "0": "") + h;
        m = (m < 10 ? "0": "") + m;

        this['timePanel'].text = `${h}:${m}`;
    },

    refreshPanelValues: function() {
        if (this.bet != null) {
            this['totalbet text'].text = Math.round(this.bet.amount / 25);
            this['totalBetPanel'].text = `Total Bet : ${this.bet.amount}`;
        }
        if (this.bet == null || this.bet.step == 0) {
            this['decrease button'].texture = this.getTexture("buttondecreasedim");
            this['decrease button glow'].texture = this.getTexture("buttondecreasedim");
        }
        else if (this.state != 'spin') {
            this['decrease button'].texture = this.getTexture("buttondecrease");
            this['decrease button glow'].texture = this.getTexture("buttondecreasehover");
        }
        if (this.bet == null || this.bet.step == this.arrBetValue.length - 1) {
            this['increase button'].texture = this.getTexture("buttonincreasedim");
            this['increase button glow'].texture = this.getTexture("buttonincreasedim");
        }
        else if (this.state != 'spin') {
            this['increase button'].texture = this.getTexture("buttonincrease");
            this['increase button glow'].texture = this.getTexture("buttonincreasehover");
        }

        this['start button text'].text = this.current_auto_amount;
        this['balancePanel'].text = "Balance : " + this.credits.value;

        this.updateTimePanel();
    },

    startMultiplierAnimation: function(name) {
        this['multiplier_' + name + ' container'].visible = true;
        this['multiplier_' + name + ' container'].children[2].visible = true;
        // this['multiplier_2x container'].children[0].visible = true;
        this['multiplier_' + name + ' container'].children[2].gotoAndPlay(0);
        setTimeout(() => {
            this['multiplier_' + name + ' container'].children[2].stop();
            this['multiplier_' + name + ' container'].children[2].visible = false;
            this['multiplier_' + name + ' container'].children[1].visible = true;
            this['multiplier_' + name + ' container'].children[1].gotoAndPlay(0);
            this['multiplier_' + name + ' number'].visible = true;
            this['multiplier_' + name + ' x'].visible = true;
        }, 450);
    },

    stopMultiplierAnimation: function(name) {
        this.tween({
            to: ['visible', false, 250, 0, Power1.easeIn]
        }, 'multiplier_' + name + ' container');
        this['multiplier_' + name + ' container'].children[2].visible = false;
        this['multiplier_' + name + ' container'].children[2].stop();
        this['multiplier_' + name + ' container'].children[1].visible = false;
        this['multiplier_' + name + ' container'].children[1].stop();
        this['multiplier_' + name + ' number'].visible = false;
        this['multiplier_' + name + ' x'].visible = false;
    },

    startReelfireAnimation: function(name) {
        this[name + ' container'].visible = true;
        this[name + ' container'].children[0].visible = true;
        this[name + ' container'].children[0].gotoAndPlay(0);
    },

    stopReelfireAnimation: function(name) {
        this[name + ' container'].visible = false;
        this[name + ' container'].children[0].visible = false;
        this[name + ' container'].children[0].stop();
    },

    startReelSplashAnimation: function(name) {
        this[name + ' container'].visible = true;
        this[name + ' container'].children[1].visible = true;
        this[name + ' container'].children[1].gotoAndPlay(0);
    },

    stopReelSplashAnimation: function(name) {
        this[name + ' container'].visible = false;
        this[name + ' container'].children[1].visible = false;
        this[name + ' container'].children[1].stop();
    },

    freezeControlPanel: function() {
        this.freeze_status = true;
        this['lines bar up'].texture = this.getTexture("plus_btn_2_disabled");
        this['betperline bar up'].texture = this.getTexture("plus_btn_2_disabled");
        this['start button'].texture = this.getTexture("btnSkinSpin_disabled");
        this['autoplay button'].texture = this.getTexture("buttonautoplay");
    },

    unfreezeControlPanel: function() {
        this.freeze_status = false;
        this['start button'].texture = this.getTexture("free_btnSkinSkip_enabled");
        this['start button glow'].texture = this.getTexture("free_btnSkinSkip_over");
    },

    allbuttondisable: function() {
        if (this.auto_mode) {
            // this['start button glow'].texture = this['start button'].texture = this.getTexture("buttonstopdim");
        }
        else this['start button glow'].texture = this['start button'].texture = this.getTexture("buttonspindim");
        this['decrease button glow'].texture = this['decrease button'].texture = this.getTexture("buttondecreasedim");
        this['increase button glow'].texture = this['increase button'].texture = this.getTexture("buttonincreasedim");
        this['help button glow'].texture = this['help button'].texture = this.getTexture("buttonhelpdim");
        this['autoplay button glow'].texture = this['autoplay button'].texture = this.getTexture("buttonautoplaydim");
        //this['settings button glow'].texture = this['settings button'].texture = this.getTexture("buttonsettingsdim");
        this['externalhelp button glow'].texture = this['externalhelp button'].texture = this.getTexture("buttonexternalhelpdim");
    },

    allbuttonenable: function() {
        if (this.auto_mode) {
        //    this['start button glow'].texture = this.getTexture("buttonstophover");
        //    this['start button'].texture = this.getTexture("buttonstop");
        }
        else {
            this['start button glow'].texture = this.getTexture("buttonspinhover");
            this['start button'].texture = this.getTexture("buttonspin");
        }
        this['decrease button glow'].texture = this.getTexture("buttondecreasehover");
        this['decrease button'].texture = this.getTexture("buttondecrease");
        this['increase button glow'].texture = this.getTexture("buttonincreasehover");
        this['increase button'].texture = this.getTexture("buttonincrease");
        this['help button glow'].texture = this.getTexture("buttonhelphover");
        this['help button'].texture = this.getTexture("buttonhelp");
        this['autoplay button glow'].texture = this.getTexture("buttonautoplayhover");
        this['autoplay button'].texture = this.getTexture("buttonautoplay");
        //this['settings button glow'].texture = this.getTexture("buttonsettingsdim");
        //this['settings button'].texture = this.getTexture("buttonsettings");
        this['externalhelp button glow'].texture = this.getTexture("buttonexternalhelpdim");
        this['externalhelp button'].texture = this.getTexture("buttonexternalhelp");
    },

    interval: 0,

    server_connection: false,
    server_initMatrix: [],
    server_arrRetVal: [],
    server_scatters: [],
    server_url: "http://localhost/pixi/cui/server.json",
    server_win_amount: {
        value: 0,
        drawed: 0
    },
    gamesession_id: "",
    session_id: 0,

    freeze_status: false,

    first_reel: false,
    second_reel: false,
    third_reel: false,

    freespin_animation: false,
    freespin_count: 0,
    isfreespin: false,
    freespin_index: 0,
    freespin_first_animation: false,
    total_freespin_amount: 0,
    freespin_end: false,
    base_sound: null,
    roll_sound: null,
    roll_sound_play: false,

    nomean_multiplier: 2,

    bonus_highlights: [],
    bonus_active: [],

    exchangeMatrix: function(matrix) {
        var return_matrix = [
            [],
            [],
            [],
            [],
            []
        ];
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 5; j++) {
                return_matrix[j][2 - i] = matrix[i][j];
            }
        }
        return return_matrix;
    },

    exchangeagain: function(matrix) {
        var return_matrix = [
            [],
            [],
            [],
            [],
            []
        ];
        for (var i = 0; i < 5; i++)
            for (var j = 0; j < 3; j++) {
                return_matrix[4 - i][j] = matrix[i][j];
            }
        return return_matrix;
    },

    generateWinData: function() {
        var serverData = this.server_arrRetVal;
        var changed_matrix = this.exchangeMatrix(this.server_initMatrix);
        changed_matrix = this.exchangeagain(changed_matrix);
        var return_var = [
            []
        ];
        for (var k = 0; k < serverData.length; k++) {
            var windata = [];
            var pay_line;
            var symbol_name;
            var card_count;
            var symbols = this.spinCombination.symbols;
            var pos_array = [];
            var linePosIdx = serverData[k].linePosIdx + 1;
            pay_line = this.spinCombination.paylines[serverData[k].linePosIdx];
            symbol_name = this.spinCombination.uniquesymbols[serverData[k].audioIndex];
            card_count = serverData[k].cardCount;
            for (var i = 0; i < this.COLUMNS_COUNT; i++)
                for (var j = 0; j < this.ROWS_COUNT; j++)
                    if (pay_line[j][i] === 1)
                        pos_array.push({ name: symbols[j][i], position: [j, i] });

            windata.push(pay_line);         // 0
            windata.push(pos_array);        // 1
            windata.push("symbol_name");    // 2
            windata.push(card_count);       // 3
            windata.push(linePosIdx);       // 4
            windata.push(serverData[k].win);// 5
            return_var[k] = windata;
        }
        return return_var;
    },

    bonusclose: function() {
        this.tween({
            to: ['alpha', 0, 250, 0, Power1.easeIn]
        }, 'overlay', () => {
            this['overlay'].visible = false;
        });

        this.tween({
            to: ['alpha', 0, 250, 0, Power1.easeIn]
        }, 'bonus container', () => {
            this['bonus container'].visible = false;
        });
    },

    apiRequest: function(options) {
        var params = '';
        if (options.params) {
            for (var index in options.params) {
                params += '&' + options.params[index].key + '=' + options.params[index].value;
            }
        }
        var xhr = $.ajax({
            // url: "https://ace.777berserk.com/api/" + options.endpoint,
            url: "http://localhost:8000/api/" + options.endpoint,
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + localStorage.api_key,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            type: 'post',
            data: params.substr(1),
            success: function(data) {

            },
            error: function(error) {
                console.log(error);
            }
        });

        return xhr;
    },

    getCashInfo: function() {
        var options = {
            endpoint: 'zt_get_player_balance',
            params: [{
                key: 'session_id',
                value: this.session_id
            }]
        };
        var params = "";
        if (options.params) {
            for (var index in options.params) {
                params += '&' + options.params[index].key + '=' + options.params[index].value;
            }
        }
        var xhr = $.ajax({
            // url: "https://ace.777berserk.com/api/" + options.endpoint,
            url: "http://localhost:8000/api/" + options.endpoint,
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + localStorage.api_key,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            async: false,
            type: 'post',
            data: params.substr(1),
            success: function(data) {

            },
            error: function(error) {
                console.log(error);
            }
        });
        var response = xhr.responseText;
        return JSON.parse(response.toString());
    },

    getServerData: function() {
        var responses = [
            '{"error":"0","response":{"initCards":[[6,7,8],[8,8,4],[7,9,8],[5,7,1],[6,5,7]],"arrRetVal":[{"retType":0,"win":0.02,"linePosIdx":7,"cardCount":3},{"retType":0,"win":0.02,"linePosIdx":9,"cardCount":3}],"betAmount":50,"winAmount":4,"balance":10000.04}}',
            '{"error":"0","response":{"initCards":[[2,5,9],[8,5,8],[2,9,4],[9,8,1],[7,1,2]],"arrRetVal":[],"betAmount":25,"winAmount":0,"balance":10000}}'
        ];

        var serverData = JSON.parse(responses[_.random(0,responses.length - 1)]);
        return serverData;
    },

    getTestServerData: function() {
        var options = {
            endpoint: 'zt_test'
        };
        return this.apiRequest(options);
    },

    getServerInitialInfo: function() {
        var options = {
            endpoint: 'zt_get_setting',
            params: [
                {
                    key: 'gamespec',
                    value: this.gamespec
                },
                {
                    key: 'gamesession_id',
                    value: this.gamesession_id
                }
            ]
        };

        var ret = this.apiRequest(options);
        if (ret.error == "0") {
            this.arrLinesValue = ret.response.arrLinesValue;
            this.arrBetValue = ret.response.arrBetValue;
        }
        else console.log("getServerInitialInfo error !");
    },

    getServerCardsInfo: function(betstep, isfreespin) {

        var options = {
            endpoint: 'zt_play_game',
            params: [{
                    key: 'lines',
                    value: 0
                },
                {
                    key: 'bet',
                    value: betstep,
                },
                {
                    key: 'gamespec',
                    value: this.gamespec
                },
                {
                    key: 'isfreespin',
                    value: isfreespin
                },
                {
                    key: 'gamesession_id',
                    value: this.gamesession_id
                },
                {
                    key: 'initbalance',
                    value: this.credits.value
                },
                {
                    key: 'play_for_fun',
                    value: 0
                }
            ]
        };

        return this.apiRequest(options);
    },

    sendSignalToSite: function() {
        var options = {
            endpoint: 'zt_send_signal',
            params: []
        };
        return this.apiRequest(options);
    },

    closeGame: function() {
        var options = {
            endpoint: 'zt_exit_game',
            params: []
        };
        return this.apiRequest(options);
    }
});