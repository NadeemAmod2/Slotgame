App.Gameplay = new Screen({

    Name: "Gameplay",

    Containers: [
        {
            name: 'BackgroundContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 920],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 920],
            childs: [
                {
                    name: 'background container wrapper', childs: [
                        {
                            name: 'background',
                            type: 'sprite',
                            position: [0, 0],
                            image: 'background_image',
                            scale: [1920 / 1440, 920 / 810],
                            event: 'screen'
                        }
                    ]
                },
                {
                    name: 'free_background container wrapper',
                    visible: false,
                    childs: [
                        {
                            name: 'free_background',
                            type: 'sprite',
                            position: [0, 0],
                            image: 'free_background_image',
                            scale: [1920 / 1440, 920 / 810],
                            event: 'screen'
                        }
                    ]
                }
            ]
        },
        {
            name: 'MainContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 920],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 920],
            childs: [
                {
                    name: 'main container wrapper',
                    position: [0, 15],
                    scale: [1, 1],
                    zindex: 999999,
                    zorder: 999999,
                    childs: [
                        {
                            name: 'reel back',
                            childs: [
                                {
                                    // size: 1420 * 595
                                    name: 'real_back',
                                    type: 'sprite',
                                    image: 'reelsFrameBasegameBG.png',
                                    scale: [1300 / 1164, 700 / 636],
                                    position: [0, 120 - (920 - 595) / 2],
                                    event: 'screen',
                                },
                                {
                                    name: 'paytable button',
                                    type: 'graphics',
                                    button: 'button',
                                    position: [600, -440],
                                    draw: [['beginFill', 0x5555dd], ['drawRoundedRect', [-90 / 2, -25 / 2, 90, 25, 15]]],
                                    childs: [
                                        {
                                            name: 'paytable button glow',
                                            type: 'graphics',
                                            position: [0, 0]
                                        },
                                        {
                                            name: 'paytable button border',
                                            type: 'graphics',
                                            position: [0, 0],
                                            draw: [['lineStyle', 2, 0x000000, 0.5], ['beginFill', 0x1e50be], ['drawRoundedRect', [-85 / 2, -20 / 2, 85, 20, 15]]]
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
                                    draw: [['beginFill', 0x5555dd], ['drawRoundedRect', [-90 / 2, -25 / 2, 90, 25, 15]]],
                                    childs: [
                                        {
                                            name: 'game_rules button glow',
                                            type: 'graphics',
                                            position: [0, 0],
                                        },
                                        {
                                            name: 'game_rules button border',
                                            type: 'graphics',
                                            position: [0, 0],
                                            draw: [['lineStyle', 2, 0x000000, 0.5], ['beginFill', 0x1e50be], ['drawRoundedRect', [-85 / 2, -20 / 2, 85, 20, 15]]]
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
                                    draw: [['beginFill', 0x5555dd], ['drawRoundedRect', [-90 / 2, -25 / 2, 90, 25, 15]]],
                                    childs: [
                                        {
                                            name: 'audio_set button glow',
                                            type: 'graphics'
                                        },
                                        {
                                            name: 'audio_set button border',
                                            type: 'graphics',
                                            position: [0, 0],
                                            draw: [['lineStyle', 2, 0x000000, 0.5], ['beginFill', 0x1e50be], ['drawRoundedRect', [-85 / 2, -20 / 2, 85, 20, 15]]]
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
                                {
                                    name: 'close button',
                                    type: 'graphics',
                                    button: 'button',
                                    position: [900, -440],
                                    draw: [['beginFill', 0x5555dd], ['drawRoundedRect', [-90 / 2, -25 / 2, 90, 25, 15]]],
                                    childs: [
                                        {
                                            name: 'close button glow',
                                            type: 'graphics'
                                        },
                                        {
                                            name: 'close button border',
                                            type: 'graphics',
                                            position: [0, 0],
                                            draw: [['lineStyle', 2, 0x000000, 0.5], ['beginFill', 0x1e50be], ['drawRoundedRect', [-85 / 2, -20 / 2, 85, 20, 15]]]
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
                                },
                                {
                                    name: 'anticipation container',
                                    position: [475, -50],
                                    scale: [575 / 356, 700 / 423],
                                    visible: false
                                }
                            ]
                        },
                        {
                            name: 'game board container',
                            scale: [1519 / 1522, 726 / 732],
                            position: [0, 30],
                            childs: [
                                {
                                    name: 'game board symbols container',
                                    childs: []
                                },
                                {
                                    name: 'game board symbols highlighted container',
                                    childs: []
                                }
                            ]
                        },
                        {
                            name: 'game bonusvalue container',
                            alpha: 1,
                            position: [0, -300],
                            childs: [
                                {
                                    name: 'game bonusboard background',
                                    type: 'graphics',
                                    draw: ['drawRect', [-1240 / 2, -140 / 2, 1240, 140]],
                                },
                                {
                                    name: 'game bonusboard container',
                                    childs: []
                                },
                                {
                                    name: 'game bonus_real container',
                                    alpha: 1,
                                    childs: []
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
                            position: [0, 120 - (920 - 600) / 2],
                            scale: [1420 / 1017, 600 / 426],
                            image: 'freegame_popup',
                            visible: false,
                            childs: [
                                {
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
                }
            ]
        },
        {
            name: 'ControlPanelContainer',
            visible: true,
            scaleStrategyPortrait: ['fit-to-screen', 1920, 920],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 920],
            childs: [
                {
                    name: 'control panel container wrapper',
                    scale: [1, 1],
                    position: [0, 370],
                    childs: [
                        {
                            name: 'control panel bg',
                            type: 'sprite',
                            positionPortrait: [0, 0],
                            positionPortraitIPad: [0, 0],
                            positionLandscape: [0, 0],
                            childs: [
                                {
                                    name: 'control panel back',
                                    position: [0, 0],
                                    scale: [1410 / 1254, 110 / 108],
                                    type: 'sprite',
                                    image: 'meterBG.png'
                                },
                                {
                                    name: 'start button back',
                                    position: [0, -23],
                                    type: 'sprite',
                                    scale: [200 / 168, 150 / 136],
                                    image: 'SpinButtonBG.png'
                                },
                                {
                                    name: 'start button bar',
                                    position: [0, -10],
                                    scale: [1.1, 1],
                                    childs: [
                                        {
                                            name: 'start button',
                                            type: 'sprite',
                                            visible: true,
                                            position: [0, 0],
                                            scale: [1, 1],
                                            button: 'button',
                                            image: 'spinButton.png',
                                            childs: [
                                                {
                                                    name: 'start button glow',
                                                    type: 'sprite',
                                                    image: 'spinButtonOver.png',
                                                    alpha: 0
                                                }
                                            ]
                                        },
                                        {
                                            name: 'stop button',
                                            position: [0, 0],
                                            type: 'sprite',
                                            image: 'btnSkinSpin_disabled',
                                            visible: true,
                                            button: 'button',
                                            childs: [
                                                {
                                                    name: 'stop button glow',
                                                    type: 'sprite',
                                                    image: 'btnSkinSpin_disabled',
                                                    alpha: 0
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: 'button auto',
                                    position: [626, 5],
                                    scale: [1.1, 1],
                                    type: 'sprite',
                                    image: 'AutoSpin.png',
                                    button: 'button',
                                    childs: [
                                        {
                                            name: 'button auto stop',
                                            type: 'sprite',
                                            image: 'AutoSpinNumBG.png',
                                            visible: false,
                                            position: [0, -75],
                                            scale: [1, 1.1]
                                        },
                                        {
                                            name: 'button auto glow',
                                            type: 'sprite',
                                            image: 'AutoSpinOver.png',
                                            alpha: 0
                                        },
                                        {
                                            name: 'button auto text',
                                            type: 'text',
                                            text: '9',
                                            position: [0, -65],
                                            visible: false,
                                            styles: {
                                                align: 'center',
                                                lineJoin: "bevel",
                                                fontFamily: 'Arial',
                                                fontWeight: 'Bold',
                                                fontSize: '22px',
                                                padding: 20,
                                                fill: 0xffffff
                                            }
                                        },
                                    ]
                                },
                                {
                                    name: 'lines bar',
                                    position: [-570,],
                                    scale: [190 / 234, 90 / 106],
                                    type: 'sprite',
                                    image: 'winMeter.png',
                                    childs: [
                                        {
                                            name: 'lines bar text',
                                            type: 'text',
                                            text: '1 COINS',
                                            position: [0, -10],
                                            styles: {
                                                fill: 0xffffff,
                                                fontFamily: 'Arial',
                                                fontSize: '35px'
                                            }
                                        },
                                        {
                                            name: 'lines bar label',
                                            type: 'text',
                                            text: '40 LINES',
                                            position: [0, 25],
                                            styles: {
                                                fill: 0xe88900,
                                                fontFamily: 'Arial',
                                                fontSize: '23px'
                                            }
                                        },
                                        /*{
                                            name: 'lines bar up',
                                            type: 'sprite',
                                            button: 'button',
                                            image: 'arrowPlus.png',
                                            scale: [1, 1],
                                            position: [90, 0],
                                            childs: [
                                                {
                                                    name: 'lines bar up glow',
                                                    type: 'sprite',
                                                    image: 'arrowPlusPressed.png',
                                                    alpha: 0
                                                },
                                            ]
                                        },
                                        {
                                            name: 'lines bar down',
                                            type: 'sprite',
                                            button: 'button',
                                            image: 'arrowMinusInactive.png',
                                            scale: [1, 1],
                                            position: [-90, 0],
                                            childs: [
                                                {
                                                    name: 'lines bar down glow',
                                                    type: 'sprite',
                                                    image: 'arrowMinusPressed.png',
                                                    alpha: 0
                                                },
                                            ]
                                        }*/
                                    ]
                                },
                                {
                                    name: 'betperline bar',
                                    position: [-380, 0],
                                    scale: [190 / 234, 90 / 106],
                                    type: 'sprite',
                                    image: 'winMeter.png',
                                    childs: [
                                        {
                                            name: 'betperline bar text',
                                            type: 'text',
                                            text: '1',
                                            position: [0, -10],
                                            styles: {
                                                fill: 0xffffff,
                                                fontFamily: 'Arial',
                                                fontSize: '35px'
                                            }
                                        },
                                        {
                                            name: 'betperline bar label',
                                            type: 'text',
                                            text: 'COIN VALUE',
                                            position: [0, 25],
                                            styles: {
                                                fill: 0xe88900,
                                                fontFamily: 'Arial',
                                                fontSize: '23px'
                                            }
                                        },
                                        {
                                            name: 'betperline bar up',
                                            type: 'sprite',
                                            button: 'button',
                                            image: 'arrowPlusOver.png',
                                            scale: [1, 1],
                                            position: [90, 0],
                                            childs: [
                                                {
                                                    name: 'betperline bar up glow',
                                                    type: 'sprite',
                                                    image: 'arrowPlusPressed.png',
                                                    alpha: 0
                                                },
                                            ]
                                        },
                                        {
                                            name: 'betperline bar down',
                                            type: 'sprite',
                                            button: 'button',
                                            image: 'arrowMinusInactive.png',
                                            scale: [1, 1],
                                            position: [-90, 0],
                                            childs: [
                                                {
                                                    name: 'betperline bar down glow',
                                                    type: 'sprite',
                                                    image: 'arrowMinusPressed.png',
                                                    alpha: 0
                                                },
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: 'betamount',
                                    position: [-185, 0],
                                    scale: [190 / 234, 90 / 106],
                                    type: 'sprite',
                                    image: 'winMeter.png',
                                    childs: [
                                        {
                                            name: 'betamount text',
                                            type: 'text',
                                            text: '125',
                                            position: [0, -10],
                                            styles: {
                                                fill: 0xffffff,
                                                fontFamily: 'Arial',
                                                fontSize: '35px'
                                            }
                                        },
                                        {
                                            name: 'betamount label',
                                            type: 'text',
                                            text: 'TOTAL BET',
                                            position: [0, 25],
                                            styles: {
                                                fill: 0xe88900,
                                                fontFamily: 'Arial',
                                                fontSize: '23px'
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'win bar',
                                    position: [220, -10],
                                    scale: [260 / 254, 110 / 88],
                                    type: 'sprite',
                                    drawed: 0,
                                    image: 'balanceMeter2.png',
                                    childs: [
                                        {
                                            name: 'win bar text',
                                            type: 'text',
                                            position: [0, -7],
                                            scale: [254 / 260, 88 / 110],
                                            styles: {
                                                fill: 0xffffff,
                                                fontFamily: 'Arial',
                                                fontSize: '35px'
                                            }
                                        },
                                        {
                                            name: 'win bar label',
                                            type: 'text',
                                            text: 'WIN',
                                            scale: [254 / 260, 88 / 110],
                                            position: [0, 20],
                                            styles: {
                                                fill: 0xe88900,
                                                fontFamily: 'Arial',
                                                fontSize: '23px'
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'credits bar',
                                    position: [470, 0],
                                    scale: [230 / 214, 90 / 88],
                                    type: 'sprite',
                                    image: 'balanceMeter.png',
                                    childs: [
                                        {
                                            name: 'credits text',
                                            type: 'text',
                                            text: '125',
                                            scale: [214 / 230, 88 / 90],
                                            position: [0, -7],
                                            styles: {
                                                fill: 0xffffff,
                                                fontFamily: 'Arial',
                                                fontSize: '32px'
                                            }
                                        },
                                        {
                                            name: 'credits bar text',
                                            type: 'text',
                                            text: 'BALANCE',
                                            scale: [214 / 230, 88 / 90],
                                            position: [0, 20],
                                            styles: {
                                                fill: 0xe88900,
                                                fontFamily: 'Arial',
                                                fontSize: '20px'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'FreeControlPanelContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', 1920, 920],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 920],
            childs: [
                {
                    name: 'freecontrol panel container wrapper',
                    scale: [1, 1],
                    position: [0, 355],
                    childs: [
                        {
                            name: 'control panel bg',
                            type: 'sprite',
                            positionPortrait: [0, 0],
                            positionPortraitIPad: [0, 0],
                            positionLandscape: [0, 0],
                            childs: [
                                {
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
                                    childs: [
                                        {
                                            name: 'free_start button',
                                            type: 'sprite',
                                            visible: true,
                                            position: [0, 0],
                                            scale: [1, 1],
                                            button: 'button',
                                            image: 'btnSkinSpin_disabled',
                                            childs: [
                                                {
                                                    name: 'free_start button glow',
                                                    type: 'sprite',
                                                    image: 'btnSkinSpin_disabled',
                                                    alpha: 0
                                                }
                                            ]
                                        }
                                    ]
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
                                    childs: [
                                        {
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
                                    childs: [
                                        {
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
                        }
                    ]
                },
                {
                    name: 'reel_fire container wrapper',
                    scale: [1700 / 1000, 780 / 460],
                    position: [0, -90],
                    alpha: 0.9,
                    event: 'screen',
                    childs: [
                        {
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
                    childs: [
                        {
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
            name: 'LogoContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 920],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 920],
            childs: [
                {
                    name: 'logo',
                    type: 'sprite',
                    scale: [770 / 696, 1],
                    position: [0, -1 * 920 / 2 + 70],
                    image: 'logo',
                },
                {
                    name: 'crown1',
                    type: 'sprite',
                    image: 'reelsCrown',
                    position: [0, -215]
                },
                {
                    name: 'crown_left',
                    type: 'sprite',
                    image: 'reelsCrown',
                    position: [-500, -215]
                },
                {
                    name: 'crown_right',
                    type: 'sprite',
                    image: 'reelsCrown',
                    position: [500, -215]
                }
            ]
        },
        {
            name: 'AutoMenuContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'automenu overlay',
                    childs: [
                        {
                            name: 'automenu overlay rect',
                            event: 'automenu overlay',
                            type: 'graphics',
                            preventDefault: false,
                            draw: [['beginFill', 0xffffffff], ['drawRect', [-1920, -1920, 3840, 3840]]],
                            alpha: 0,
                        },
                        {
                            name: 'automenu items container',
                            type: 'sprite',
                            position: [625, 280],
                            scale: [1.2, 1.2],
                            childs: [
                                {
                                    name: 'automenu items container border',
                                    type: 'sprite',
                                    image: 'autoPlayChoices.png',
                                    childs: [
                                        {
                                            name: 'button automenu_50',
                                            type: 'graphics',
                                            pressed: true,
                                            draw: [['beginFill', 0xeeeeee], ['drawRect', -70 / 2, -20 / 2, 70, 20]],
                                            button: 'button',
                                            step: 50,
                                            position: [0, -40],
                                            scale: [1, 1],
                                            childs: [
                                                {
                                                    name: 'button automenu_50 glow',
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xaa7c01], ['drawRoundedRect', [-65 / 2, -23 / 2, 65, 23, 4]]],
                                                    alpha: 0,
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
                                                        fill: 0xffffff
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_40',
                                            type: 'graphics',
                                            draw: ['drawRect', [-70 / 2, -25 / 2, 70, 25]],
                                            step: 40,
                                            position: [0, -15],
                                            button: 'button',
                                            scale: [1, 1],
                                            childs: [
                                                {
                                                    name: 'button automenu_40 glow',
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xaa7c01], ['drawRoundedRect', [-65 / 2, -23 / 2, 65, 23, 4]]],
                                                    alpha: 0,
                                                },
                                                {
                                                    name: 'button automenu_40 text',
                                                    type: 'text',
                                                    text: '40',
                                                    scale: [1, 1],
                                                    position: [0, 0],
                                                    styles: {
                                                        align: 'center',
                                                        fontFamily: 'Arial',
                                                        fontWeight: 'Bold',
                                                        fontSize: '25px',
                                                        fill: 0xffffff
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_30',
                                            type: 'graphics',
                                            draw: ['drawRect', [-70 / 2, -25 / 2, 70, 25]],
                                            button: 'button',
                                            step: 30,
                                            position: [0, 10],
                                            scale: [1, 1],
                                            childs: [
                                                {
                                                    name: 'button automenu_30 glow',
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xaa7c01], ['drawRoundedRect', [-65 / 2, -23 / 2, 65, 23, 4]]],
                                                    alpha: 0,
                                                },
                                                {
                                                    name: 'button automenu_30 text',
                                                    type: 'text',
                                                    text: '30',
                                                    scale: [1, 1],
                                                    position: [0, 0],
                                                    styles: {
                                                        align: 'center',
                                                        fontFamily: 'Arial',
                                                        fontWeight: 'Bold',
                                                        fontSize: '25px',
                                                        fill: 0xffffff
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_20',
                                            type: 'graphics',
                                            draw: ['drawRect', [-70 / 2, -25 / 2, 70, 25]],
                                            step: 20,
                                            button: 'button',
                                            position: [0, 35],
                                            scale: [1, 1],
                                            childs: [
                                                {
                                                    name: 'button automenu_20 glow',
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xaa7c01], ['drawRoundedRect', [-65 / 2, -23 / 2, 65, 23, 4]]],
                                                    alpha: 0
                                                },
                                                {
                                                    name: 'button automenu_20 text',
                                                    type: 'text',
                                                    text: '20',
                                                    scale: [1, 1],
                                                    position: [0, 0],
                                                    styles: {
                                                        align: 'center',
                                                        fontFamily: 'Arial',
                                                        fontWeight: 'Bold',
                                                        fontSize: '25px',
                                                        fill: 0xffffff
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_10',
                                            type: 'graphics',
                                            draw: ['drawRect', [-70 / 2, -25 / 2, 70, 25]],
                                            button: 'button',
                                            step: 10,
                                            position: [0, 60],
                                            scale: [1, 1],
                                            childs: [
                                                {
                                                    name: 'button automenu_10 glow',
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xaa7c01], ['drawRoundedRect', [-65 / 2, -23 / 2, 65, 23, 4]]],
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
                                                        fill: 0xffffff
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },

                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'BonusWinContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'bonus_win overlay',
                    childs: [
                        {
                            name: 'bonus_win overlay rect',
                            event: 'automenu overlay',
                            type: 'graphics',
                            preventDefault: false,
                            draw: [['beginFill', 0x00000000], ['drawRect', [-1920, -1920, 3840, 3840]]],
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
                            childs: [
                                {
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
                }
            ]
        },
        {
            name: 'OverlayContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1500, 725],
            scaleStrategyLandscape: ['fit-to-screen', 1500, 725],
            childs: [
                {
                    name: 'overlay', visible: false, childs: [
                        {
                            name: 'overlay rect',
                            event: 'overlay',
                            type: 'graphics',
                            draw: [['beginFill', 0x000000], ['drawRect', [-1500, -1500, 3000, 3000]]]
                        }
                    ]
                }
            ]
        },
        {
            name: 'InfoContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', 1920, 920],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 920],
            childs: [
                {
                    name: 'info container wrapper',
                    type: 'sprite',
                    image: 'help_background',
                    childs: [
                        {
                            name: 'info control container',
                            childs: [
                                {
                                    name: 'info close button',
                                    type: 'sprite',
                                    image: 'BtnClose_enabled',
                                    position: [(940 - 90) / 2 - 8, -(915 - 90) / 2 + 8],
                                    scale: [90 / 110, 90 / 110],
                                    button: 'button',
                                    childs: [
                                        {
                                            name: 'info close button glow',
                                            type: 'sprite',
                                            image: 'BtnClose_over'
                                        }
                                    ]
                                },
                                {
                                    name: 'info next button',
                                    type: 'sprite',
                                    image: 'BtnArrow_enabled',
                                    position: [120, (915 - 90) / 2 - 8],
                                    scale: [-90 / 110, 90 / 110],
                                    button: 'button',
                                    childs: [
                                        {
                                            name: 'info next button glow',
                                            type: 'sprite',
                                            image: 'BtnArrow_over'
                                        }
                                    ]
                                },
                                {
                                    name: 'info prev button',
                                    type: 'sprite',
                                    image: 'BtnArrow_enabled',
                                    position: [-120, (915 - 90) / 2 - 8],
                                    scale: [90 / 110, 90 / 110],
                                    button: 'button',
                                    childs: [
                                        {
                                            name: 'info prev button glow',
                                            type: 'sprite',
                                            image: 'BtnArrow_over'
                                        }
                                    ]
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
                            childs: [
                                {
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
                                    draw: [['beginFill', 0xffffff], ['drawRect', [-450, -50, 900, 100]]],
                                    position: [0, -(950 / 2 - 230)],
                                    childs: [
                                        {
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
                                    draw: [['beginFill', 0xffffff], ['drawRect', [-450, -50, 900, 100]]],
                                    position: [0, -(950 / 2 - 230 - 140)],
                                    childs: [
                                        {
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
                                    draw: [['beginFill', 0xffffff], ['drawRect', [-450, -50, 900, 100]]],
                                    position: [0, -(950 / 2 - 230 - 140 * 2)],
                                    childs: [
                                        {
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
                                    draw: [['beginFill', 0xffffff], ['drawRect', [-450, -50, 900, 100]]],
                                    position: [0, -(950 / 2 - 230 - 140 * 3)],
                                    childs: [
                                        {
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
                            childs: [
                                {
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
                                    draw: [['beginFill', 0xffffff], ['drawRect', [-450, -50, 900, 100]]],
                                    position: [0, -(950 / 2 - 90 - 100)],
                                    childs: [
                                        {
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
                                    draw: [['beginFill', 0xffffff], ['drawRect', [-450, -50, 900, 100]]],
                                    position: [0, -(950 / 2 - 190 - 110)],
                                    childs: [
                                        {
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
                                    draw: [['beginFill', 0xffffff], ['drawRect', [-450, -50, 900, 100]]],
                                    position: [0, -(950 / 2 - 190 - 110 * 2)],
                                    childs: [
                                        {
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
                                    draw: [['beginFill', 0xffffff], ['drawRect', [-450, -190 / 2, 900, 190]]],
                                    position: [0, -(950 / 2 - 190 - 110 * 3 - 45)],
                                    childs: [
                                        {
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
                                    draw: [['beginFill', 0xffffff], ['drawRect', [-450, -50, 900, 100]]],
                                    position: [0, -(950 / 2 - 190 - 110 * 4 - 90)],
                                    childs: [
                                        {
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
                            childs: [
                                {
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
                                    childs: [
                                        {
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
                                    childs: [
                                        {
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
                            childs: [
                                {
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
                                    childs: [
                                        {
                                            name: 'triple card1',
                                            type: 'sprite',
                                            image: 'symbol-5.png',
                                            scale: [240 / 400, 150 / 250],
                                            position: [0, 0]
                                        }
                                    ]
                                },
                                {
                                    name: 'info content 2',
                                    position: [0, -(950 / 2 - 230 - 180)],
                                    childs: [
                                        {
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
                            childs: [
                                {
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
                                    childs: [
                                        {
                                            name: 'triple card1',
                                            type: 'sprite',
                                            image: 'spitfire',
                                            scale: [240 / 254, 150 / 156],
                                            position: [0, 0]
                                        }
                                    ]
                                },
                                {
                                    name: 'info content 2',
                                    position: [0, -(950 / 2 - 230 - 140)],
                                    childs: [
                                        {
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
                                    childs: [
                                        {
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
                            childs: [
                                {
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
                                    childs: [
                                        {
                                            name: 'triple card1',
                                            type: 'sprite',
                                            image: 'help_bg2',
                                            scale: [1, 1],
                                            position: [0, 0]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: 'info container 7',
                            visible: false,
                            childs: [
                                {
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
                                    childs: [
                                        {
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
                            childs: [
                                {
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
                                    childs: [
                                        {
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
                            childs: [
                                {
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
                                    childs: [
                                        {
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
                },
            ]
        },
        {
            name: 'ErrorContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1280, 1280],
            scaleStrategyLandscape: ['fit-to-screen', 1280, 1080],
            childs: [
                {
                    name: 'error container', visible: false, childs: [
                        {name: 'error rect', type: 'graphics'},
                        {
                            name: 'error text 1',
                            type: 'text',
                            text: 'Error',
                            position: [0, -450 / 2],
                            styles: {fontFamily: 'Vinque', fontSize: '46px', padding: 20, fill: 0xcccccc}
                        },
                        {name: 'error line', type: 'graphics'},
                        {
                            name: 'error close button',
                            type: 'graphics',
                            position: [565 / 2, -445 / 2],
                            button: 'error close',
                            hit: ['rect', -60, -20, 80, 40],
                            childs: [
                                {
                                    name: 'error close button text',
                                    type: 'text',
                                    text: "CLOSE",
                                    position: [-30, 0],
                                    styles: {fontFamily: 'Vinque', fontSize: '25px', padding: 20, fill: 0xcccccc}
                                }
                            ]
                        },
                        {
                            name: 'error text 2',
                            type: 'text',
                            text: 'Something went wrong.',
                            position: [0, 0],
                            styles: {fontFamily: 'Vinque', fontSize: '30px', padding: 20, fill: 0xffde00}
                        }
                    ]
                }
            ]
        },
        {
            name: 'BonusContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1280, 1280],
            scaleStrategyLandscape: ['fit-to-screen', 1280, 1080],
            childs: [
                {
                    name: 'bonus container', visible: false, childs: [
                        {name: 'bonus rect', type: 'sprite', image: 'bonuspane.png'},
                        {name: 'bonus line', type: 'graphics'},
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
                }
            ]
        },
        {
            name: 'OrientSwitchContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1080, 1920],
            scaleStrategyLandscape: [0, 0],
            visibleLandscape: false,
            visiblePortrait: true,
            childs: [
                {
                    name: 'orient switch background',
                    type: 'graphics',
                    scale: [1, 1],
                    draw: [['beginFill', 0x212121], ['drawRect', [-1920, -1920, 3840, 3840]]],
                    childs: [
                        {
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
                }
            ]
        }
    ],

    Events: {

        'Gameplay before build': function () {
            this.updateChildParamsByName(Settings[this.Name]);
        },

        'Gameplay menu overlay up': function (container, e) {
            MRAID.markMeaningfulInteraction();
            this.menu_mode = false;
            this['MenuContainer'].visible = this.menu_mode;
        },

        'Gameplay automenu overlay up': function (container, e) {
            MRAID.markMeaningfulInteraction();
            this.automenu_mode = false;
            this['AutoMenuContainer'].visible = this.automenu_mode;
        },

        'overlay down': function () {
            MRAID.markMeaningfulInteraction();
            this['overlay'].visible = false;
        },

        'Gameplay build': function () {

            this.is_local_mode = false;
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
                    this.userBlockLayer.active = true;
                    return;
                }
            }
            // server end

            this.is_bonus = false;

            this.const = {
                RESULT_TYPE: {
                    NORMAL: 0x000000,
                    BIGMONEY: 0x000001,
                    JACKPOT: 0x000002,
                    BLUEJACKPOT: 0x000003,
                    REDJACKPOT: 0x000004
                }
            };
            this.win_anim_mode = 0x0;

            this.menu_mode = false;
            this.automenu_mode = false;

            this.current_auto_amount = 0;

            //getting init data from server

            if (!this.is_local_mode) {
                var cashinfo = this.getCashInfo();
                this.gamesession_id = cashinfo.response.gamesession_id;
                this.credits = {
                    value: parseFloat(cashinfo.response.balance),
                    drawed: parseFloat(cashinfo.response.balance)
                };
                this.gamespec = cashinfo.response.gamespec;
                this.gamesession_id = cashinfo.response.gamesession_id;
            } else {
                this.credits = {
                    value: 11250,
                    drawed: 11250
                };
            }
            //server end

            this.bet = {
                amount: 5,
                drawed: 5,
                step: 1
            };

            this.lines = {
                value: 1,
                step: 1
            };

            this.betperlines = {
                value: 1,
                step: 1
            };

            this.line_value_list = 1;
            this.betperline_value_list = [1, 2, 3, 5, 10, 20, 25, 30, 50, 100, 200, 300, 500];
            this.prizes_list = [800, 900, 1000, 800, 2000, 1200];

            this.spinCombinations = [];
            this.helpPageVisabilityFlag = false;

            this.cur_mouse_capture_container_name = "";

            /* line */
            /*for (let i = 1; i <= 5; i++) {
                let template = {
                    name: 'line' + i.toString(),
                    type: 'sprite',
                    scale: [1, 1],
                    position: [0, 0],
                    visible: false,
                    alpha: 1,
                    image: 'line' + i.toString() + '.png'
                };

                if (i === 2)
                    template.position = [0, -450 / 3];
                if (i === 3)
                    template.position = [0, 450 / 3];
                if (i === 4)
                    template.scale = [1, 450 / 690];
                if (i === 5)
                    template.scale = [1, 450 / 690];

                this.buildChild(this['line container'], template);
            }
            this.hideLinecontainer();*/

            this.helpPageIndex = 1;

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

            this.wildBackTween = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],
                show: () => {
                    this.wildBackTween.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
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
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].gotoAndPlay(0);
                                if (container.children.length > 1) {
                                    for(var i = 1 ; i < container.children.length; i++)
                                        container.children[i].gotoAndPlay(0);
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

            this.BOARD_SIZE = [1225, 510];
            this.BONUS_VALUE_SIZE = [1240, 140];

            this.COLUMNS_COUNT = 5;
            this.ROWS_COUNT = 3;

            this.REEL_SYMBOLS_COUNT = this.ROWS_COUNT + this.ROWS_COUNT + 1;

            this.COLUMNS_OFFSET = 245;
            this.ROWS_OFFSET = 170; // symbols offset in the reel

            this.REELS_STOP_TIMEOUT = 1000;
            this.REELS_STOP_DELAY = 650;

            this.REELS_START_TIMEOUT = 0;
            this.REELS_START_DELAY = 150;

            this.SYMBOLS_SCALE = [1.15];

            this.reels = [];
            let init_card = [
                [0, 0, 0],
                [9, 9, 9],
                [4, 4, 4],
                [0, 0, 0],
                [4, 4, 4]
            ];

            //symbol
            // this['game bonusvalue container'].removeChildren();
            this.buildChild(this['game bonusboard container'],
                {
                    name: 'bonusvalue mask',
                    type: 'graphics',
                    draw: [['beginFill', [0x000000]], ['drawRect', [-this.BONUS_VALUE_SIZE[0] / 2, -this.BONUS_VALUE_SIZE[1] / 2, this.BONUS_VALUE_SIZE[0], this.BONUS_VALUE_SIZE[1]]]],
                    position: [0, 0],
                    alpha: 0.5
                });

            this.buildChild(this['game bonusboard container'],
                {
                    name: 'bonusboard',
                    mask: 'bonusvalue mask',
                    position: [0, 0]
                });

            for (let i = 0; i < this.prizes_list.length; i++) {
                if (this.prizes_list[i] === 2000) {
                    this.buildChild(this['game bonus_real container'], {
                        name: 'container' + i,
                        position: [250 * (i - 2), 0],
                        type: 'text',
                        mask: 'bonusvalue mask',
                        text: this.prizes_list[i],
                        styles: {
                            fill: [0x66ff00, 0x339900],
                            fontFamily: 'AGLettericaDemiCondensedC',
                            fontSize: '50px',
                            dropShadow: true,
                            dropShadowAngle: 0.1,
                            dropShadowColor: "black",
                            dropShadowDistance: 3
                        }
                    });
                } else {
                    this.buildChild(this['game bonus_real container'], {
                        name: 'container' + i,
                        position: [250 * (i - 2), 0],
                        type: 'text',
                        mask: 'bonusvalue mask',
                        text: this.prizes_list[i],
                        styles: {
                            fill: [0x00ffff, 0x0099ff],
                            fontFamily: 'AGLettericaDemiCondensedC',
                            fontSize: '50px',
                            dropShadow: true,
                            dropShadowAngle: 0.1,
                            dropShadowColor: "black",
                            dropShadowDistance: 3
                        }
                    });
                }
            }

            // let bonus_container = this['game bonus_real container'];
            // bonus_container.position.set(bonus_container.position.x - 250, bonus_container.position.y);
            // this.tween({
            //     to: ['visible', false, 250, 0, Power1.easeIn]
            // }, 'game bonusvalue container');

            for (let i = 0; i < this.COLUMNS_COUNT; i++) {

                let mostLeft = -1 * (this.COLUMNS_COUNT - 1) / 2 * this.COLUMNS_OFFSET - 2; // the most left element on game board

                this.buildChild(this['game board symbols container'], {
                    name: 'reel mask ' + i,
                    type: 'graphics',
                    draw: [['beginFill', [0x000000]], ['drawRect', [-this.BOARD_SIZE[0] / 2, -this.BOARD_SIZE[1] / 2, this.BOARD_SIZE[0], this.BOARD_SIZE[1]]]],
                    position: [mostLeft + this.COLUMNS_OFFSET * i, 0],
                    alpha: 0.5
                });

                let reelSprite = this.buildChild(this['game board symbols container'],
                    {
                        name: 'reel ' + i,
                        mask: 'reel mask ' + i,
                        position: [mostLeft + i * 2.5 + this.COLUMNS_OFFSET * i, -1 * (this.ROWS_COUNT - 1) / 2 * this.ROWS_OFFSET - (this.ROWS_COUNT + 1) * this.ROWS_OFFSET]
                    });

                let reelSpriteHighlight = this.buildChild(this['game board symbols highlighted container'],
                    {
                        name: 'reel highlighted ' + i,
                        position: [mostLeft + i * 2.5 + this.COLUMNS_OFFSET * i, -1 * (this.ROWS_COUNT - 1) / 2 * this.ROWS_OFFSET - (this.ROWS_COUNT + 1) * this.ROWS_OFFSET]
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
                        scale: [this.SYMBOLS_SCALE, 1.13],
                        position: [0, this.ROWS_OFFSET * j]
                    });

                    this.buildChild(this['reel highlighted ' + i], {
                        name: 'reel ' + i + ' symbol highlighted container ' + j,
                        scale: [1,170/150],
                        position: [0, this.ROWS_OFFSET * j]
                    });

                    this.buildChild(this['reel ' + i + ' symbol highlighted container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' highlight',
                        position: [0, -5],
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

                    var card_index = 0;
                    if (j >= (this.ROWS_COUNT + 1)) {
                        card_index = init_card[i][j - (this.ROWS_COUNT + 1)];
                    } else {
                        card_index = _.random(0, App.Symbols.length - 1);
                    }
                    this.setSymbolTexture('reel ' + i + ' symbol container ' + j, App.Symbols[card_index].Image);
                }

            }

            // anticipation movie-clip
            let frames = [];
            let image = "anticipation.png";
            for (let k = 1; k <= 56; k++) {
                frames.push(image.replace('.png', ((k < 10) ? '-0' : '-') + k + '.png'))
            }
            this.buildChild(this['anticipation container'], {
                name: 'anticipation container animation',
                type: 'movie-clip',
                frames: frames,
                speed: 0.2,
                loop: true
            });

            /*let reel_fire_list = ['2x_fire', '3x_fire', '4x_fire', '5x_fire', '6x_fire', '7x_fire', 'main_fire'];
            for (let i = 0; i < reel_fire_list.length; i++) {
                let frames = [];
                let image = reel_fire_list[i] + "_reels.png";
                for (let j = 1; j <= 18; j++) {
                    if (j % 5 === 0)
                        continue;
                    frames.push(image.replace('.png', ((j < 10) ? '_0' : '_') + j + '.png'));
                }
                this.buildChild(this[reel_fire_list[i] + ' container'], {
                    name: reel_fire_list[i] + ' container animation1',
                    type: 'movie-clip',
                    frames: frames,
                    speed: 0.15,
                    visible: false,
                    loop: true
                });
                frames = [];
                for (let j = 19; j <= 28; j++) {
                    if (j % 5 === 0)
                        continue;
                    frames.push(image.replace('.png', ((j < 10) ? '_0' : '_') + j + '.png'));
                }
                this.buildChild(this[reel_fire_list[i] + ' container'], {
                    name: reel_fire_list[i] + ' container animation2',
                    type: 'movie-clip',
                    frames: frames,
                    visible: false,
                    speed: 0.09,
                    loop: true
                });
            }*/

            /*let spitfire_list = ['2x', '3x', '4x', '5x', '6x', '7x'];
            for (let i = 0; i < spitfire_list.length; i++) {
                let frames = [];
                let image = "multiplier_" + spitfire_list[i] + ".png";
                for (let j = 0; j <= 23; j++) {
                    frames.push(image.replace('.png', ((j < 10) ? '-0' : '-') + j + '.png'));
                }
                this.buildChild(this['multiplier_' + spitfire_list[i] + ' container'], {
                    name: 'multiplier_' + spitfire_list[i] + ' container animation1',
                    type: 'movie-clip',
                    scale: [260 / 158, 200 / 108],
                    frames: frames,
                    visible: false,
                    speed: 0.5,
                    loop: true
                });
                frames = [];
                image = "multiplier_" + spitfire_list[i] + "1.png";
                for (let j = 0; j <= 23; j++) {
                    frames.push(image.replace('.png', ((j < 10) ? '-0' : '-') + j + '.png'));
                }
                this.buildChild(this['multiplier_' + spitfire_list[i] + ' container'], {
                    name: 'multiplier_' + spitfire_list[i] + ' container animation2',
                    type: 'movie-clip',
                    scale: [260 / 158, 200 / 108],
                    frames: frames,
                    visible: false,
                    speed: 0.5,
                    loop: true
                });
                frames = [];
                image = "multiplier_" + spitfire_list[i] + "2.png";
                for (let j = 0; j <= 21; j++) {
                    frames.push(image.replace('.png', ((j < 10) ? '-0' : '-') + j + '.png'));
                }
                this.buildChild(this['multiplier_' + spitfire_list[i] + ' container'], {
                    name: 'multiplier_' + spitfire_list[i] + ' container animation3',
                    type: 'movie-clip',
                    scale: [260 / 158, 200 / 108],
                    frames: frames,
                    visible: false,
                    speed: 0.5,
                    loop: false
                });
                this.buildChild(this['multiplier_' + spitfire_list[i] + ' container'], {
                    name: 'multiplier_' + spitfire_list[i] + ' number',
                    type: 'sprite',
                    image: 'multi_number_' + spitfire_list[i],
                    scale: [130 / 103, 130 / 103],
                    position: [-30, 0],
                    visible: true
                });
                this.buildChild(this['multiplier_' + spitfire_list[i] + ' container'], {
                    name: 'multiplier_' + spitfire_list[i] + ' x',
                    type: 'sprite',
                    image: 'multi_x_' + spitfire_list[i],
                    scale: [130 / 103, 130 / 103],
                    position: [30, 0],
                    visible: true
                });
            }*/

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

            this.playSound('initialgame', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        },

        'Gameplay resize': function () {

            this.refreshPanelValues();

            if (App.IsLandscape) {

                if (this.helpPageVisabilityFlag) {

                    this['info container ' + this.helpPageIndex].visible = 1;
                    this['info container controlls'].visible = 1;

                    this['MainContainer'].visible = 0;
                    this['ControlPanelContainer'].visible = 0;

                }

            } else {

            }

            if (this.menu_mode === true)
                this['MenuContainer'].visible = true;
            if (this.automenu_mode === true)
                this['AutoMenuContainer'].visible = true;

        },

        'Gameplay showed': function () {

            if (Settings["intro"]) {

                this.showIntro(function () {

                    this.startGame();

                });

            } else {

                this.skipIntro(function () {

                    this.startGame();

                });

            }

        },

        'Gameplay update': function () {

            let time = this.updateTimeOffset / (1000 / 60);

            if (time > 2) time = 2;

            if (this.state === 'spin' || this.state === 'spinStop') {

                for (let i = 0; i < this.COLUMNS_COUNT; i++) {

                    if (this.reels[i].completed) continue;

                    if (this.state === 'spinStop' && this.reels[i].completeSymbol) {

                        if (this.reels[i].animation.state === 0) {

                            let dist = (this.ROWS_COUNT + 1) * this.ROWS_OFFSET + this.ROWS_OFFSET / 3 - this[this.reels[i].completeSymbol].position.y;

                            this.reels[i].speed = dist * 0.5;

                            if (this.reels[i].speed <= 1) {

                                this.reels[i].animation.state = 1;

                            }

                        } else if (this.reels[i].animation.state === 1) {

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

                            if (this.reels.every(item => item.completed)) {
                                this.completeSpin();
                            }


                        }

                    }

                }

            }

        },

        'Gameplay update tick 5': function () {

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

        },

        'Gameplay button over': function (container, e) {
            this.handleButtonOver(container, e);
        },

        'Gameplay button out': function (container, e) {
            this.handleButtonOut(container, e);
        },

        'Gameplay button up': function (container, e) {
            this.handleButtonUp(container, e);
        },

        'Gameplay button down': function (container, e) {
            this.handleButtonDown(container, e);
        },

        'Gameplay autobet option button over': function (container, e) {
            // this.handleButtonOver(container, e);
        },

        'Gameplay autobet option button out': function (container, e) {
            // this.handleButtonOut(container, e);
        },

        'Gameplay autobet option button up': function (container, e) {
            this.handleButtonUp(container, e);
        },

        'Gameplay autobet option button down': function (container, e) {
            this.handleButtonDown(container, e);
        },

        'Gameplay error close down': function () {
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

        'Gameplay bonus close down': function () {
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

        'Gameplay transaction confirmed': function (data) {

            // console.log('spin combination: ', data);

            // this.spinCombination = App.escalibur.mathForCombination(this.bet.amount, [data.reel1, data.reel2, data.reel3, data.reel4, data.reel5]);

        },

        'Gameplay new jackpot': function (data) {

            App.escalibur.Jackpot.value = parseFloat(data.amount);

            this.drawJackpot();

        },

        'Gameplay account name set': function (accountName) {

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

        'Gameplay balance update': function (data) {

            if (parseFloat(data.new.json.balance) < parseFloat(data.old.json.balance)) {

                // this['account data'].text = 'Cpu: ' + (this.accountData.cpu * 100).toFixed(2) + '%  ' + 'Net: ' + (this.accountData.net * 100).toFixed(2) + '%  ' + 'Balance: ' + data.new.json.balance + '  ' + this.accountData.name;

            }

        }

    },

    autoplay: function () {

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

    transferToCTA: function () {

        this.tween(['alpha', 0, 500], ['BackgroundContainer', 'MainContainer']);
        //
        // if (!App.CallToAction.showed) App.CallToAction.show();

    },

    showIntro: function (next) {

        //Show intro animation if needed and call next

        if (next) next.call(this);

    },

    skipIntro: function (next) {

        //Hide intro animation elements if needed and call next

        if (next) next.call(this);

    },

    startGame: function () {

        MRAID.track('Game Starts');

        this.tutorialTimeout(0);

        this.state = 'ready';

        this['grant jackpot'] = {
            value: App.escalibur.Jackpot.value,
            drawed: App.escalibur.Jackpot.value
        };
    },

    updateAccountData: function () {

    },

    spin: function () {
        this.playSound("background_music", {}, {
            volume: this.sound_mode ? 0.5 : 0,
            loop: false
        });
        this.tween({
            to: ['x', this['game bonus_real container'].x - 250, 750, 100, Power1.easeOut]
        }, 'game bonus_real container');

        this.winAnimationMode = false;
        this.is_bonus = false;
        // this.hideLinecontainer();
        if (this.winSound !== null) {
            /*this.playSound('base_sound', {}, {
                volume: this.sound_mode ? 0.5 : 0,
                loop: false
            }, sound => {
                this.winSound = sound;
            });*/
        }

        if (this.credits.value - this.bet.amount >= 0) {
            this.credits.value -= this.bet.amount;
            this.credits.drawed = this.credits.value;
            this.server_win_amount.value = 0;
            this.server_win_amount.drawed = 0;
            this['win bar'].drawed = 0;

            this.refreshPanelValues();

            this.creditsNotInc = true;
        } else {
            this['button auto'].texture = this.getTexture("AutoSpin.png");
            this['button auto glow'].texture = this.getTexture("AutoSpinOver.png");
            this['button auto text'].visible = false;
            this['button auto stop'].visible = false;
            this.auto_mode = false;
            this.current_auto_amount = 0;
            return;
        }

        this.first_reel = false;
        this.second_reel = false;
        this.third_reel = false;

        this['start button'].texture = this.getTexture("spinButtonInactive.png");

        if (this.winSound) {

            this.winSound.stop();
            this.winSound = false;

            // if (this.mainSound) this.mainSound.volume = this.sound_mode ? 1 : 0;

        }

        if (this.state !== 'ready') return;

        this.state = 'spin';

        // this.stopMultiplierAnimation(this.nomean_multiplier.toString() + "x");
        // this.stopReelfireAnimation(this.nomean_multiplier.toString() + 'x_fire');
        // this.startReelfireAnimation("main_fire");

        this.currentTweens.hide();
        this.currentTweens.hideQuick();
        this.wildBackTween.hide();
        this.wildBackTween.hideQuick();

        // for (var i = 1; i < 6; i++)
        //     this['line' + i.toString()].alpha = 0.5;

        var self = this;

        this.spinCombination = null;

        if (this.auto_mode === true) {
            if (this.current_auto_amount === 0) {
                this['button auto'].texture = this.getTexture("AutoSpin.png");
                this['button auto glow'].texture = this.getTexture("AutoSpinOver.png");
                this['button auto text'].visible = false;
                this['button auto stop'].visible = false;
                return;
            }

            this.current_auto_amount--;
            if (this.current_auto_amount === 0) {
                this['button auto'].texture = this.getTexture("AutoSpin.png");
                this['button auto glow'].texture = this.getTexture("AutoSpinOver.png");
                this['button auto text'].visible = false;
                this['button auto stop'].visible = false;
                this.auto_mode = false;
            }

            this.refreshPanelValues();
        }

        /*getServerCardsInfo(this.bet.step)*/
        /*getServerData()*/
        $.when((this.is_local_mode ? this.getServerData() : this.getServerCardsInfo(this.bet.step, this.isfreespin))).done(function (response) {
            var serverData = response;
            console.log(response);
            if (serverData.error === "0") {
                self.credits.value = serverData.response.balance;

                self.server_initMatrix = serverData.response.initCards;
                let prizes = serverData.response.prizes.split(",");
                let last_prize = parseInt(prizes[prizes.length - 1]);
                self.prizes_list.push(last_prize);
                if (last_prize === 2000) {
                    self.buildChild(self['game bonus_real container'], {
                        name: 'container' + self.prizes_list.length - 1,
                        position: [250 * (self.prizes_list.length - 3), 0],
                        type: 'text',
                        mask: 'bonusvalue mask',
                        text: last_prize,
                        styles: {
                            fill: [0x66ff00, 0x339900],
                            fontFamily: 'AGLettericaDemiCondensedC',
                            fontSize: '50px',
                            dropShadow: true,
                            dropShadowAngle: 0.1,
                            dropShadowColor: "black",
                            dropShadowDistance: 3
                        }
                    });
                } else if (last_prize === 0) {
                    self.buildChild(self['game bonus_real container'], {
                        name: 'container' + self.prizes_list.length - 1,
                        position: [250 * (self.prizes_list.length - 3), 0],
                        type: 'sprite',
                        mask: 'bonusvalue mask',
                        image: 'prizeDiskFreeSpins.png',
                        styles: {
                            fill: [0x00ffff, 0x0099ff],
                            fontFamily: 'AGLettericaDemiCondensedC',
                            fontSize: '50px',
                            dropShadow: true,
                            dropShadowAngle: 0.1,
                            dropShadowColor: "black",
                            dropShadowDistance: 3
                        }
                    });
                } else if (last_prize < 1000) {
                    self.buildChild(self['game bonus_real container'], {
                        name: 'container' + self.prizes_list.length - 1,
                        position: [250 * (self.prizes_list.length - 3), 0],
                        type: 'text',
                        mask: 'bonusvalue mask',
                        text: last_prize,
                        styles: {
                            fill: [0xffeb03, 0xdc6e05],
                            fontFamily: 'AGLettericaDemiCondensedC',
                            fontSize: '50px',
                            dropShadow: true,
                            dropShadowAngle: 0.1,
                            dropShadowColor: "black",
                            dropShadowDistance: 3
                        }
                    });
                } else {
                    self.buildChild(self['game bonus_real container'], {
                        name: 'container' + self.prizes_list.length - 1,
                        position: [250 * (self.prizes_list.length - 3), 0],
                        type: 'text',
                        mask: 'bonusvalue mask',
                        text: last_prize,
                        styles: {
                            fill: [0x00ffff, 0x0099ff],
                            fontFamily: 'AGLettericaDemiCondensedC',
                            fontSize: '50px',
                            dropShadow: true,
                            dropShadowAngle: 0.1,
                            dropShadowColor: "black",
                            dropShadowDistance: 3
                        }
                    });
                }
                self.spinCombination = null;

                self.spinCombination = App.escalibur.mathFromServer(self.bet.amount, self.server_initMatrix);

                var arrRetval = serverData.response.arrRetVal;
                var newArrRetval = [];
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

                    if (arrRetval[i].retType === 5) {
                        self.win_anim_mode = self.win_anim_mode | self.const.RESULT_TYPE.JACKPOT;
                        //jackpot
                    }

                    if (arrRetval[i].retType === 6) {
                        //bigmoney
                        self.win_anim_mode = self.win_anim_mode | self.const.RESULT_TYPE.BIGMONEY;
                    }

                    //In bonus case
                    if (arrRetval[i].retType === 2) {
                        self.isfreespin = true;
                        self.auto_mode = false;
                        self.freespin_animation = true;
                        self.freespin_count = arrRetval[i].count;
                        self.freespin_first_animation = true;
                    }
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
                        self.animFieldPoints('bonus_win bar', self.total_freespin_amount);
                        self.freespin_index++;
                        self['freegames text'].text = self.freespin_index + " / " + self.freespin_count;

                        //Reel fire animation
                        self.stopReelfireAnimation("main_fire");
                        self.startReelSplashAnimation("main_fire");
                        setTimeout(() => {
                            self.stopReelSplashAnimation("main_fire");
                            self.startReelfireAnimation(self.nomean_multiplier.toString() + 'x_fire');
                            self.startMultiplierAnimation(self.nomean_multiplier.toString() + "x");
                        }, 500);
                        //Reel fire animation

                    } else {
                    }
                }


                if (self.freespin_first_animation === true)
                    self.freespin_first_animation = false;
                self.server_arrRetVal = newArrRetval;

                if (arrRetval.length !== 0) {
                    if (arrRetval[0].retType === 3) {
                        // In Case Jackpot
                        self.is_bonus = true;
                        self.bonus_amount = parseInt(arrRetval[0].win);
                        self.server_win_amount.value = parseInt(arrRetval[0].win);
                    } else if (arrRetval[0].retType === 0) {
                        // In Case NORMAL
                        self.is_bonus = false;
                        self.spinCombination.winData.winLines = self.generateWinData();
                    } else if (arrRetval[0].retType === 1) {

                    }
                }
            } else {

            }
            if (this.is_local_mode === false)
                self.sendSignalToSite();
        });

        if (this.timeouts && this.timeouts.length > 0) {

            this.timeouts.forEach((timeout) => {

                clearTimeout(timeout);

            });

        }

        for (let i = 0; i < this.COLUMNS_COUNT; i++) {

            this.timeout(() => {

                for (let j = 0; j < this.REEL_SYMBOLS_COUNT; j++) {
                    var card_index = (j % 2 === 0 ? _.random(0, App.Symbols.length - 2) : 7);

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

                            /*if (i === 2 && this.first_reel === true && this.second_reel === true) {
                                this.playSound('anticipation_sound', {}, {
                                    volume: this.sound_mode ? 1 : 0,
                                    loop: false
                                });
                                this['anticipation container'].visible = true;
                                this['anticipation container'].children[0].gotoAndPlay(0);
                                setTimeout(() => {
                                    this['anticipation container'].visible = false;
                                    this['anticipation container'].children[0].stop();
                                    this.stopReel(i);
                                }, 3000);
                            } else {*/
                                this.stopReel(i);
                            /*}*/

                        }, this.REELS_STOP_TIMEOUT + i * this.REELS_STOP_DELAY);

                    }

                }, 60);

            }, this.REELS_START_TIMEOUT + i * this.REELS_START_DELAY);

        }

        if (this.currentSound) {
            this.currentSound.stop();
            this.currentSound = false;
        }

        this.playSound('btn_spin', {}, {volume: this.sound_mode ? 1 : 0, loop: false});

        this.playSound('reel', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false}, sound => {

            this.currentSound = sound;

        });

    },

    showError: function (message) {

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

    showBounupane: function (message) {
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

    stopReel: function (reel, errorStop) {

        this.reels[reel].completeSymbol = this.reels[reel].sprite.children[0].name;

        this.reels[reel].animation = {
            state: 0
        };

        for (let i = 0; i < this.ROWS_COUNT; i++) {

            let highlightSprites = [];
            let activeSprites = [];
            let imageName;

            if (errorStop) {

                imageName = App.Symbols[_.random(0, App.Symbols.length - 1)].Image;

                this.setSymbolTexture(this.reels[reel].sprite.children[i].name, imageName);

            } else {
                imageName = this.spinCombination.symbols[i][reel];

                this.setSymbolTexture(this.reels[reel].sprite.children[i].name, App.SymbolsNames[imageName]);

                /*if (imageName === "Symbol_Bonus" && i !== 0 && i !== 4) {
                    if (reel === 0) {
                        this.playSound('bonus_one', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
                        this.first_reel = true;
                    } else if (reel === 1 && this.first_reel) {
                        this.playSound('bonus_two', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
                        this.second_reel = true;
                    } else if (reel === 2 && this.first_reel && this.second_reel) {
                        this.third_reel = true;
                        this.playSound('bonus_three', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
                        this.isfreespin = true;
                        this.bonus_highlights.push(this.reels[reel].spriteHighlight.children[i].children[0].params.name.replace('crisp', 'highlight'));
                        this.bonus_active.push(this.reels[reel].sprite.children[i]);
                    } else {
                        continue;
                    }

                    this.playSound(imageName, {}, {volume: this.sound_mode ? 1 : 0, loop: false});

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
                }*/
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

        this.playSound('reelstop', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});

        this.state = 'spinStop';

    },

    completeSpin: function () {

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

        this['start button'].texture = this.getTexture("spinButton.png");
        this['start button glow'].texture = this.getTexture("spinButtonOver.png");

        this.win_sound_play = false;
        if (this.spinCombination) {

            if (!this.is_bonus) {
                // if (this.freespin_animation) {
                //     this['button auto text'].text = "";
                //     this.wildBackTween.showTweens.push(this.tween({
                //         name: 'win-animation',
                //         set: [
                //             ['alpha', 0],
                //             ['visible', false]
                //         ]
                //     }, this.bonus_active));
                //
                //     this.wildBackTween.showTweens[this.wildBackTween.showTweens.length - 1].stop();
                //     this.wildBackTween.hideTweens.push(this.tween({
                //         name: 'win-animation',
                //         to: [
                //             ['scale', this.SYMBOLS_SCALE],
                //             ['alpha', 1, 100, 900]
                //         ],
                //         next: {
                //             set: [
                //                 ['visible', true],
                //                 ['alpha', 1]
                //             ]
                //         }
                //     }, this.bonus_active));
                //
                //     this.wildBackTween.hideTweens[this.wildBackTween.hideTweens.length - 1].stop();
                //
                //     this.wildBackTween.hideQuickTweens.push(this.tween({
                //         name: 'win-animation',
                //         to: [
                //             ['scale', this.SYMBOLS_SCALE - 0.05, 50, 0, Back.easeIn.config(2)],
                //             ['alpha', 0, 50, 0]
                //         ],
                //         next: {
                //             set: [
                //                 ['visible', true],
                //                 ['alpha', 1]
                //             ]
                //         }
                //     }, this.bonus_active));
                //
                //     this.wildBackTween.hideQuickTweens[this.wildBackTween.hideQuickTweens.length - 1].stop();
                //
                //     this.wildBackTween.showTweens.push(this.tween({
                //         name: 'win-animation',
                //         set: [
                //             ['alpha', 1],
                //             ['visible', true],
                //             ['scale', this.SYMBOLS_SCALE]
                //         ]
                //     }, this.bonus_highlights));
                //
                //     this.wildBackTween.showTweens[this.wildBackTween.showTweens.length - 1].stop();
                //
                //     this.wildBackTween.hideTweens.push(this.tween({
                //         name: 'win-animation',
                //         to: [
                //             ['scale', this.SYMBOLS_SCALE],
                //             ['alpha', 0, 100, 900]
                //         ],
                //         next: {
                //             set: [
                //                 ['visible', false],
                //                 ['alpha', 0]
                //             ]
                //         }
                //     }, this.bonus_highlights));
                //
                //     this.wildBackTween.hideTweens[this.wildBackTween.hideTweens.length - 1].stop();
                //
                //     this.wildBackTween.hideQuickTweens.push(this.tween({
                //         name: 'win-animation',
                //         to: [
                //             ['scale', this.SYMBOLS_SCALE - 0.05, 50, 0, Back.easeIn.config(2)],
                //             ['alpha', 0, 50, 0]
                //         ],
                //         next: {
                //             set: [
                //                 ['visible', false],
                //                 ['alpha', 0]
                //             ]
                //         }
                //     }, this.bonus_highlights));
                //
                //     this.wildBackTween.hideQuickTweens[this.wildBackTween.hideQuickTweens.length - 1].stop();
                //
                //     this.wildBackTween.show();
                //
                //     setTimeout(() => {
                //         this.wildBackTween.hide();
                //         this.wildBackTween.showTweens = [];
                //         this.wildBackTween.hideTweens = [];
                //         this['popups header text'].text = "CONGRATULATIONS \n YOU WON";
                //         this['popups body text'].text = "7 \n FREE GAMES";
                //         this['popups alert container'].visible = true;
                //         this.freezeControlPanel();
                //         setTimeout(() => {
                //             this.unfreezeControlPanel();
                //             this['popups header text'].text = "PRESS BUTTON \n TO START";
                //             this['popups body text'].text = "FREE GAMES!";
                //         }, 5000);
                //     }, 900);
                //     this.bonus_highlights = [];
                //     this.bonus_active = [];
                //     this.freespin_animation = false;
                // }
                if (this.spinCombination.winData.winLines.length > 0) {

                    this.spinCombinations.push(this.spinCombination);

                    this.winSpinCombination = this.spinCombination;

                    this.state = 'ready';

                    this.win_sound_play = true;

                    this.winAnimationMode = true;


                    if (this.win_anim_mode && this.const.RESULT_TYPE.BIGMONEY) {
                        // this.startBigMoneyAnimation();
                    }
                    if (this.win_anim_mode && this.const.RESULT_TYPE.JACKPOT) {
                        // this.startJackpotAnimation();
                    }


                    this.winAnimation();

                    this.credits.value += this.server_win_amount.value;
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
                    // this.playSound('rollup' + sound_level.toString(), {}, {
                    //     volume: this.sound_mode ? 1 : 0,
                    //     loop: false
                    // }, sound => {
                    //     this.roll_sound = sound;
                    // });

                } else {

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
                    setTimeout(() => {
                        if (this.state === 'ready' && this.auto_mode) {
                            this.spin();
                        }
                    }, 500);
                }
            } else {
                this.credits.value += parseInt(this.bonus_amount);
                this.credits.drawed += parseInt(this.bonus_amount);
                this.refreshPanelValues();

                this.showBounupane("+" + this.bonus_amount);
                this.playSound('bonus.mp3', {}, {volume: this.sound_mode ? 1 : 0, loop: false});

                setTimeout(() => {
                    this.bonusclose();
                    this.state = 'ready';
                }, 3000);
            }
        } else {
            this.state = 'ready';
        }

        if (this.currentSound) {
            this.currentSound.stop();
            this.currentSound = false;
        }
    },

    drawJackpot: function () {

    },

    setSymbolTexture: function (container, image) {

        let name = container.replace('container ', '');

        this[name + ' crisp'].texture = this.getTexture(image);
        this[name + ' blur'].texture = this.getTexture(image);

        let frames = [];
        let effect_frames = [];

        for (let k = App.SymbolsHighlight[image].frameStart; k <= App.SymbolsHighlight[image].frameEnd; k++) {
            frames.push(image.replace('_Static.png', ((k < 10) ? '_000' : '_00') + k + '.png'));
        }

        for (let k = App.SymbolsHighlight["winBoxAnim.png"].frameStart; k <= App.SymbolsHighlight["winBoxAnim.png"].frameEnd; k++) {
            effect_frames.push("winBoxAnim.png".replace('.png', ((k < 10) ? '_000' : '_00') + k + '.png'));
        }

        this[name + ' highlight'].removeChildren();
        this.buildChild(this[name + ' highlight'], {
            name: name + ' highlight animation',
            type: 'movie-clip',
            frames: frames,
            speed: 0.2,
            loop: true
        });
        this.buildChild(this[name + ' highlight'], {
            name: name + ' highlight animation1',
            type: 'movie-clip',
            frames: effect_frames,
            speed: 0.1,
            loop: true
        });
    },

    setSymbolsBlur: function (container, state) {

        let name = container.replace('container ', '');

        this[name + ' crisp'].visible = false;
        this[name + ' blur'].visible = false;

        if (state) this[name + ' blur'].visible = true;
        else this[name + ' crisp'].visible = true;

    },

    tweensBySprites: function (activeSprites, highlightSprites, lineNum, callback) {

        this.currentTweens.showTweens = [];
        this.currentTweens.hideTweens = [];
        this.currentTweens.hideQuickTweens = [];
        if (this.state !== 'ready' || this.winAnimationMode === false) {
            callback = null;
            return;
        }

        // if (this.state === 'ready') {
        //
        //     this.currentTweens.showTweens.push(this.tween({
        //         name: 'win-animation',
        //         set: [
        //             ['alpha', 0],
        //             ['visible', false]
        //         ]
        //     }, activeSprites));
        //
        //     this.currentTweens.showTweens[this.currentTweens.showTweens.length - 1].stop();
        //     this.currentTweens.hideTweens.push(this.tween({
        //         name: 'win-animation',
        //         to: [
        //             ['scale', this.SYMBOLS_SCALE],
        //             ['alpha', 1, 100, 1000]
        //         ],
        //         next: {
        //             set: [
        //                 ['visible', true],
        //                 ['alpha', 1]
        //             ]
        //         }
        //     }, activeSprites));
        //
        //     this.currentTweens.hideTweens[this.currentTweens.hideTweens.length - 1].stop();
        //
        //     this.currentTweens.hideQuickTweens.push(this.tween({
        //         name: 'win-animation',
        //         to: [
        //             ['scale', this.SYMBOLS_SCALE, 50, 0, Back.easeIn.config(2)],
        //             ['alpha', 1, 50, 0]
        //         ],
        //         next: {
        //             set: [
        //                 ['visible', true],
        //                 ['alpha', 1]
        //             ]
        //         }
        //     }, activeSprites));
        //
        //     this.currentTweens.hideQuickTweens[this.currentTweens.hideQuickTweens.length - 1].stop();
        // }

        //init highlight sprite tweens
        if (this.state === 'ready') {

            this.currentTweens.showTweens.push(this.tween({
                name: 'win-animation',
                set: [
                    ['alpha', 1],
                    ['visible', true],
                    ['scale', this.SYMBOLS_SCALE]
                ]
            }, highlightSprites));

            this.tween({
                name: 'win-animation',
                set: [
                    ['alpha', 1],
                    ['visible', true],
                    ['scale', this.SYMBOLS_SCALE]
                ]
            }, highlightSprites);

            this.currentTweens.showTweens[this.currentTweens.showTweens.length - 1].stop();
            this.currentTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['scale', this.SYMBOLS_SCALE],
                    ['alpha', 0, 1, 0]
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
                    ['scale', this.SYMBOLS_SCALE, 50, 0, Back.easeIn.config(2)],
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

        if (this.state === 'ready') {
            this.currentTweens.show();
            // Line animation
            // this.showLinecontainer();
            /*for (let i = 1; i <= 5; i++) {
                if (i === lineNum) {
                    this['line' + i.toString()].visible = true;
                    this['line' + i.toString()].alpha = 1;
                } else {
                    this['line' + i.toString()].visible = false;
                    this['line' + i.toString()].alpha = 0;
                }
            }*/
            // this['line' + lineNum.toString()].alpha = 1;
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
                        // this.hideLinecontainer();
                        // caapllback.call(this);
                    }
                }, 10);
                if (this.state === 'ready') tempTimeout3 = setTimeout(() => {
                    if (this.state !== 'ready') {
                        if (tempTimeout2) clearTimeout(tempTimeout2);
                        return;
                    }
                    callback.call(this);
                }, 200);

            }

        }, 2500);

    },


    animateLine: function (line, callback) {
        if (this.state !== 'ready' || this.winAnimationMode === false) {
            callback = null;
            return;
        }

        let highlightSprites = [];
        let activeSprites = [];
        let linesNum = line[4];

        let matched_symbol_cnt = line[3] === 1 ? 3: line[3];

        for (let i = 0; i < this.COLUMNS_COUNT; i++) {
            if (this.state !== 'ready' || this.winAnimationMode === false)
                break;

            for (let j = 0; j < this.ROWS_COUNT; j++) {
                if (this.state !== 'ready' || this.winAnimationMode === false)
                    break;

                if (line[0][j][i] !== 0) {
                    if(activeSprites.length !== matched_symbol_cnt)
                        activeSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);
                    else
                        break;
                    if(highlightSprites.length !== matched_symbol_cnt)
                        highlightSprites.push(this.reels[i].spriteHighlight.children[this.ROWS_COUNT + 1 + j].children[0].params.name.replace('crisp', 'highlight'));
                    else
                        break;
                }
            }
        }

        if (this.state !== 'ready' || this.winAnimationMode === false)
            return;

        this.tweensBySprites(activeSprites, highlightSprites, linesNum, callback);
    },

    animateEachLine: function (winLines, callback) {

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

                if (this.state === 'ready' && this.spinCombination)
                    this.animateLine(lineData, () => {
                        if (this.spinCombination) {
                            if (this.spinCombination.winData.winLines.length - 1 === lineNum) {

                                if (this.state !== 'ready' || this.winAnimationMode === false) {
                                    callback = null;
                                    return;
                                }
                                if ((callback) && (this.state === 'ready')) callback.call(this);

                            }
                        }

                    });

                //if (this.state === 'ready') //this.playSound('symb'+lineData[4]+'.mp3', {}, {volume: this.sound_mode ? 1 : 0, loop: false});

            }, lineNum * 2700);

            this.timeouts.push(tempTimeout);

        }

    },

    winAnimation: function () {
        if (this.spinCombination.winData.winLines.length > 0) {
            if (this.state !== 'ready' || this.winAnimationMode === false) {
                this.refreshPanelValues();
                return;
            }

            this.updateAccountData();

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
                    if (this.auto_mode) {
                        this.spin();
                        if (this.spinButtonTween) this.spinButtonTween.stop();
                    } else {
                        if (this.state === 'ready') this.winAnimation();
                    }

                }, 0);
            });
        } else {

            if (this.creditsNotInc) {
                this.credits.value += this.server_win_amount;
                this.credits.drawed = this.credits.value;
            }

            this.refreshPanelValues();
        }

    },

    animFieldPoints: function (fieldName, points, bAnim = false, speed = 0) {
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

    tutorialTimeout: function (timeout) {

        if (this.state !== 'intro') {

            clearTimeout(this.TutorialTimeout);
            this.TutorialTimeout = setTimeout(function () {

                if (Settings["tutorial"] && !App.Tutorial.showed && !App.CallToAction.showed) App.Tutorial.show();

            }, typeof timeout === "number" ? timeout : Settings["tutorial-timeout"]);

        }

    },

    hideTutorial: function () {

        clearTimeout(this.TutorialTimeout);

        if (App.Tutorial.showed) App.Tutorial.hide();

    },

    handleButtonOut: function (container, e) {
        if (this.freeze_status)
            return;
        let nameGlow = container.name + ' glow';

        if (this[nameGlow].tween) this[nameGlow].tween.stop();

        this[nameGlow].tween = this.tween({
            to: ['alpha', 0, 150, 0, Power1.easeOut]
        }, nameGlow);
    },

    handleButtonOver: function (container, e) {
        if (this.freeze_status || this.state !== 'ready')
            return;
        console.log(container.name);
        // if (this.cur_mouse_capture_container_name != "") {
        let nameGlow1 = container.name + ' glow';
        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
        this[nameGlow1].tween = this.tween({
            to: ['alpha', 1, 150, 0, Power1.easeOut]
        }, nameGlow1);
        // }
    },

    handleButtonUp: function (container, e) {

        if (this.freeze_status)
            return;

        this.cur_mouse_capture_container_name = "";

        let nameGlow = container.name + ' glow';

        if (this[nameGlow].tween) this[nameGlow].tween.stop();

        this[nameGlow].tween = this.tween({
            to: ['alpha', 0, 150, 0, Power1.easeOut]
        }, nameGlow);

        let name = container.name;

        switch (name) {
            case 'button auto':
                this.buttonHandlerAuto(container, name);
                break;
            /*case 'lines bar down':
                this.buttonHandleLinesBarUpDown(false, container, name);
                break;
            case 'lines bar up':
                this.buttonHandleLinesBarUpDown(true, container, name);
                break;*/
            case 'betperline bar down':
                this.buttonHandleBetPerLineUpDown(false, container, name);
                break;
            case 'betperline bar up':
                this.buttonHandleBetPerLineUpDown(true, container, name);
                break;
            case 'refresh start button':
                this.buttonHandleStartButton(container, true);
                this.automenu_mode = false;
                this['AutoMenuContainer'].visible = this.automenu_mode;
                break;
            case 'start button':
                if (!this.isfreespin)
                    this.buttonHandleStartButton(container, false);
                else
                    this.buttonHandleFreeStartButton(container);
                break;
            case 'stop button':
                this.buttonHandleStartButton(container, true);
                break;
            case 'info next button':
                this.buttonHandlerNext(container);
                break;
            case 'autospin_dialog close button':
                this.buttonHandlerCloseDialog(container);
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

    handleButtonDown: function (container, e) {
        if (this.freeze_status || this.state !== 'ready')
            return;
        let nameGlow1 = container.name + ' glow';
        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
        this[nameGlow1].tween = this.tween({
            to: ['alpha', 1, 150, 0, Power1.easeOut]
        }, nameGlow1);

        this.cur_mouse_capture_container_name = container.name;
    },

    buttonHandlerAuto: function (container, name) {
        if (this.auto_mode === true) {
            this['button auto'].texture = this.getTexture("AutoSpin.png");
            this['button auto glow'].texture = this.getTexture("AutoSpinOver.png");
            this['button auto text'].visible = false;
            this['button auto stop'].visible = false;
            this.playSound('btn_stop_autoplay', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
            this.auto_mode = false;
            this.current_auto_amount = 0;
            return;
        }
        if (this.state !== 'ready') return;
        if (this.auto_mode === false) {
            this.winAnimationMode = false;

            if (this.automenu_mode !== true) {
                this.playSound('btn_autoplay', {}, {volume: this.sound_mode ? 1 : 0, loop: false});

                this.automenu_mode = true;
            } else {
                this.automenu_mode = false;
            }
            this['AutoMenuContainer'].visible = this.automenu_mode;
        }
    },

    buttonHandleAutoItem: function (container, name) {
        if (this.state !== 'ready') return;

        this.winAnimationMode = false;
        this.current_auto_amount = container.step;
        this.total_auto_amount = this.current_auto_amount;
        this['AutoMenuContainer'].visible = false;
        this.refreshPanelValues();
        if (this.auto_mode)
            return;
        if (this.state === 'ready') {
            if (this.auto_mode === false) {
                this.auto_mode = true;
                this['button auto'].texture = this.getTexture("StopAutoSpin.png");
                this['button auto glow'].texture = this.getTexture("StopAutoSpinOver.png");
                this.spin();
                if (this.spinButtonTween) this.spinButtonTween.stop();
            } else {
                this.auto_mode = false;
                this.current_auto_amount = 0;
                this['button auto'].texture = this.getTexture("StopAutoSpin.png");
                this['button auto glow'].texture = this.getTexture("StopAutoSpinOver.png");
                this['button auto text'].visible = false;
                this['button auto stop'].visible = false;
            }
        } else {
            this['button auto'].texture = this.getTexture("AutoSpin.png");
            this['button auto glow'].texture = this.getTexture("AutoSpinOver.png");
            this['button auto text'].visible = false;
            this['button auto stop'].visible = false;
            this.auto_mode = false;
            this.current_auto_amount = 0;
        }
        /*let number = name.slice(-2);
        let nameGlow1 = container.name + ' selected';
        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
        this[nameGlow1].tween = this.tween({
            to: ['alpha', 1, 150, 0, Power1.easeOut]
        }, nameGlow1);
        this.refreshAutoItemBack(number)*/
    },

    refreshAutoItemBack: function (number) {
        let items = ["10", "20", "30", "40", "50"];
        for (let i = 0; i < items.length; i++) {
            if (number !== items[i]) {
                let tweenname = "button automenu_" + items[i] + " selected";
                this.tween({
                    to: ['alpha', 0, 150, 0, Power1.easeOut]
                }, tweenname);
            }
        }
    },

    showHelpPage: function (index) {
        this['info container ' + index].visible = true;
        this['info container ' + index].alpha = 1;
    },

    hideHelpPage: function (index) {
        this['info container ' + index].visible = false;
        this['info container ' + index].alpha = 0;
    },

    buttonHandleBetPerLineUpDown: function (bUp, container, name) {
        if (this.state !== 'ready') return;
        this.winAnimationMode = false;

        var cur_step = this.betperlines.step;
        if (bUp === true) {
            if (cur_step === this.betperline_value_list.length) {
                this[container.name].texture = this.getTexture("arrowPlusInactive.png")
                this.playSound('btn_maxbet', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
                return;
            }
            if (cur_step < this.betperline_value_list.length) {
                this['betperline bar down'].texture = this.getTexture("arrowMinus.png")
                this[container.name].texture = this.getTexture("arrowPlus.png")
                cur_step++;
            }
            this.playSound('btn_plus', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
        } else {
            if (cur_step === 1) {
                this[container.name].texture = this.getTexture("arrowMinusInactive.png")
                return;
            }
            if (cur_step > 1) {
                this['betperline bar up'].texture = this.getTexture("arrowPlus.png")
                this[container.name].texture = this.getTexture("arrowMinus.png")
                cur_step--;
            }
            this.playSound('btn_minus', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
        }

        if (this.setBetAmountValues(this.lines.step, cur_step) === false)
            cur_step = this.betperlines.step;
    },


    buttonHandleStartButton: function (container, isAuto = false) {
        if (isAuto === false) {
            if (this.credits.value < this.bet.amount)
                return;

            MRAID.markMeaningfulInteraction();

            if (this.state !== 'ready') return;

            this.spin();

            if (this.spinButtonTween) this.spinButtonTween.stop();
        } else {
            if (this.auto_mode)
                return;
            if (this.state === 'ready') {
                if (this.auto_mode === false) {
                    this.auto_mode = true;
                    this['button auto'].texture = this.getTexture("StopAutoSpin.png");
                    this['button auto glow'].texture = this.getTexture("StopAutoSpinOver.png");
                    this.spin();
                    if (this.spinButtonTween) this.spinButtonTween.stop();
                } else {
                    this.auto_mode = false;
                    this.current_auto_amount = 0;
                    this['button auto'].texture = this.getTexture("StopAutoSpin.png");
                    this['button auto glow'].texture = this.getTexture("StopAutoSpinOver.png");
                    this['button auto text'].visible = false;
                    this['button auto stop'].visible = false;
                }
            } else {
                this['button auto'].texture = this.getTexture("AutoSpin.png");
                this['button auto glow'].texture = this.getTexture("AutoSpinOver.png");
                this['button auto text'].visible = false;
                this['button auto stop'].visible = false;
                this.auto_mode = false;
                this.current_auto_amount = 0;
            }
        }
        this.refreshPanelValues();
    },

    buttonHandleFreeStartButton: function (container) {
        this.state = 'ready';
        this['popups alert container'].visible = false;
        this['ControlPanelContainer'].visible = false;
        this['FreeControlPanelContainer'].visible = true;
        this['back_fire'].visible = false;
        this['background container wrapper'].visible = false;
        this['free_background container wrapper'].visible = true;

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

    completeFreespin: function () {
        this['ControlPanelContainer'].visible = true;
        this['FreeControlPanelContainer'].visible = false;
        this['back_fire'].visible = true;
        this['background container wrapper'].visible = true;
        this['free_background container wrapper'].visible = false;
        this['start button'].texture = this.getTexture("spinButton.png");
        this['start button glow'].texture = this.getTexture("spinButtonOver.png");
        clearInterval(this.back_interval);
    },

    buttonHandlerCloseDialog: function (container) {
        MRAID.markMeaningfulInteraction();
        this.playSound('btn_auto_close', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
        this.automenu_mode = false;
        this['AutoMenuContainer'].visible = this.automenu_mode;
    },

    showHelpPage: function (index) {
        this['info container ' + index].visible = true;
        this['info container ' + index].alpha = 1;
    },

    hideHelpPage: function (index) {
        this['info container ' + index].visible = false;
        this['info container ' + index].alpha = 0;
    },

    buttonHandlerNext: function (container) {
        this.playSound('button', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});

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

    buttonHandlerPrev: function (container) {
        this.playSound('button', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});

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

    buttonHandlerAudioSet: function (container) {
        this.sound_mode = !(this.sound_mode);
        if (this.sound_mode)
            this['audio_set button text'].text = "Audio On";
        else
            this['audio_set button text'].text = "Audio Off";
    },

    buttonHandlerGamerules: function (container) {
        this.playSound('btn_paytable_open', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
        document.getElementById("game_rule").style.zIndex = 999;
        document.getElementById("game_rule").style.display = "block";

        document.getElementById("game_rule").contentDocument.getElementById("paytable").style.display = "none";
        document.getElementById("game_rule").contentDocument.getElementById("gameRules").style.display = "block";
    },

    buttonHandlerClose: function (container) {
        if (this.state !== 'ready') return;
        this.closeGame();
    },

    buttonHandlerPaytable: function (container) {
        this.playSound('btn_paytable_open', {}, {volume: this.sound_mode ? 1 : 0, loop: false});

        document.getElementById("game_rule").style.zIndex = 999;
        document.getElementById("game_rule").style.display = "block";

        document.getElementById("game_rule").contentDocument.getElementById("paytable").style.display = "block";
        document.getElementById("game_rule").contentDocument.getElementById("gameRules").style.display = "none";
    },

    returnToOrginalFromHelp: function () {
        this['MainContainer'].visible = true;
        this['ControlPanelContainer'].visible = true;
        this['LogoContainer'].visible = true;
        this['InfoContainer'].visible = false;
    },

    setBetAmountValues: function (line_step, betperline_step) {

        let line_value = this.line_value_list;
        let betperline_value = this.betperline_value_list[betperline_step - 1];

        let betAmount = line_value * betperline_value;

        if (this.credits.value < betAmount) {
            console.warn("BetAmount is lower than Credit Value");
            return false;
        }

        this.lines.value = line_value;
        this.lines.step = line_step;

        this.betperlines.value = betperline_value;
        this.betperlines.step = betperline_step;

        this.bet.amount = betAmount;

        this.refreshPanelValues();
    },

    refreshPanelValues: function () {
        this.animFieldPoints('credits', this.credits.drawed.toString());
        // this.animFieldPoints('lines bar', this.lines.value);
        this.animFieldPoints('win bar', this.server_win_amount.drawed, true);
        this.animFieldPoints('betperline bar', this.betperlines.value);
        // this.animFieldPoints('denom bar', this.denomes.value.toString());
        this.animFieldPoints('betamount', this.bet.amount.toString());

        if (this.auto_mode) {
            this['button auto text'].visible = true;
            this['button auto stop'].visible = true;
            this.animFieldPoints('button auto', this.current_auto_amount + 1);
        }

        // if (this.current_auto_amount == 0) {
        //     this['refresh start button'].visible = true;
        //     this['start button'].visible = false;
        //     this['stop button'].visible = false;
        // } else {
        if (this.auto_mode === false) {
            this['start button'].visible = true;
            this['stop button'].visible = false;
        } else {
            this['start button'].visible = true;
            this['stop button'].visible = false;
        }
        // }
    },

    startMultiplierAnimation: function (name) {
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

    stopMultiplierAnimation: function (name) {
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

    startReelfireAnimation: function (name) {
        this[name + ' container'].visible = true;
        this[name + ' container'].children[0].visible = true;
        this[name + ' container'].children[0].gotoAndPlay(0);
    },

    stopReelfireAnimation: function (name) {
        this[name + ' container'].visible = false;
        this[name + ' container'].children[0].visible = false;
        this[name + ' container'].children[0].stop();
    },

    startReelSplashAnimation: function (name) {
        this[name + ' container'].visible = true;
        this[name + ' container'].children[1].visible = true;
        this[name + ' container'].children[1].gotoAndPlay(0);
    },

    stopReelSplashAnimation: function (name) {
        this[name + ' container'].visible = false;
        this[name + ' container'].children[1].visible = false;
        this[name + ' container'].children[1].stop();
    },

    freezeControlPanel: function () {
        this.freeze_status = true;
        this['lines bar up'].texture = this.getTexture("arrowPlusInactive.png");
        this['betperline bar up'].texture = this.getTexture("arrowPlusInactive.png");
        this['start button'].texture = this.getTexture("spinButtonInactive.png");
        this['button auto'].texture = this.getTexture("StopAutoSpin.png");
    },

    unfreezeControlPanel: function () {
        this.freeze_status = false;
        this['start button'].texture = this.getTexture("free_btnSkinSkip_enabled");
        this['start button glow'].texture = this.getTexture("free_btnSkinSkip_over");
    },

    /*hideLinecontainer: function () {
        this['line container'].visible = false;
    },

    showLinecontainer: function () {
        this['line container'].visible = true;
    },*/

    interval: 0,
    server_initMatrix: [],
    server_arrRetVal: [],
    server_scatters: [],
    base_amount: [100, 25, 7, 20, 10, 5, 10, 5, 3, 10, 5, 3, 500, 50, 10, 50, 25, 5, 8, 4, 2, 8, 4, 2, 8, 4, 2, 5, 2, 1],
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

    exchangeMatrix: function (matrix) {
        var return_matrix = [[], [], [], [], []];
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 5; j++) {
                return_matrix[j][i] = matrix[i][j];
            }
        }
        return return_matrix;
    },

    exchangeagain: function (matrix) {
        var return_matrix = [[], [], [], [], []];
        for (var i = 0; i < 5; i++)
            for (var j = 0; j < 3; j++) {
                return_matrix[4 - i][j] = matrix[i][j];
            }
        return return_matrix;
    },

    generateWinData: function () {
        var serverData = this.server_arrRetVal;
        var changed_matrix = this.exchangeMatrix(this.server_initMatrix);
        changed_matrix = this.exchangeagain(changed_matrix);
        var return_var = [[]];
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
            card_count = serverData[k].cardCount === 3 ? 1 : serverData[k].cardCount;
            for (var i = 0; i < this.COLUMNS_COUNT; i++) {
                for (var j = 0; j < this.ROWS_COUNT; j++) {
                    if (pay_line[j][i] === 1) {
                        pos_array.push({name: symbols[j][i], position: [j, i]});
                    }
                }
            }
            windata.push(pay_line);
            windata.push(pos_array);
            windata.push("symbol_name");
            windata.push(card_count);
            windata.push(linePosIdx);
            windata.push(serverData[k].win);
            return_var[k] = windata;
        }
        return return_var;
    },

    bonusclose: function () {
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

    apiRequest: function (options) {
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
            success: function (data) {

            },
            error: function (error) {
                console.log(error);
            }
        });

        return xhr;
    },

    getCashInfo: function () {
        var options = {
            endpoint: 'zt_get_player_balance',
            params: [
                {
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
            success: function (data) {

            },
            error: function (error) {
                console.log(error);
            }
        });
        var response = xhr.responseText;
        return JSON.parse(response.toString());
    },

    getServerData: function () {
        //jackpot
        var response = "{\"error\":\"0\",\"response\":{\"initCards\":[[0, 3, 5],\n" +
            "                [1, 6, 9],\n" +
            "                [4, 7, 7],\n" +
            "                [1, 4, 2],\n" +
            "                [8, 3, 5]],\n" +
            "                \"arrRetVal\":[],\"betAmount\":9,\"winAmount\":1250,\"balance\":11250}}";
        // var response = "{\"error\":\"0\",\"response\":{\"initCards\":[[7,5,7,3,7],[7,2,7,5,7],[7,4,7,6,7]],\"arrRetVal\":[{\"retType\":1}],\"betAmount\":9,\"winAmount\":0,\"balance\":11250}}";
        /*
        //big money
                var response = "{\"error\":\"0\",\"response\":{\"initCards\":[[7,2,7,4,7],[7,0,7,4,7],[7,0,7,4,7]],\"arrRetVal\":[{\"retType\":0,\"win\":10,\"linePosIdx\":1,\"cardCount\":3},{\"retType\":0,\"win\":100,\"linePosIdx\":2,\"cardCount\":3},{\"retType\":6}],\"betAmount\":9,\"winAmount\":110,\"balance\":10110}}";


                //normal
                var response = "{\"error\":\"0\",\"response\":{\"initCards\":[[7,1,7,2,7],[7,2,7,5,7],[7,6,7,6,7]],\"arrRetVal\":[],\"betAmount\":9,\"winAmount\":0,\"balance\":10000}}";

        */


        var serverData = JSON.parse(response);
        return serverData;
    },

    getTestServerData: function () {
        var options = {
            endpoint: 'zt_test'
        };
        return this.apiRequest(options);
    },

    getServerCardsInfo: function (bet, isfreespin) {

        let last_five_prizes = "";
        for (var i = this.prizes_list.length - 5; i < this.prizes_list.length; i++) {
            last_five_prizes += (this.prizes_list[i] + ",");
        }
        var options = {
            endpoint: 'zt_play_game',
            params: [
                {
                    key: 'lines',
                    value: this.lines.step - 1
                },
                {
                    key: 'bet',
                    value: this.betperlines.step - 1
                },
                {
                    key: 'gamespec',
                    value: this.gamespec
                },
                {
                    key: 'prizes',
                    value: last_five_prizes.substring(0, last_five_prizes.length - 1)
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

    sendSignalToSite: function () {
        var options = {
            endpoint: 'zt_send_signal',
            params: []
        };
        return this.apiRequest(options);
    },

    closeGame: function () {
        var options = {
            endpoint: 'zt_exit_game',
            params: []
        };
        return this.apiRequest(options);
    }
});

