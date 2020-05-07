App.Gameplay = new Screen({

    Name: "Gameplay",

    Containers: [
        {
            name: 'BackgroundContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'background container wrapper', childs: [
                        {
                            name: 'background',
                            type: 'sprite',
                            position: [0, 0],
                            image: 'background.png',
                            scale: [1920 / 1280, 1188 / 720],
                            event: 'screen'
                        }
                    ]
                }
            ]
        },
        {
            name: 'MainContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'main container wrapper',
                    position: [0, 0],
                    scale: [1, 1],
                    childs: [
                        {
                            name: 'reel back',
                            childs: [
                                {
                                    // size: 1043 * 530
                                    name: 'real_back',
                                    type: 'sprite',
                                    image: 'dividers.png',
                                    scale: [1.3, 1.5],
                                    position: [0, 120 - (920 - 595) / 2],
                                    event: 'screen',
                                },
                                {
                                    name: 'lines_back',
                                    type: 'sprite',
                                    image: 'betline_numbers.png',
                                    position: [0, -55],
                                    scale: [1.4, 1.5]
                                }
                            ]
                        },
                        {
                            name: 'linebet container',
                            position: [0, -55],
                            childs: [
                                {
                                    name: 'line left 1',
                                    type: 'sprite',
                                    image: 'betlineIndicator.png',
                                    scale: [1.4, 1.4],
                                    alpha: 0,
                                    event: 'betindicator',
                                    position: [807, 36]
                                },
                                {
                                    name: 'line right 1',
                                    type: 'sprite',
                                    image: 'betlineIndicator.png',
                                    scale: [1.4, 1.4],
                                    alpha: 0,
                                    event: 'betindicator',
                                    position: [-807, 36]
                                },
                                {
                                    name: 'line left 2',
                                    type: 'sprite',
                                    image: 'betlineIndicator.png',
                                    scale: [1.4, 1.4],
                                    alpha: 0,
                                    event: 'betindicator',
                                    position: [-800, -242]
                                },
                                {
                                    name: 'line right 2',
                                    type: 'sprite',
                                    image: 'betlineIndicator.png',
                                    scale: [1.4, 1.4],
                                    alpha: 0,
                                    event: 'betindicator',
                                    position: [796, -241]
                                },
                                {
                                    name: 'line left 3',
                                    type: 'sprite',
                                    image: 'betlineIndicator.png',
                                    scale: [1.5, 1.5],
                                    alpha: 0,
                                    event: 'betindicator',
                                    position: [-799, 239]
                                },
                                {
                                    name: 'line right 3',
                                    type: 'sprite',
                                    image: 'betlineIndicator.png',
                                    scale: [1.4, 1.4],
                                    alpha: 0,
                                    event: 'betindicator',
                                    position: [798, 242]
                                },
                                {
                                    name: 'line left 4',
                                    type: 'sprite',
                                    image: 'betlineIndicator.png',
                                    scale: [1.4, 1.4],
                                    alpha: 0,
                                    event: 'betindicator',
                                    position: [-790, -310]
                                },
                                {
                                    name: 'line right 4',
                                    type: 'sprite',
                                    image: 'betlineIndicator.png',
                                    scale: [1.4, 1.4],
                                    alpha: 0,
                                    event: 'betindicator',
                                    position: [790, -310]
                                },
                                {
                                    name: 'line left 5',
                                    type: 'sprite',
                                    image: 'betlineIndicator.png',
                                    scale: [1.4, 1.5],
                                    alpha: 0,
                                    event: 'betindicator',
                                    position: [-790, 306]
                                },
                                {
                                    name: 'line right 5',
                                    type: 'sprite',
                                    image: 'betlineIndicator.png',
                                    scale: [1.4, 1.5],
                                    alpha: 0,
                                    event: 'betindicator',
                                    position: [793, 306]
                                },
                                {
                                    name: 'line left 6',
                                    type: 'sprite',
                                    image: 'betlineIndicator.png',
                                    scale: [1.4, 1.5],
                                    alpha: 0,
                                    event: 'betindicator',
                                    position: [-803, -174]
                                },
                                {
                                    name: 'line right 6',
                                    type: 'sprite',
                                    image: 'betlineIndicator.png',
                                    scale: [1.4, 1.5],
                                    alpha: 0,
                                    event: 'betindicator',
                                    position: [803, -174]
                                },
                                {
                                    name: 'line left 7',
                                    type: 'sprite',
                                    image: 'betlineIndicator.png',
                                    scale: [1.4, 1.5],
                                    alpha: 0,
                                    event: 'betindicator',
                                    position: [-804, 172]
                                },
                                {
                                    name: 'line right 7',
                                    type: 'sprite',
                                    image: 'betlineIndicator.png',
                                    scale: [1.4, 1.5],
                                    alpha: 0,
                                    event: 'betindicator',
                                    position: [803, 174]
                                },
                                {
                                    name: 'line left 8',
                                    type: 'sprite',
                                    image: 'betlineIndicator.png',
                                    scale: [1.4, 1.5],
                                    alpha: 0,
                                    event: 'betindicator',
                                    position: [-806, 103]
                                },
                                {
                                    name: 'line right 8',
                                    type: 'sprite',
                                    image: 'betlineIndicator.png',
                                    scale: [1.4, 1.5],
                                    alpha: 0,
                                    event: 'betindicator',
                                    position: [806, 103]
                                },
                                {
                                    name: 'line left 9',
                                    type: 'sprite',
                                    image: 'betlineIndicator.png',
                                    scale: [1.4, 1.5],
                                    alpha: 0,
                                    event: 'betindicator',
                                    position: [-805, -102]
                                },
                                {
                                    name: 'line right 9',
                                    type: 'sprite',
                                    image: 'betlineIndicator.png',
                                    scale: [1.4, 1.5],
                                    alpha: 0,
                                    event: 'betindicator',
                                    position: [805, -102]
                                },
                                {
                                    name: 'line left 10',
                                    type: 'sprite',
                                    image: 'betlineIndicator.png',
                                    scale: [1.4, 1.5],
                                    alpha: 0,
                                    event: 'betindicator',
                                    position: [-808, -34]
                                },
                                {
                                    name: 'line right 10',
                                    type: 'sprite',
                                    image: 'betlineIndicator.png',
                                    scale: [1.4, 1.5],
                                    alpha: 0,
                                    event: 'betindicator',
                                    position: [808, -34]
                                },
                            ]
                        },
                        {
                            name: 'line container',
                            position: [0, -50],
                            childs: [
                                {
                                    name: 'line 1',
                                    type: 'graphics',
                                    position: [0, 0],
                                    visible: false,
                                    draw: [['beginFill', 0xf2ebb4], ['drawRect', [-1040 / 2, 8 / 2, 1040, 8]]],
                                },
                                {
                                    name: 'line 2',
                                    type: 'graphics',
                                    position: [0, -225],
                                    visible: false,
                                    draw: [['beginFill', 0xf2ebb4], ['drawRect', [-1040 / 2, 8 / 2, 1040, 8]]],
                                    blur: 0.8
                                },
                                {
                                    name: 'line 3',
                                    type: 'graphics',
                                    position: [0, 225],
                                    visible: false,
                                    draw: [['beginFill', 0xf2ebb4], ['drawRect', [-1040 / 2, 8 / 2, 1040, 8]]],
                                },
                                {
                                    name: 'line 4',
                                    type: 'graphics',
                                    position: [0, 0],
                                    visible: false,
                                    draw: [['lineStyle', [8, 0xf2ebb4]], ['beginFill', 0xf2ebb4], ['moveTo', [-1040 / 2, -225]], ['lineTo', [0, 225]], ['moveTo', [0, 225]], ['lineTo', [1040 / 2, -225]]],
                                },
                                {
                                    name: 'line 5',
                                    type: 'graphics',
                                    position: [0, 0],
                                    visible: false,
                                    draw: [['lineStyle', [8, 0xf2ebb4]], ['beginFill', 0xf2ebb4], ['moveTo', [-1040 / 2, 225]], ['lineTo', [0, -225]], ['moveTo', [0, -225]], ['lineTo', [1040 / 2, 225]]],
                                },
                                {
                                    name: 'line 6',
                                    type: 'graphics',
                                    position: [0, 0],
                                    visible: false,
                                    draw: [['lineStyle', [8, 0xf2ebb4]], ['beginFill', 0xf2ebb4], ['moveTo', [-1040 / 2, -225]], ['lineTo', [-1040 / 4, -225]], ['moveTo', [-1040 / 4, -225]], ['lineTo', [0, 0]], ['moveTo', [0, 0]], ['lineTo', [1040 / 4, -225]], ['moveTo', [1040 / 4, -225]], ['lineTo', [1040 / 2, -225]]],
                                },
                                {
                                    name: 'line 7',
                                    type: 'graphics',
                                    position: [0, 0],
                                    visible: false,
                                    draw: [['lineStyle', [8, 0xf2ebb4]], ['beginFill', 0xf2ebb4], ['moveTo', [-1040 / 2, 225]], ['lineTo', [-1040 / 4, 225]], ['moveTo', [-1040 / 4, 225]], ['lineTo', [0, 0]], ['moveTo', [0, 0]], ['lineTo', [1040 / 4, 225]], ['moveTo', [1040 / 4, 225]], ['lineTo', [1040 / 2, 225]]],
                                },
                                {
                                    name: 'line 8',
                                    type: 'graphics',
                                    position: [0, 0],
                                    visible: false,
                                    draw: [['lineStyle', [8, 0xf2ebb4]], ['beginFill', 0xf2ebb4], ['moveTo', [-1040 / 2, 0]], ['lineTo', [-1040 / 4, 225]], ['moveTo', [-1040 / 4, 225]], ['lineTo', [0, 225]], ['moveTo', [0, 225]], ['lineTo', [1040 / 4, 225]], ['moveTo', [1040 / 4, 225]], ['lineTo', [1040 / 2, 0]]],
                                },
                                {
                                    name: 'line 9',
                                    type: 'graphics',
                                    position: [0, 0],
                                    visible: false,
                                    draw: [['lineStyle', [8, 0xf2ebb4]], ['beginFill', 0xf2ebb4], ['moveTo', [-1040 / 2, 0]], ['lineTo', [-1040 / 4, -225]], ['moveTo', [-1040 / 4, -225]], ['lineTo', [0, -225]], ['moveTo', [0, -225]], ['lineTo', [1040 / 4, -225]], ['moveTo', [1040 / 4, -225]], ['lineTo', [1040 / 2, 0]]],
                                },
                                {
                                    name: 'line 10',
                                    type: 'graphics',
                                    position: [0, 0],
                                    visible: false,
                                    draw: [['lineStyle', [8, 0xf2ebb4]], ['beginFill', 0xf2ebb4], ['moveTo', [-1040 / 2, 0]], ['lineTo', [-1040 / 4, -225]], ['moveTo', [-1040 / 4, -225]], ['lineTo', [0, 0]], ['moveTo', [0, 0]], ['lineTo', [1040 / 4, -225]], ['moveTo', [1040 / 4, -225]], ['lineTo', [1040 / 2, 0]]],
                                },
                            ]
                        },
                        {
                            name: 'game board container',
                            scale: [1519 / 1522, 726 / 732],
                            position: [0, -40],
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
                            name: 'close button',
                            type: 'graphics',
                            button: 'button',
                            position: [900, -500],
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
                    ]
                }
            ]
        },
        {
            name: 'ControlPanelContainer',
            visible: true,
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'control panel container wrapper',
                    scale: [1, 1],
                    position: [0, 404],
                    childs: [
                        {
                            name: 'control panel bg',
                            type: 'sprite',
                            position: [0, 0],
                            childs: [
                                {
                                    name: 'control panel background',
                                    type: 'sprite',
                                    image: 'keypadBackground.png',
                                    scale: [1650 / 1280, 220 / 195]
                                },
                                {
                                    name: 'start button bar',
                                    position: [0, 30],
                                    scale: [1.3, 1.15],
                                    childs: [
                                        {
                                            name: 'start button',
                                            type: 'sprite',
                                            visible: true,
                                            position: [0, 0],
                                            scale: [1, 1],
                                            button: 'button',
                                            image: 'spinButtonIdle.png',
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
                                            image: 'spinButtonDisabled.png',
                                            visible: true,
                                            button: 'button',
                                            childs: [
                                                {
                                                    name: 'stop button glow',
                                                    type: 'sprite',
                                                    image: 'spinButtonDisabled.png',
                                                    alpha: 0
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: 'maxbet button bar',
                                    position: [130, 28],
                                    scale: [1.3, 1.1],
                                    childs: [
                                        {
                                            name: 'maxbet button',
                                            type: 'sprite',
                                            visible: true,
                                            position: [0, 0],
                                            scale: [1, 1],
                                            button: 'button',
                                            image: 'maxBetButtonUp.png',
                                            childs: [
                                                {
                                                    name: 'maxbet button glow',
                                                    type: 'sprite',
                                                    image: 'maxBetButtonOver.png',
                                                    alpha: 0
                                                }
                                            ]
                                        },
                                        {
                                            name: 'maxbet button bar text',
                                            type: 'text',
                                            text: 'MAX\nBET',
                                            position: [0, 0],
                                            scale: [1 / 1.3, 1 / 1.1],
                                            styles: {
                                                align: 'center',
                                                fill: 0xffffff,
                                                fontFamily: 'Arial',
                                                fontSize: '18px'
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'button auto',
                                    position: [-130, 28],
                                    button: 'button',
                                    type: 'sprite',
                                    image: 'autoPlayButtonUp.png',
                                    scale: [1.3, 1.1],
                                    childs: [
                                        {
                                            name: 'button auto glow',
                                            type: 'sprite',
                                            image: 'autoPlayButtonOver.png',
                                            alpha: 0
                                        },
                                        {
                                            name: 'button auto label',
                                            type: 'text',
                                            text: 'AUTO\nPLAY',
                                            position: [0, 0],
                                            scale: [1 / 1.3, 1 / 1.1],
                                            styles: {
                                                align: 'center',
                                                fill: 0xffffff,
                                                fontFamily: 'Arial',
                                                fontSize: '18px'
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'button paytable',
                                    position: [-744, 31],
                                    scale: [1.25, 1.2],
                                    type: 'sprite',
                                    image: 'paytableButtonOver.png',
                                    button: 'button',
                                    childs: [
                                        {
                                            name: 'button paytable glow',
                                            type: 'sprite',
                                            image: 'paytableButtonUp.png',
                                            alpha: 0
                                        }
                                    ]
                                },

                                /*{
                                    name: 'lines bar',
                                    position: [-570,],
                                    scale: [190 / 234, 90 / 106],
                                    type: 'sprite',
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
                                        /!*{
                                            name: 'lines bar up',
                                            type: 'sprite',
                                            button: 'button',
                                            image: 'selectorPlusUp.png',
                                            scale: [1, 1],
                                            position: [90, 0],
                                            childs: [
                                                {
                                                    name: 'lines bar up glow',
                                                    type: 'sprite',
                                                    image: 'selectorPlusUp.png',
                                                    alpha: 0
                                                },
                                            ]
                                        },
                                        {
                                            name: 'lines bar down',
                                            type: 'sprite',
                                            button: 'button',
                                            image: 'selectorMinusOver.png',
                                            scale: [1, 1],
                                            position: [-90, 0],
                                            childs: [
                                                {
                                                    name: 'lines bar down glow',
                                                    type: 'sprite',
                                                    image: 'selectorMinusUp.png',
                                                    alpha: 0
                                                },
                                            ]
                                        }*!/
                                    ]
                                },*/
                                {
                                    name: 'coin bar',
                                    position: [368, 36],
                                    scale: [190 / 234, 90 / 106],
                                    type: 'sprite',
                                    image: 'winMeter.png',
                                    childs: [
                                        {
                                            name: 'coin bar text',
                                            type: 'text',
                                            text: '1',
                                            position: [0, 0],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '50px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                                padding: 20
                                            }
                                        },
                                        {
                                            name: 'coin bar label',
                                            type: 'text',
                                            text: 'COIN VALUE',
                                            position: [0, -55],
                                            styles: {
                                                fill: 0xffffff,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '35px'
                                            }
                                        },
                                        {
                                            name: 'coin bar up',
                                            type: 'sprite',
                                            button: 'button',
                                            image: 'selectorPlusOver.png',
                                            scale: [1.65, 1.4],
                                            position: [110, 0],
                                            childs: [
                                                {
                                                    name: 'coin bar up glow',
                                                    type: 'sprite',
                                                    image: 'selectorPlusUp.png',
                                                    alpha: 0
                                                },
                                            ]
                                        },
                                        {
                                            name: 'coin bar down',
                                            type: 'sprite',
                                            button: 'button',
                                            image: 'selectorMinusDisabled.png',
                                            scale: [1.65, 1.4],
                                            position: [-110, 0],
                                            childs: [
                                                {
                                                    name: 'coin bar down glow',
                                                    type: 'sprite',
                                                    image: 'selectorMinusDisabled.png',
                                                    alpha: 0
                                                },
                                            ]
                                        },
                                        {
                                            name: 'coin bar progress',
                                            position: [0, 50],
                                            scale: [1.58, 1],
                                            childs: [
                                                {
                                                    name: 'coin progress back',
                                                    type: 'sprite',
                                                    mask: 'coin progress mask',
                                                    position: [-150, 0],
                                                    image: 'selectorBarFill.png',
                                                },
                                                {
                                                    name: 'coin progress mask',
                                                    type: 'graphics',
                                                    draw: [['beginFill', [0x000000]], ['drawRect', [-175 / 2, 6 / 2, 175, 6]]],
                                                    position: [0, -6],
                                                    alpha: 0.5
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: 'level bar',
                                    position: [-368, 36],
                                    scale: [190 / 234, 90 / 106],
                                    type: 'sprite',
                                    childs: [
                                        {
                                            name: 'level bar text',
                                            type: 'text',
                                            text: '35',
                                            position: [22.5, 0],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '50px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                                padding: 20
                                            }
                                        },
                                        {
                                            name: 'level bar label',
                                            type: 'text',
                                            text: 'LEVEL',
                                            position: [22.5, -55],
                                            styles: {
                                                fill: 0xffffff,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '35px'
                                            }
                                        },
                                        {
                                            name: 'level bar up',
                                            type: 'sprite',
                                            button: 'button',
                                            image: 'selectorPlusUp.png',
                                            scale: [1.65, 1.4],
                                            position: [110, 0],
                                            childs: [
                                                {
                                                    name: 'level bar up glow',
                                                    type: 'sprite',
                                                    image: 'selectorPlusOver.png',
                                                    alpha: 0
                                                },
                                            ]
                                        },
                                        {
                                            name: 'level bar down',
                                            type: 'sprite',
                                            button: 'button',
                                            image: 'selectorMinusDisabled.png',
                                            scale: [1.65, 1.4],
                                            position: [-65, 0],
                                            childs: [
                                                {
                                                    name: 'level bar down glow',
                                                    type: 'sprite',
                                                    image: 'selectorMinusDisabled.png',
                                                    alpha: 0
                                                },
                                            ]
                                        },
                                        {
                                            name: 'level bar progress',
                                            position: [23, 50],
                                            scale: [1.32, 1],
                                            childs: [
                                                {
                                                    name: 'level progress back',
                                                    type: 'sprite',
                                                    mask: 'progress mask',
                                                    position: [-175 + 17.5, 0],
                                                    image: 'selectorBarFill.png',
                                                },
                                                {
                                                    name: 'progress mask',
                                                    type: 'graphics',
                                                    draw: [['beginFill', [0x000000]], ['drawRect', [-175 / 2, 6 / 2, 175, 6]]],
                                                    position: [0, -6],
                                                    alpha: 0.5
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: 'betamount',
                                    position: [-550, 45],
                                    scale: [190 / 234, 90 / 106],
                                    type: 'sprite',
                                    childs: [
                                        {
                                            name: 'betamount text',
                                            type: 'text',
                                            text: '125',
                                            position: [0, -10],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '50px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                                padding: 20
                                            }
                                        },
                                        {
                                            name: 'betamount label',
                                            type: 'text',
                                            text: 'BET',
                                            position: [0, -65],
                                            styles: {
                                                fill: 0xffffff,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '35px'
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'total_bet bar',
                                    position: [650, 45],
                                    scale: [230 / 214, 90 / 88],
                                    type: 'sprite',
                                    childs: [
                                        {
                                            name: 'total_bet bar text',
                                            type: 'text',
                                            text: '0.1',
                                            scale: [214 / 230, 88 / 90],
                                            position: [0, -7],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '50px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                                padding: 20
                                            }
                                        },
                                        {
                                            name: 'total_bet label',
                                            type: 'text',
                                            text: 'COINS',
                                            scale: [214 / 230, 88 / 90],
                                            position: [0, -55],
                                            styles: {
                                                fill: 0xffffff,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '35px'
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'status bar',
                                    position: [0, -5],
                                    scale: [230 / 214, 90 / 88],
                                    childs: [
                                        {
                                            name: 'status bar text',
                                            type: 'text',
                                            text: 'Win Up to 50000 coins',
                                            scale: [214 / 230, 88 / 90],
                                            position: [0, -55],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '40px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                                padding: 20
                                            }
                                        }
                                    ]
                                },
                                {
                                    // width 1650
                                    name: 'control bottom background',
                                    type: 'graphics',
                                    position: [0, 114],
                                    draw: [['beginFill', 0x131313], ['drawRect', [-1920 / 2, -44 / 2, 1920, 44]]],
                                    childs: [
                                        {
                                            name: 'bottom background top',
                                            type: 'graphics',
                                            position: [0, -21],
                                            draw: [['beginFill', 0x322c33], ['drawRect', [-1920 / 2, -2 / 2, 1920, 2]]],
                                        },
                                        {
                                            name: 'btn_setting',
                                            type: 'sprite',
                                            scale: [1.5, 1.6],
                                            position: [-1650 / 2 + 20, 0],
                                            image: 'btn_setting'
                                        },
                                        {
                                            name: 'btn_speaker',
                                            type: 'sprite',
                                            scale: [1.5, 1.6],
                                            position: [-1650 / 2 + 20 + 50, 0],
                                            image: 'btn_speaker'
                                        },
                                        {
                                            name: 'audio_set button',
                                            type: 'sprite',
                                            image: 'btn_speaker_on',
                                            button: 'button',
                                            scale: [1.5, 1.6],
                                            position: [-1650 / 2 + 20 + 50, 0],
                                            childs: [
                                                {
                                                    name: 'audio_set button glow',
                                                    type: 'graphics'
                                                },
                                            ]
                                        },
                                        {
                                            name: 'btn_auto',
                                            type: 'sprite',
                                            scale: [1.5, 1.6],
                                            position: [-1650 / 2 + 20 + 50 + 70, 0],
                                            image: 'btn_auto',
                                            button: 'button',
                                            childs: [
                                                {
                                                    name: 'btn_auto glow',
                                                    type: 'sprite',
                                                    image: 'btn_autoGlow.png',
                                                    alpha: 0
                                                }
                                            ]
                                        },
                                        {
                                            name: 'autoamount text',
                                            type: 'text',
                                            text: '100',
                                            visible: false,
                                            position: [-1650 / 2 + 20 + 50 + 70 + 60, 0],
                                            styles: {
                                                fill: 0xffffff,
                                                fontFamily: 'Arial',
                                                fontSize: '20px'
                                            }
                                        },
                                        {
                                            name: 'btn_question',
                                            type: 'sprite',
                                            scale: [1.5, 1.6],
                                            position: [-1650 / 2 + 20 + 50 + 70 + 100, 0],
                                            image: 'btn_question'
                                        },
                                        {
                                            name: 'timer',
                                            position: [1650 / 2 - 50 - 100, 0],
                                            childs: [
                                                {
                                                    name: 'timer hour',
                                                    position: [-20, 0],
                                                    type: 'text',
                                                    text: '05',
                                                    styles: {
                                                        fontFamily: 'Arial',
                                                        fontSize: '22px',
                                                        fill: 0xffffff,
                                                    },
                                                },
                                                {
                                                    name: 'timer symbol',
                                                    position: [0, -2],
                                                    type: 'text',
                                                    text: ':',
                                                    visible: true,
                                                    styles: {
                                                        fontFamily: 'Arial',
                                                        fontSize: '22px',
                                                        fill: 0xffffff,
                                                    },
                                                },
                                                {
                                                    name: 'timer minute',
                                                    position: [20, 0],
                                                    type: 'text',
                                                    text: '05',
                                                    styles: {
                                                        fontFamily: 'Arial',
                                                        fontSize: '22px',
                                                        fill: 0xffffff,
                                                    },
                                                },
                                            ]
                                        },
                                        {
                                            name: 'logo',
                                            type: 'text',
                                            text: 'NET|ENT',
                                            position: [1650 / 2 - 50, 0],
                                            styles: {
                                                fontFamily: 'AGLettericaDemiCondensedC',
                                                fontSize: '22px',
                                                fill: 0x5b5b5b,
                                            }
                                        },
                                        {
                                            name: 'credits bar',
                                            type: 'text',
                                            position: [-200, 0],
                                            childs: [
                                                {
                                                    name: 'credits bar label',
                                                    type: 'text',
                                                    text: 'Cash: ',
                                                    position: [0, 0],
                                                    styles: {
                                                        fontFamily: 'Arial',
                                                        fontSize: '22px',
                                                        fill: 0xffffff,
                                                    },
                                                },
                                                {
                                                    name: 'credits bar text',
                                                    type: 'text',
                                                    text: '50000$',
                                                    position: [75, 0],
                                                    styles: {
                                                        align: 'right',
                                                        fontFamily: 'Arial',
                                                        fontSize: '22px',
                                                        fill: 0xffffff,
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            name: 'bet bar',
                                            position: [0, 0],
                                            childs: [
                                                {
                                                    name: 'bet bar label',
                                                    type: 'text',
                                                    text: 'Bet: ',
                                                    styles: {
                                                        fontFamily: 'Arial',
                                                        fontSize: '22px',
                                                        fill: 0xffffff,
                                                    },
                                                },
                                                {
                                                    name: 'bet bar text',
                                                    type: 'text',
                                                    text: '0.10',
                                                    position: [50, 0],
                                                    styles: {
                                                        align: 'left',
                                                        fontFamily: 'Arial',
                                                        fontSize: '22px',
                                                        fill: 0xffffff,
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            name: 'win bar',
                                            drawed: 0,
                                            position: [200, 0],
                                            childs: [
                                                {
                                                    name: 'win bar label',
                                                    type: 'text',
                                                    text: 'Win: ',
                                                    position: [0, 0],
                                                    styles: {
                                                        fontFamily: 'Arial',
                                                        fontSize: '22px',
                                                        fill: 0xffffff,
                                                    },
                                                },
                                                {
                                                    name: 'win bar text',
                                                    type: 'text',
                                                    text: '50000$',
                                                    position: [50, 0],
                                                    styles: {
                                                        fontFamily: 'Arial',
                                                        fontSize: '22px',
                                                        fill: 0xffffff,
                                                    },
                                                }
                                            ]
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'LogoContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'logo',
                    type: 'sprite',
                    scale: [1.5, 1.6],
                    position: [0, -1 * 1080 / 2 + 70],
                    image: 'logo.png',
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
                            type: 'graphics',
                            position: [0, 0],
                            // position: [670 + 45, 661 - (1080 / 2) - 45],
                            draw: [['beginFill', 0xffffff], ['drawRoundedRect', [-930 / 2, -310 / 2, 930, 310, 40]]],
                            alpha: 0.9,
                            childs: [
                                {
                                    name: 'automenu items container border',
                                    type: 'graphics',
                                    draw: [['beginFill', 0xffffff], ['drawRoundedRect', [-930 / 2, -310 / 2, 930, 310, 40]]],
                                },
                                {
                                    name: 'automenu title',
                                    type: 'text',
                                    text: 'Number of Auto Spins',
                                    position: [0, -120],
                                    styles: {
                                        fontFamily: 'AGLettericaDemiCondensedC',
                                        fontSize: '33px',
                                        padding: 20,
                                        fill: 0x000000
                                    }
                                },
                                {
                                    name: 'button automenu_50',
                                    type: 'graphics',
                                    pressed: true,
                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                    button: 'button',
                                    step: 50,
                                    position: [160 * 2 + 20 * 2, -50],
                                    scale: [1, 1],
                                    childs: [
                                        {
                                            name: 'button automenu_50 glow',
                                            type: 'graphics',
                                            draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_50 selected',
                                            type: 'graphics',
                                            draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
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
                                                fill: 0x000000
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'button automenu_40',
                                    type: 'graphics',
                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                    step: 40,
                                    position: [160 + 20, -50],
                                    button: 'button',
                                    scale: [1, 1],
                                    childs: [
                                        {
                                            name: 'button automenu_40 glow',
                                            type: 'graphics',
                                            draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_40 selected',
                                            type: 'graphics',
                                            draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
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
                                                fill: 0x000000
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'button automenu_30',
                                    type: 'graphics',
                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                    button: 'button',
                                    step: 30,
                                    position: [0, -50],
                                    scale: [1, 1],
                                    childs: [
                                        {
                                            name: 'button automenu_30 glow',
                                            type: 'graphics',
                                            draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_30 selected',
                                            type: 'graphics',
                                            draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
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
                                                fill: 0x000000
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'button automenu_20',
                                    type: 'graphics',
                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                    step: 20,
                                    button: 'button',
                                    position: [-160 - 20, -50],
                                    scale: [1, 1],
                                    childs: [
                                        {
                                            name: 'button automenu_20 glow',
                                            type: 'graphics',
                                            draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_20 selected',
                                            type: 'graphics',
                                            draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
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
                                                fill: 0x000000
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'button automenu_10',
                                    type: 'graphics',
                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                    button: 'button',
                                    step: 10,
                                    position: [-(160 * 2 + 20 * 2), -50],
                                    scale: [1, 1],
                                    childs: [
                                        {
                                            name: 'button automenu_10 glow',
                                            type: 'graphics',
                                            draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_10 selected',
                                            type: 'graphics',
                                            draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
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
                                                fill: 0x000000
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'center_line',
                                    type: 'graphics',
                                    position: [0, 0],
                                    scale: [1, 1],
                                    draw: [['beginFill', 0xeeeeee], ['drawRect', [-870 / 2, -2 / 2, 870, 2]]]
                                },
                                {
                                    name: 'autospin comment',
                                    type: 'text',
                                    position: [0, 50],
                                    scale: [870 / 1020, 1],
                                    text: '\"Auto Spin stops automatically if cash amount is smaller than bet amount\"',
                                    styles: {
                                        align: 'center',
                                        fontFamily: 'Arial',
                                        fontSize: '25px',
                                        stroke: 'black',
                                        fill: 0x000000
                                    }
                                },
                                {
                                    name: 'autospin_dialog close button',
                                    type: "graphics",
                                    button: 'button',
                                    draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -65 / 2, 160, 65, 5]]],
                                    position: [-100, 115],
                                    childs: [
                                        {
                                            name: 'autospin_dialog close button glow',
                                            type: "graphics",
                                            draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -65 / 2, 160, 65, 5]]],
                                            position: [0, 0]
                                        },
                                        {
                                            name: 'close button text',
                                            type: 'text',
                                            text: 'Close',
                                            scale: [0.8, 1],
                                            position: [0, 0],
                                            styles: {
                                                fontFamily: 'Arial',
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
                                    draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -65 / 2, 160, 65, 5]]],
                                    position: [100, 115],
                                    childs: [
                                        {
                                            name: 'refresh start button glow',
                                            type: 'graphics',
                                            draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -65 / 2, 160, 65, 5]]],
                                            position: [0, 0]
                                        },
                                        {
                                            name: 'refresh button text',
                                            type: 'text',
                                            text: 'Start',
                                            scale: [0.8, 1],
                                            position: [0, 0],
                                            styles: {
                                                fontFamily: 'Arial',
                                                fontSize: '28px',
                                                fill: 0xffffff
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
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'infocontainer overlay rect',
                    event: 'infocontainer overlay',
                    type: 'graphics',
                    preventDefault: false,
                    draw: [['beginFill', 0x000000], ['drawRect', [-1920 / 2, -1080 / 2, 1920, 1080]]],
                    alpha: 0.5,
                },
                {
                    name: 'info background',
                    type: 'sprite',
                    image: 'help_back',
                    event: 'infobackground',
                    position: [7, -112],
                    scale: [1.55, 1.5],
                },
                {
                    name: 'info container wrapper',
                    childs: [
                        {
                            name: 'info control container',
                            childs: [
                                {
                                    name: 'info close button',
                                    type: 'sprite',
                                    image: 'close_down',
                                    position: [750, -400],
                                    scale: [1.4, 1.4],
                                    button: 'button',
                                    childs: [
                                        {
                                            name: 'info close button glow',
                                            type: 'sprite',
                                            image: 'close_over',
                                            alpha: 0
                                        }
                                    ]
                                },
                                {
                                    name: 'info prev button',
                                    type: 'sprite',
                                    image: 'left_down',
                                    position: [-725, 230],
                                    scale: [1.5, 1.5],
                                    button: 'button',
                                    childs: [
                                        {
                                            name: 'info prev button glow',
                                            type: 'sprite',
                                            image: 'left_over',
                                            alpha: 0
                                        }
                                    ]
                                },
                                {
                                    name: 'info enter button',
                                    type: 'sprite',
                                    image: 'enter_down',
                                    position: [-645, 230],
                                    scale: [1.5, 1.5],
                                    button: 'button',
                                    childs: [
                                        {
                                            name: 'info enter button glow',
                                            type: 'sprite',
                                            image: 'enter_over',
                                            alpha: 0
                                        }
                                    ]
                                },
                                {
                                    name: 'info next button',
                                    type: 'sprite',
                                    image: 'right_down',
                                    position: [-565, 230],
                                    scale: [1.5, 1.5],
                                    button: 'button',
                                    childs: [
                                        {
                                            name: 'info next button glow',
                                            type: 'sprite',
                                            image: 'right_over',
                                            alpha: 0
                                        }
                                    ]
                                },
                                {
                                    name: 'indicator 1',
                                    type: 'sprite',
                                    image: 'circle',
                                    event: 'indicator',
                                    position: [-15, 230],
                                    scale: [1.5, 1.5]
                                },
                                {
                                    name: 'indicator 2',
                                    type: 'sprite',
                                    image: 'circle_dark',
                                    event: 'indicator',
                                    position: [15, 230],
                                    scale: [1.5, 1.5]
                                },
                                {
                                    name: 'info content 2',
                                    type: 'text',
                                    text: 'The coin payout values are based on bet level 1.\nOnly the hightest win per active bet line from both ways is paid.\nBet line wins pay when in succession from both leftmost to right and rightmost to left.\nMalfunction voids all pays and plays.',
                                    position: [0, 150],
                                    styles: {
                                        align: 'center',
                                        fill: 0xffffff,
                                        fontFamily: 'Arial',
                                        fontSize: '20px'
                                    }
                                },
                            ]
                        },
                        {
                            name: 'info container 1',
                            visible: true,
                            childs: [
                                {
                                    name: 'container1 background',
                                    position: [0, -120],
                                    scale: [1.5, 1.5],
                                    childs: [
                                        {
                                            name: 'star 1',
                                            type: 'sprite',
                                            image: 'paytableStar.png',
                                            position: [-380, -120]
                                        },
                                        {
                                            name: 'star 2',
                                            type: 'sprite',
                                            image: 'paytableStar.png',
                                            position: [300, -150],
                                            rotation: 38 / 180 * Math.PI
                                        },
                                        {
                                            name: 'star 3',
                                            type: 'sprite',
                                            image: 'Wild_Star.png',
                                            position: [-450, 50],
                                            scale: [0.5, 0.5],
                                            rotation: -25 / 180 * Math.PI
                                        },
                                        {
                                            name: 'star 4',
                                            type: 'sprite',
                                            image: 'Wild_Star.png',
                                            position: [400, 150],
                                            scale: [0.5, 0.5],
                                            rotation: -80 / 180 * Math.PI
                                        },
                                        {
                                            name: 'star 5',
                                            type: 'sprite',
                                            scale: [0.8, 0.8],
                                            image: 'paytableStar.png',
                                            position: [-200, 100],
                                            rotation: 50 / 180 * Math.PI
                                        },
                                        {
                                            name: 'star 6',
                                            type: 'sprite',
                                            scale: [0.8, 0.8],
                                            image: 'paytableStar.png',
                                            position: [200, 50],
                                            rotation: 270 / 180 * Math.PI
                                        },
                                    ]
                                },
                                {
                                    name: 'info container1 label',
                                    type: 'sprite',
                                    image: 'starburstWild.png',
                                    position: [0, -370],
                                    scale: [1.5, 1.5],
                                    styles: {
                                        fill: [0xfbcb00, 0xfd9400],
                                        fontFamily: 'Oswald-Bold',
                                        fontSize: '60px'
                                    }
                                },
                                {
                                    name: 'info content 1',
                                    type: 'text',
                                    position: [0, -270],
                                    text: 'SUBSTITUTE FOR ALL SYMBOLS.\nAPPEAR ON REELS 2.3 AND 4.\nEXPAN OVER THE REEL AND TRIGGER A RE-SPIN.\nTHE MAXIMUM NUMBER OF RE-SPINS IS 3.',
                                    styles: {
                                        align: 'center',
                                        fill: 0xffffff,
                                        fontFamily: 'Bauhaus_93_regular',
                                        fontSize: '30px'
                                    }
                                },
                                {
                                    name: 'wild_paytable',
                                    type: 'video',
                                    position: [0, -45],
                                    video: 'wild_paytable',
                                    scale: [1.5, 1.5],
                                    autoplay: true
                                },
                            ]
                        },
                        {
                            name: 'info container 2',
                            visible: false,
                            childs: [
                                {
                                    name: 'symbol_bar3',
                                    type: 'sprite',
                                    image: 'SYM3.png',
                                    position: [-530, -280],
                                    scale: [1.2, 1.2],
                                    childs: [
                                        {
                                            name: "3five",
                                            type: 'text',
                                            text: '5',
                                            position: [100, -40],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '35px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                            },
                                            childs: [
                                                {
                                                    name: 'real_3five',
                                                    type: 'text',
                                                    text: '250',
                                                    position: [50, 0],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontFamily: 'Bauhaus_93_regular',
                                                        fontSize: '35px',
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            name: "3four",
                                            type: 'text',
                                            text: '4',
                                            position: [100, 0],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '35px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                            },
                                            childs: [
                                                {
                                                    name: 'real_3five',
                                                    type: 'text',
                                                    text: '200',
                                                    position: [50, 0],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontFamily: 'Bauhaus_93_regular',
                                                        fontSize: '35px',
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            name: "3three",
                                            type: 'text',
                                            text: '3',
                                            position: [100, 40],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '35px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                            },
                                            childs: [
                                                {
                                                    name: 'real_3five',
                                                    type: 'text',
                                                    text: '50',
                                                    position: [50, 0],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontFamily: 'Bauhaus_93_regular',
                                                        fontSize: '35px',
                                                    },
                                                }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: 'symbol_bar4',
                                    type: 'sprite',
                                    image: 'SYM4.png',
                                    position: [-180, -280],
                                    scale: [1.2, 1.2],
                                    childs: [
                                        {
                                            type: 'text',
                                            text: '5',
                                            position: [100, -40],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '35px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '120',
                                                    position: [50, 0],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontFamily: 'Bauhaus_93_regular',
                                                        fontSize: '35px',
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '4',
                                            position: [100, 0],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '35px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '60',
                                                    position: [50, 0],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontFamily: 'Bauhaus_93_regular',
                                                        fontSize: '35px',
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '3',
                                            position: [100, 40],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '35px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '25',
                                                    position: [50, 0],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontFamily: 'Bauhaus_93_regular',
                                                        fontSize: '35px',
                                                    },
                                                }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: 'symbol_bar5',
                                    type: 'sprite',
                                    image: 'SYM5.png',
                                    position: [180, -280],
                                    scale: [1.2, 1.2],
                                    childs: [
                                        {
                                            type: 'text',
                                            text: '5',
                                            position: [100, -40],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '35px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '60',
                                                    position: [50, 0],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontFamily: 'Bauhaus_93_regular',
                                                        fontSize: '35px',
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '4',
                                            position: [100, 0],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '35px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '25',
                                                    position: [50, 0],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontFamily: 'Bauhaus_93_regular',
                                                        fontSize: '35px',
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '3',
                                            position: [100, 40],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '35px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '10',
                                                    position: [50, 0],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontFamily: 'Bauhaus_93_regular',
                                                        fontSize: '35px',
                                                    },
                                                }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: 'symbol_bar6',
                                    type: 'sprite',
                                    image: 'SYM6.png',
                                    position: [480, -280],
                                    scale: [1.2, 1.2],
                                    childs: [
                                        {
                                            type: 'text',
                                            text: '5',
                                            position: [100, -40],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '35px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '50',
                                                    position: [50, 0],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontFamily: 'Bauhaus_93_regular',
                                                        fontSize: '35px',
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '4',
                                            position: [100, 0],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '35px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '20',
                                                    position: [50, 0],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontFamily: 'Bauhaus_93_regular',
                                                        fontSize: '35px',
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '3',
                                            position: [100, 40],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '35px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '8',
                                                    position: [50, 0],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontFamily: 'Bauhaus_93_regular',
                                                        fontSize: '35px',
                                                    },
                                                }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: 'symbol_bar4',
                                    type: 'sprite',
                                    image: 'SYM7.png',
                                    position: [-350, -70],
                                    scale: [1.2, 1.2],
                                    childs: [
                                        {
                                            type: 'text',
                                            text: '5',
                                            position: [100, -40],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '35px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '40',
                                                    position: [50, 0],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontFamily: 'Bauhaus_93_regular',
                                                        fontSize: '35px',
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '4',
                                            position: [100, 0],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '35px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '15',
                                                    position: [50, 0],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontFamily: 'Bauhaus_93_regular',
                                                        fontSize: '35px',
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '3',
                                            position: [100, 40],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '35px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '7',
                                                    position: [50, 0],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontFamily: 'Bauhaus_93_regular',
                                                        fontSize: '35px',
                                                    },
                                                }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: 'symbol_bar5',
                                    type: 'sprite',
                                    image: 'SYM8.png',
                                    position: [0, -70],
                                    scale: [1.2, 1.2],
                                    childs: [
                                        {
                                            type: 'text',
                                            text: '5',
                                            position: [100, -40],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '35px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '25',
                                                    position: [50, 0],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontFamily: 'Bauhaus_93_regular',
                                                        fontSize: '35px',
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '4',
                                            position: [100, 0],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '35px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '10',
                                                    position: [50, 0],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontFamily: 'Bauhaus_93_regular',
                                                        fontSize: '35px',
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '3',
                                            position: [100, 40],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '35px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '5',
                                                    position: [50, 0],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontFamily: 'Bauhaus_93_regular',
                                                        fontSize: '35px',
                                                    },
                                                }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: 'symbol_bar6',
                                    type: 'sprite',
                                    image: 'SYM9.png',
                                    position: [300, -70],
                                    scale: [1.2, 1.2],
                                    childs: [
                                        {
                                            type: 'text',
                                            text: '5',
                                            position: [100, -40],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '35px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '25',
                                                    position: [50, 0],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontFamily: 'Bauhaus_93_regular',
                                                        fontSize: '35px',
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '4',
                                            position: [100, 0],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '35px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '10',
                                                    position: [50, 0],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontFamily: 'Bauhaus_93_regular',
                                                        fontSize: '35px',
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: '3',
                                            position: [100, 40],
                                            styles: {
                                                fill: 0xffffb5,
                                                fontFamily: 'Bauhaus_93_regular',
                                                fontSize: '35px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                            },
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '5',
                                                    position: [50, 0],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontFamily: 'Bauhaus_93_regular',
                                                        fontSize: '35px',
                                                    },
                                                }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: 'betlines',
                                    type: 'sprite',
                                    image: 'betlines',
                                    position: [0, 60],
                                    scale: [1.5, 1.5],
                                }
                            ]
                        }
                    ]
                },
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

        'Gameplay infocontainer overlay up': function(container, e) {
            this['InfoContainer'].visible = false;
            this['MainContainer'].visible = true;
        },

        'Gameplay infobackground up': function(container, e) {

        },

        'Gameplay indicator up': function(container, e) {
            if(container.name.substr(-1) === "1") {
                this.helpPageIndex = 1;
                this.showHelpPage(1);
                this.hideHelpPage(2);
                this['indicator 1'].texture = this.getTexture("circle");
                this['indicator 2'].texture = this.getTexture("circle_dark");
            } else {
                this.helpPageIndex = 2;
                this.hideHelpPage(1);
                this.showHelpPage(2);
                this['indicator 1'].texture = this.getTexture("circle_dark");
                this['indicator 2'].texture = this.getTexture("circle");
            }
        },

        'overlay down': function () {
            MRAID.markMeaningfulInteraction();
            this['overlay'].visible = false;
        },

        'Gameplay build': function () {

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
                amount: 0.1,
                drawed: 0.1,
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

            this.levels = {
                value: 1,
                step: 1
            };

            this.coins = {
                value: 0.01,
                step: 1
            };

            this.line_value_list = 10;
            this.level_value_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            this.level_progress_step = this['level progress back'].width / this.level_value_list.length;
            this['level progress back'].x = -this['level progress back'].width + this.level_progress_step;

            this.coin_value_list = [0.01, 0.05, 0.1, 0.25, 0.5, 1, 2];

            this.coin_progress_step = this['coin progress back'].width / this.coin_value_list.length;

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

            this.staticTweens = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],
                show: () => {
                    this.staticTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].gotoAndPlay(0);
                            }
                        });
                        tween.play();
                    });
                },
                hide: () => {
                    this.staticTweens.showTweens.forEach((tween) => {
                        tween.stop();
                    });
                    this.staticTweens.showTweens = [];
                    this.staticTweens.hideTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.staticTweens.hideTweens = [];
                },
                hideQuick: () => {
                    this.staticTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].stop();
                            }
                        });
                        tween.stop();
                        tween = null;
                    });
                    this.staticTweens.showTweens = [];
                    this.staticTweens.hideTweens.forEach((tween) => {
                        tween.stop();
                        tween = null;
                    });
                    this.staticTweens.hideTweens = [];
                    this.staticTweens.hideQuickTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.staticTweens.hideQuickTweens = [];
                }
            };

            this.passiveTweens = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],
                show: () => {
                    this.passiveTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].gotoAndPlay(0);
                            }
                        });
                        tween.play();
                    });
                },
                hide: () => {
                    this.passiveTweens.showTweens.forEach((tween) => {
                        tween.stop();
                    });
                    this.passiveTweens.showTweens = [];
                    this.passiveTweens.hideTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.passiveTweens.hideTweens = [];
                },
                hideQuick: () => {
                    this.passiveTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].stop();
                            }
                        });
                        tween.stop();
                        tween = null;
                    });
                    this.passiveTweens.showTweens = [];
                    this.passiveTweens.hideTweens.forEach((tween) => {
                        tween.stop();
                        tween = null;
                    });
                    this.passiveTweens.hideTweens = [];
                    this.passiveTweens.hideQuickTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.passiveTweens.hideQuickTweens = [];
                }
            };

            this.flashTweens = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],
                show: () => {
                    this.flashTweens.showTweens.forEach((tween, index) => {
                        tween.play();
                        /*var self = this;
                        var loop = setInterval(function() {
                            if(index < self.flashTweens.showTweens.length - 1) {
                                tween.play();
                            } else {
                                clearInterval(loop);
                            }
                        }, 0);*/
                        /* setTimeout(function run() {
                             if(index === self.flashTweens.showTweens.length - 1)
                                 return;
                             setTimeout(run, 100);
                         }, 100);*/
                    });
                },
                hide: () => {
                    this.flashTweens.showTweens.forEach((tween) => {
                        tween.stop();
                    });
                    this.flashTweens.showTweens = [];
                    this.flashTweens.hideTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.flashTweens.hideTweens = [];
                },
                hideQuick: () => {
                    this.flashTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].stop();
                            }
                        });
                        tween.stop();
                        tween = null;
                    });
                    this.flashTweens.showTweens = [];
                    this.flashTweens.hideTweens.forEach((tween) => {
                        tween.stop();
                        tween = null;
                    });
                    this.flashTweens.hideTweens = [];
                    this.flashTweens.hideQuickTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.flashTweens.hideQuickTweens = [];
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
                                    for (var i = 1; i < container.children.length; i++)
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

            this.BOARD_SIZE = [1225, 690];

            this.COLUMNS_COUNT = 5;
            this.ROWS_COUNT = 3;

            this.REEL_SYMBOLS_COUNT = this.ROWS_COUNT + this.ROWS_COUNT + 1;

            this.COLUMNS_OFFSET = 260;
            this.ROWS_OFFSET = 230; // symbols offset in the reel

            this.REELS_STOP_TIMEOUT = 1000;
            this.REELS_STOP_DELAY = 300;

            this.REELS_START_TIMEOUT = 0;
            this.REELS_START_DELAY = 150;

            this.SYMBOLS_SCALE = [1.4, 1.45];

            this.reels = [];
            let init_card = [
                [0, 0, 0],
                [6, 6, 6],
                [4, 4, 4],
                [0, 0, 0],
                [4, 4, 4]
            ];

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
                        position: [mostLeft + this.COLUMNS_OFFSET * i, -1 * (this.ROWS_COUNT - 1) / 2 * this.ROWS_OFFSET - (this.ROWS_COUNT + 1) * this.ROWS_OFFSET]
                    });

                let reelSpriteHighlight = this.buildChild(this['game board symbols highlighted container'],
                    {
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
                        scale: this.SYMBOLS_SCALE,
                        position: [0, this.ROWS_OFFSET * j]
                    });

                    this.buildChild(this['reel highlighted ' + i], {
                        name: 'reel ' + i + ' symbol highlighted container ' + j,
                        scale: [1, 170 / 150],
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

                    this.buildChild(this['reel ' + i + ' symbol highlighted container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' highlighttext',
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

            this.setValues();

            this.playSound("background_music", {}, {volume: this.sound_mode ? 0.5 : 0, loop: true}, sound => {
                this.backSound = sound;
            });
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

        'Gameplay update tick 30': function () {
            if (this['timer symbol'].visible === true)
                this['timer symbol'].visible = false;
            else
                this['timer symbol'].visible = true;
            this.updateTimerpanel();
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

        'Gameplay betindicator over': function (container, e) {
            var name = container.name;
            var temp_name = name.split(" ");
            var line_name = temp_name[0] + " " + temp_name[2];
            var linebet_name_left = temp_name[0] + " left " + temp_name[2];
            var linebet_name_right = temp_name[0] + " right " + temp_name[2];
            this[linebet_name_left].alpha = 1;
            this[linebet_name_right].alpha = 1;
            this[line_name].visible = true;
        },
        'Gameplay betindicator out': function (container, e) {
            var name = container.name;
            var temp_name = name.split(" ");
            var line_name = temp_name[0] + " " + temp_name[2];
            var linebet_name_left = temp_name[0] + " left " + temp_name[2];
            var linebet_name_right = temp_name[0] + " right " + temp_name[2];
            this[linebet_name_left].alpha = 0;
            this[linebet_name_right].alpha = 0;
            this[line_name].visible = false;
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

        'Gameplay new jackpot': function (data) {

            App.escalibur.Jackpot.value = parseFloat(data.amount);

            this.drawJackpot();

        },
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

    spin: function () {

        this.winAnimationMode = false;
        this.is_bonus = false;
        // this.hideLinecontainer();
        if (this.winSound !== null) {
            this.playSound('reelSpin', {}, {
                volume: this.sound_mode ? 0.5 : 0,
                loop: true
            }, sound => {
                this.winSound = sound;
            });
        }

        if (this.credits.value - this.bet.amount >= 0) {
            this.credits.value -= this.bet.amount;
            this.credits.drawed = this.credits.value;
            this.server_win_amount.value = 0;
            this.server_win_amount.drawed = 0;
            // this['win bar'].drawed = 0;

            this.refreshPanelValues();

            this.creditsNotInc = true;
        } else {
            this['button auto'].texture = this.getTexture(this.autobuttonNormalbg);
            this['button auto glow'].texture = this.getTexture(this.autoButtonGlowbg);
            this.auto_mode = false;
            this.current_auto_amount = 0;
            return;
        }

        this.first_reel = false;
        this.second_reel = false;
        this.third_reel = false;

        this['start button'].texture = this.getTexture(this.startbuttonDisablebg);
        this['maxbet button'].texture = this.getTexture(this.maxbetButtonDisablebg);
        this['button auto'].texture = this.getTexture(this.autobuttonNormalbg);

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
        this.staticTweens.hide();
        this.staticTweens.hideQuick();
        this.passiveTweens.hide();
        this.passiveTweens.hideQuick();
        this.flashTweens.hide();
        this.flashTweens.hideQuick();

        // for (var i = 1; i < 6; i++)
        //     this['line' + i.toString()].alpha = 0.5;

        var self = this;

        this.spinCombination = null;

        if (this.auto_mode === true) {
            if (this.current_auto_amount === 0) {
                this['button auto'].texture = this.getTexture(this.autobuttonNormalbg);
                this['button auto glow'].texture = this.getTexture(this.autoButtonGlowbg);
                this['autoamount text'].visible = false;
                this.auto_mode = false;
                return;
            }

            this.current_auto_amount--;
            if (this.current_auto_amount === 0) {
                this['button auto'].texture = this.getTexture(this.autobuttonNormalbg);
                this['button auto glow'].texture = this.getTexture(this.autoButtonGlowbg);
                this['autoamount text'].visible = false;
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
                this.reels[i].speed = 80;

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

                }, 80);

            }, this.REELS_START_TIMEOUT + i * this.REELS_START_DELAY);

        }

        if (this.currentSound) {
            this.currentSound.stop();
            this.currentSound = false;
        }
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

        if (this.winSound) {
            this.winSound.stop();
            this.winSound = false;
        }
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

                    this.staticTweens.showTweens.push(this.tween({
                        name: 'win-animation',
                        set: [
                            ['alpha', 0],
                            ['visible', false]
                        ]
                    }, activeSprites));

                    this.staticTweens.showTweens[this.staticTweens.showTweens.length - 1].stop();
                    this.staticTweens.hideTweens.push(this.tween({
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

                    this.staticTweens.hideTweens[this.staticTweens.hideTweens.length - 1].stop();

                    this.staticTweens.showTweens.push(this.tween({
                        name: 'win-animation',
                        set: [
                            ['alpha', 1],
                            ['visible', true],
                            ['scale', this.SYMBOLS_SCALE]
                        ]
                    }, highlightSprites));

                    this.staticTweens.showTweens[this.staticTweens.showTweens.length - 1].stop();

                    this.staticTweens.hideTweens.push(this.tween({
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

                    this.staticTweens.hideTweens[this.staticTweens.hideTweens.length - 1].stop();
                    this.staticTweens.show();

                    let temptimeout = setTimeout(() => {
                        this.staticTweens.hide();
                        this.staticTweens.showTweens = [];
                        this.staticTweens.hideTweens = [];
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

        this.playSound('reelBounce', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});

        this.state = 'spinStop';

    },

    completeSpin: function () {

        this['start button'].texture = this.getTexture(this.startbuttonNormalbg);
        this['start button glow'].texture = this.getTexture(this.startbuttonGlowbg);
        this['maxbet button'].texture = this.getTexture(this.maxbetbuttonNormalbg);
        this['button auto'].texture = this.getTexture(this.autobuttonNormalbg);

        if (this.spinCombination) {

            if (!this.is_bonus) {
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
                    this.animatePassiveLines(this.spinCombination.winData);

                    this.credits.value += this.server_win_amount.value;
                    this.credits.drawed = this.credits.value;

                    this.server_win_amount.drawed = this.server_win_amount.value;
                    this.refreshPanelValues();

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

    updateTimerpanel: function () {
        var date = new Date;
        var h = date.getHours();
        var m = date.getMinutes();
        h = (h < 10 ? "0" : "") + h;
        m = (m < 10 ? "0" : "") + m;

        this['timer hour'].text = h;
        this['timer minute'].text = m;
    },

    setSymbolTexture: function (container, image) {

        let name = container.replace('container ', '');

        this[name + ' crisp'].texture = this.getTexture(image);
        this[name + ' blur'].texture = this.getTexture(image.replace(".png", "-BLURRED.png"));

        this[name + ' highlight'].removeChildren();
        this[name + ' highlight'].scale = 0;
        this[name + ' highlight'].visible = false;
        this[name + ' highlight'].alpha = 0;
        this.buildChild(this[name + ' highlight'], {
            name: name + ' highlight animation',
            type: 'sprite',
            visible: true,
            alpha: 1,
            image: image.replace(".png", "_BURSTS.png"),
        });

        this[name + ' highlighttext'].removeChildren();
        this.buildChild(this[name + ' highlighttext'], {
            name: name + ' highlight animation1',
            type: 'text',
            text: '35',
            styles: {
                fill: 0xffffb5,
                fontFamily: 'Bauhaus_93_regular',
                fontSize: '90px',
                dropShadow: true,
                dropShadowAngle: 0.5,
                dropShadowColor: 0x000000,
                dropShadowDistance: 2,
                dropShadowBlur: 25,
                lineJoin: "bevel",
                stroke: "#f2c223",
                strokeThickness: 5,
                padding: 20
            }
        });
        /*let frames = [];
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
        });*/
    },

    setSymbolsBlur: function (container, state) {

        let name = container.replace('container ', '');

        this[name + ' crisp'].visible = false;
        this[name + ' blur'].visible = false;

        if (state) this[name + ' blur'].visible = true;
        else this[name + ' crisp'].visible = true;

    },

    tweensBySprites: function (activeSprites, passiveSprites, highlightSprites, textSprites, lineSprites, textValue, lineNum, callback) {

        this.currentTweens.showTweens = [];
        this.currentTweens.hideTweens = [];
        this.currentTweens.hideQuickTweens = [];

        this.staticTweens.showTweens = [];
        this.staticTweens.hideTweens = [];
        this.staticTweens.hideQuickTweens = [];
        if (this.state !== 'ready' || this.winAnimationMode === false) {
            callback = null;
            return;
        }

        if (this.state === 'ready') {

            this[textSprites[0]].children[0].text = textValue.toString();

            this.currentTweens.showTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 1, 500],
                    ['visible', true, 500],
                    ['scale', 1, 500]
                ]
            }, textSprites));

            this.currentTweens.showTweens[this.currentTweens.showTweens.length - 1].stop();
            this.currentTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['scale', 0],
                    ['alpha', 0, 100]
                ],
                next: {
                    set: [
                        ['visible', false],
                        ['alpha', 0]
                    ]
                }
            }, textSprites));

            this.currentTweens.hideTweens[this.currentTweens.hideTweens.length - 1].stop();

            this.currentTweens.hideQuickTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['scale', 0, 50, 0, Back.easeIn.config(2)],
                    ['alpha', 0, 50, 0]
                ],
                next: {
                    set: [
                        ['visible', false],
                        ['alpha', 0]
                    ]
                }
            }, textSprites));

            this.currentTweens.hideQuickTweens[this.currentTweens.hideQuickTweens.length - 1].stop();
        }

        //Passivesprite animation
        /*if (this.state === 'ready') {

            this.staticTweens.showTweens.push(this.tween({
                name: 'win-animation',
                to: ['alpha', 0.35, 300]
            }, passiveSprites));

            this.staticTweens.showTweens[this.staticTweens.showTweens.length - 1].stop();

            this.staticTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: ['alpha', 1, 300, 500]
            }, passiveSprites));

            this.staticTweens.hideTweens[this.staticTweens.hideTweens.length - 1].stop();

            this.staticTweens.hideQuickTweens.push(this.tween({
                name: 'win-animation',
                to: ['alpha', 1, 50, 0]
            }, passiveSprites));

            this.staticTweens.hideQuickTweens[this.staticTweens.hideQuickTweens.length - 1].stop();

        }*/

        //line animation
        {
            this.staticTweens.showTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 1, 50],
                    ['visible', true, 50]
                ]
            }, lineSprites));

            this.staticTweens.showTweens[this.staticTweens.showTweens.length - 1].stop();
            this.staticTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 0, 50]
                ],
                next: {
                    set: [
                        ['visible', false],
                        ['alpha', 0]
                    ]
                }
            }, lineSprites));

            this.staticTweens.hideTweens[this.staticTweens.hideTweens.length - 1].stop();

            this.staticTweens.hideQuickTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 0, 50, 0]
                ],
                next: {
                    set: [
                        ['visible', false],
                        ['alpha', 0]
                    ]
                }
            }, lineSprites));

            this.staticTweens.hideQuickTweens[this.staticTweens.hideQuickTweens.length - 1].stop();
        }

        if (this.state === 'ready') {
            if (this.currentTweens.showTweens.length > 0)
                this.currentTweens.show();
            if (this.staticTweens.showTweens.length > 0)
                this.staticTweens.show();
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


    allanimatepassive: function (activeSprites, passiveSprites) {

        this.passiveTweens.showTweens = [];
        this.passiveTweens.hideTweens = [];
        this.passiveTweens.hideQuickTweens = [];
        this.flashTweens.showTweens = [];
        this.flashTweens.hideTweens = [];
        this.flashTweens.hideQuickTweens = [];
        if (this.state !== 'ready' || this.winAnimationMode === false) {
            callback = null;
            return;
        }

        //Passivesprite animation
        if (this.state === 'ready') {

            this.passiveTweens.showTweens.push(this.tween({
                name: 'win-animation',
                to: ['alpha', 0.35, 300]
            }, passiveSprites));

            this.passiveTweens.showTweens[this.passiveTweens.showTweens.length - 1].stop();

            this.passiveTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: ['alpha', 1, 300, 500]
            }, passiveSprites));

            this.passiveTweens.hideTweens[this.passiveTweens.hideTweens.length - 1].stop();

            this.passiveTweens.hideQuickTweens.push(this.tween({
                name: 'win-animation',
                to: ['alpha', 1, 50, 0]
            }, passiveSprites));

            this.passiveTweens.hideQuickTweens[this.passiveTweens.hideQuickTweens.length - 1].stop();

        }

        //flash Animation
        if (this.state === 'ready') {
            for (var i = 0; i < activeSprites.length; i++) {
                this.flashTweens.showTweens.push(this.tween({
                    name: 'win-animation',
                    to: [
                        ['alpha', 1],
                        ['visible', true],
                        ['scale', 0.8, 100]
                    ],
                }, activeSprites[i]));
            }

            this.flashTweens.showTweens[this.flashTweens.showTweens.length - 1].stop();

            this.flashTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 0, 50],
                    ['scale', 0, 50]
                ]
            }, activeSprites));

            this.flashTweens.hideTweens[this.flashTweens.hideTweens.length - 1].stop();

            this.flashTweens.hideQuickTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 0, 50],
                    ['scale', 0, 50]
                ]
            }, activeSprites));

            this.flashTweens.hideQuickTweens[this.flashTweens.hideQuickTweens.length - 1].stop();
        }


        if (this.state === 'ready') {
            if (this.passiveTweens.showTweens.length > 0)
                this.passiveTweens.show();
            if (this.flashTweens.showTweens.length > 0)
                this.flashTweens.show();
        }
        setTimeout(() => {
            this.flashTweens.hide();
        }, 1500);

    },


    animateLine: function (line, callback) {

        if (this.state !== 'ready' || this.winAnimationMode === false) {
            callback = null;
            return;
        }

        let highlightSprites = [];
        let activeSprites = [];
        let passiveSprites = [];
        let textSprites = [];
        let linesNum = line[4];

        let spritesModel = [];

        let matched_symbol_cnt = line[3] === 1 ? 3 : line[3];

        if (line[6] === 1) {
            for (let i = 0; i < this.COLUMNS_COUNT; i++) {

                if (this.state !== 'ready' || this.winAnimationMode === false)
                    break;
                spritesModel[i] = [];

                for (let j = 0; j < this.ROWS_COUNT; j++) {

                    if (this.state !== 'ready' || this.winAnimationMode === false)
                        break;

                    spritesModel[i][j] = '';

                    if (line[0][j][i] !== 0) {
                        if (activeSprites.length < matched_symbol_cnt) {
                            activeSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);
                            spritesModel[i][j] = 'active';
                        } else
                            passiveSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);

                        if (highlightSprites.length < matched_symbol_cnt) {
                            spritesModel[i][j] = 'highlight';
                            highlightSprites.push(this.reels[i].spriteHighlight.children[this.ROWS_COUNT + 1 + j].children[0].params.name.replace('crisp', 'highlight'));
                        }

                        if (i === 2) {
                            let sprite_name = this.reels[i].spriteHighlight.children[this.ROWS_COUNT + 1 + j].children[1].params.name.replace('crisp', 'highlighttext');
                            this[sprite_name].text = line[5];
                            textSprites.push(sprite_name);
                        }
                    }
                }
            }

            for (let i = 0; i < this.COLUMNS_COUNT; i++) {
                if (this.state !== 'ready') break;
                for (let j = 0; j < this.ROWS_COUNT; j++) {
                    if (this.state !== 'ready') break;
                    if ((spritesModel[i][j] !== 'active') && (spritesModel[i][j] !== 'highlight')) {
                        passiveSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);
                    }
                }
            }
        } else {
            for (let i = this.COLUMNS_COUNT - 1; i >= 0; i--) {

                if (this.state !== 'ready' || this.winAnimationMode === false)
                    break;
                spritesModel[i] = [];

                for (let j = 0; j < this.ROWS_COUNT; j++) {

                    if (this.state !== 'ready' || this.winAnimationMode === false)
                        break;

                    spritesModel[i][j] = '';

                    if (line[0][j][i] !== 0) {
                        if (activeSprites.length < matched_symbol_cnt) {
                            spritesModel[i][j] = 'active';
                            activeSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);
                        } else
                            passiveSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);

                        if (highlightSprites.length < matched_symbol_cnt) {
                            spritesModel[i][j] = 'highlight';
                            highlightSprites.push(this.reels[i].spriteHighlight.children[this.ROWS_COUNT + 1 + j].children[0].params.name.replace('crisp', 'highlight'));
                        }

                        if (i === 2) {
                            let sprite_name = this.reels[i].spriteHighlight.children[this.ROWS_COUNT + 1 + j].children[1].params.name.replace('crisp', 'highlighttext');
                            this[sprite_name].text = line[5];
                            textSprites.push(sprite_name);
                        }
                    }
                }
            }

            for (let i = 0; i < this.COLUMNS_COUNT; i++) {
                if (this.state !== 'ready') break;
                for (let j = 0; j < this.ROWS_COUNT; j++) {
                    if (this.state !== 'ready') break;
                    if ((spritesModel[i][j] !== 'active') && (spritesModel[i][j] !== 'highlight')) {
                        passiveSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);
                    }
                }
            }
        }

        let lineSprites = [];
        lineSprites.push("line " + linesNum);
        lineSprites.push("line left " + linesNum);
        lineSprites.push("line right " + linesNum);

        if (this.state !== 'ready' || this.winAnimationMode === false)
            return;

        this.tweensBySprites(null, null, highlightSprites, textSprites, lineSprites, line[5], linesNum, callback);
    },

    animatePassiveLines: function (winData) {

        if (this.state !== 'ready' || this.winAnimationMode === false) {
            return;
        }

        let activeSprites = [];
        let passiveSprites = [];
        let highlightSprites = [];

        let spritesModel = [];

        for (let i = 0; i < this.COLUMNS_COUNT; i++) {
            if (this.state !== 'ready') break;
            spritesModel[i] = [];

            for (let j = 0; j < this.ROWS_COUNT; j++) {
                if (this.state !== 'ready') break;

                spritesModel[i][j] = '';

                for (let k = 0; k < winData.winLines.length; k++) {
                    let lineData = winData.winLines[k];

                    if ((lineData[0][j][i] !== 0) && (spritesModel[i][j] !== 'active') && (spritesModel[i][j] !== 'highlight')) {
                        spritesModel[i][j] = 'active';
                        activeSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j].children[0].params.name.replace('crisp', 'highlight'));
                        if ((spritesModel[i][j] !== 'highlight')) {
                            spritesModel[i][j] = 'highlight';
                            highlightSprites.push(this.reels[i].spriteHighlight.children[this.ROWS_COUNT + 1 + j].children[0].params.name.replace('crisp', 'highlight'));
                        }
                    }
                }
            }
        }

        for (let i = 0; i < this.COLUMNS_COUNT; i++) {
            for (let j = 0; j < this.ROWS_COUNT; j++) {
                if ((spritesModel[i][j] !== 'active') && (spritesModel[i][j] !== 'highlight')) {
                    passiveSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);
                }
            }
        }

        if (this.state === 'ready') this.allanimatepassive(activeSprites, passiveSprites);
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
                    this.staticTweens.hide();
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
        if (container.name === "level bar up" && this.levelup_state === true)
            return;
        if (container.name === "level bar down" && this.leveldown_state === true)
            return;
        if (container.name === "coin bar up" && this.coinup_state === true)
            return;
        if (container.name === "coin bar down" && this.coindown_state === true)
            return;
        let nameGlow1 = container.name + ' glow';
        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
        this[nameGlow1].tween = this.tween({
            to: ['alpha', 1, 150, 0, Power1.easeOut]
        }, nameGlow1);
    },

    handleButtonUp: function (container, e) {

        if (this.freeze_status)
            return;

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
            case 'btn_auto':
                this.buttonHandlerAuto(container, name);
                break;
            case 'coin bar down':
                this.buttonHandleCoinUpDown(false, container, name);
                break;
            case 'coin bar up':
                this.buttonHandleCoinUpDown(true, container, name);
                break;
            case 'level bar down':
                this.buttonHandleLevelBarUpDown(false, container, name);
                break;
            case 'level bar up':
                this.buttonHandleLevelBarUpDown(true, container, name);
                break;
            case 'refresh start button':
                this.buttonHandleStartButton(container, true);
                this.automenu_mode = false;
                this['AutoMenuContainer'].visible = this.automenu_mode;
                break;
            case 'button paytable':
                this.buttonHandlePaytable(container);
                break;
            case 'start button':
                if (this.auto_mode) {
                    return;
                } else {
                    if (!this.isfreespin)
                        this.buttonHandleStartButton(container, false);
                    else
                        this.buttonHandleFreeStartButton(container);
                }
                break;
            case 'maxbet button':
                if (this.auto_mode) {
                    return;
                } else {
                    this.buttonHandleMaxbetButton(container);
                }
                break;
            case 'stop button':
                this.buttonHandleStartButton(container, true);
                break;
            case 'autospin_dialog close button':
                this.buttonHandlerCloseDialog(container);
                break;
            case 'info prev button':
                this.buttonHandlerPrev(container);
                break;
            case 'info enter button':
                this.buttonHandlerEnter(container);
                break;
            case 'info next button':
                this.buttonHandlerNext(container);
                break;
            case 'info close button':
                this.returnToOrginalFromHelp();
                break;
            case 'audio_set button':
                this.buttonHandlerAudioSet(container);
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
        if (container.name === "level bar up" && this.levelup_state === true)
            return;
        if (container.name === "level bar down" && this.leveldown_state === true)
            return;
        if (container.name === "coin bar up" && this.coinup_state === true)
            return;
        if (container.name === "coin bar down" && this.coindown_state === true)
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
            this['button auto label'].text = "AUTO\nPLAY";
            this['button auto'].texture = this.getTexture(this.autobuttonNormalbg);
            this['button auto glow'].texture = this.getTexture(this.autoButtonGlowbg);
            this['autoamount text'].visible = false;
            this.playSound('buttonClick', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
            this.auto_mode = false;
            this.current_auto_amount = 0;
            return;
        }
        if (this.state !== 'ready') return;
        if (this.auto_mode === false) {
            this.winAnimationMode = false;
            if (this.automenu_mode !== true) {
                this.playSound('buttonClick', {}, {volume: this.sound_mode ? 1 : 0, loop: false});

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
                this['button auto'].texture = this.getTexture("StopautoPlayButtonUp.png");
                this['button auto glow'].texture = this.getTexture("StopautoPlayButtonOver.png");
                this['autoamount text'].visible = true;
                this.spin();
                this['button auto label'].text = "STOP";
                if (this.spinButtonTween) this.spinButtonTween.stop();
            } else {
                this.auto_mode = false;
                this.current_auto_amount = 0;
                this['button auto'].texture = this.getTexture("StopautoPlayButtonUp.png");
                this['button auto glow'].texture = this.getTexture("StopautoPlayButtonOver.png");
                this['autoamount text'].visible = false;
            }
        } else {
            this['button auto'].texture = this.getTexture(this.autobuttonNormalbg);
            this['button auto glow'].texture = this.getTexture(this.autoButtonGlowbg);
            this['autoamount text'].visible = false;
            this.auto_mode = false;
            this.current_auto_amount = 0;
        }
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

    buttonHandleCoinUpDown: function (bUp, container, name) {
        if (this.state !== 'ready' || this.auto_mode === true) return;
        this.winAnimationMode = false;

        var cur_step = this.coins.step;
        if (bUp === true) {
            if (this.coinup_state === true)
                return;
            if (cur_step === this.coin_value_list.length && this.coinup_state === false) {
                this[container.name].texture = this.getTexture("selectorPlusDisabled.png")
                this.coinup_state = true;
                return;
            }
            if (cur_step < this.coin_value_list.length) {
                this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
                this.tween({
                    to: ['x', -this['coin progress back'].width + this.coin_progress_step * (cur_step + 1), 250, 100, Power1.easeOut]
                }, 'coin progress back');
                this.coindown_state = false;
                this['coin bar down'].texture = this.getTexture("selectorMinusUp.png")
                this[container.name].texture = this.getTexture("selectorPlusUp.png")
                cur_step++;
            }
        } else {
            if (this.coindown_state === true)
                return;
            if (cur_step === 1 && this.coindown_state === false) {
                this[container.name].texture = this.getTexture("selectorMinusDisabled.png")
                this.coindown_state = true;
                return;
            }
            if (cur_step > 1) {
                this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
                this.tween({
                    to: ['x', -this['coin progress back'].width + this.coin_progress_step * (cur_step - 1), 250, 100, Power1.easeOut]
                }, 'coin progress back');
                this.coinup_state = false;
                this['coin bar up'].texture = this.getTexture("selectorPlusUp.png")
                this[container.name].texture = this.getTexture("selectorMinusUp.png")
                cur_step--;
            }
        }

        if (this.setBetAmountValues(this.lines.step, this.levels.step, cur_step) === false)
            cur_step = this.coins.step;
    },

    buttonHandleLevelBarUpDown: function (bUp, container, name) {
        if (this.state !== 'ready' || this.auto_mode) return;
        this.winAnimationMode = false;

        var cur_step = this.levels.step;
        if (bUp === true) {
            if (this.levelup_state === true)
                return;
            if (cur_step === this.level_value_list.length && this.levelup_state === false) {
                this[container.name].texture = this.getTexture("selectorPlusDisabled.png");
                this.levelup_state = true;
                return;
            }
            if (cur_step < this.level_value_list.length) {
                this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
                this.tween({
                    to: ['x', -this['level progress back'].width + this.level_progress_step * (cur_step + 1), 250, 100, Power1.easeOut]
                }, 'level progress back');
                this.leveldown_state = false;
                this['level bar down'].texture = this.getTexture("selectorMinusUp.png");
                this[container.name].texture = this.getTexture("selectorPlusUp.png");
                cur_step++;
            }

        } else {
            if (this.leveldown_state === true)
                return;
            if (cur_step === 1 && this.leveldown_state === false) {
                this[container.name].texture = this.getTexture("selectorMinusDisabled.png");
                this.leveldown_state = true;
                return;
            }
            if (cur_step > 1) {
                this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
                this.tween({
                    to: ['x', -this['level progress back'].width + this.level_progress_step * (this.levels.step - 1), 250, 100, Power1.easeOut]
                }, 'level progress back');
                this.levelup_state = false;
                this['level bar up'].texture = this.getTexture("selectorPlusUp.png")
                this[container.name].texture = this.getTexture("selectorMinusUp.png")
                cur_step--;
            }
        }

        if (this.setBetAmountValues(this.lines.step, cur_step, this.coins.step) === false)
            cur_step = this.levels.step;
    },

    buttonHandleMaxbetButton: function (container) {
        this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        this.levels.step = 10;
        this.coins.step = 7;
        this.setBetAmountValues(0, 10, 7);
        this.tween({
            to: ['x', -this['coin progress back'].width + this.coin_progress_step * (this.coins.step), 250, 100, Power1.easeOut]
        }, 'coin progress back');
        this.tween({
            to: ['x', -this['level progress back'].width + this.level_progress_step * (this.levels.step), 250, 100, Power1.easeOut]
        }, 'level progress back');
        this['level bar down'].texture = this.getTexture("selectorMinusUp.png");
        this['level bar up'].texture = this.getTexture("selectorPlusDisabled.png");
        this['coin bar down'].texture = this.getTexture("selectorMinusUp.png");
        this['coin bar up'].texture = this.getTexture("selectorPlusDisabled.png");
        this.coindown_state = false;
        this.leveldown_state = false;
    },

    buttonHandleStartButton: function (container, isAuto = false) {
        if (isAuto === false) {
            if (this.credits.value < this.bet.amount)
                return;

            MRAID.markMeaningfulInteraction();

            if (this.state !== 'ready') return;

            this.playSound("spinButtonClick", {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});

            this.spin();

            if (this.spinButtonTween) this.spinButtonTween.stop();
        } else {
            if (this.auto_mode)
                return;
            if (this.state === 'ready') {
                if (this.auto_mode === false) {
                    this.auto_mode = true;
                    this['button auto'].texture = this.getTexture(this.startbuttonDisablebg);
                    this['button auto glow'].texture = this.getTexture(this.startbuttonDisablebg);
                    this['autoamount text'].visible = true;
                    this.spin();
                    if (this.spinButtonTween) this.spinButtonTween.stop();
                } else {
                    this.auto_mode = false;
                    this.current_auto_amount = 0;
                    this['button auto'].texture = this.getTexture(this.startbuttonDisablebg);
                    this['button auto glow'].texture = this.getTexture(this.startbuttonDisablebg);
                    this['autoamount text'].visible = false;
                }
            } else {
                this['button auto'].texture = this.getTexture(this.autobuttonNormalbg);
                this['button auto glow'].texture = this.getTexture(this.autoButtonGlowbg);
                this['autoamount text'].visible = false;
                this.auto_mode = false;
                this.current_auto_amount = 0;
            }
        }
        this.refreshPanelValues();
    },

    buttonHandleFreeStartButton: function (container) {
        this.state = 'ready';
        this['ControlPanelContainer'].visible = false;
        this['back_fire'].visible = false;
        this['background container wrapper'].visible = false;
        this['free_background container wrapper'].visible = true;

        this.currentTweens.hide();
        this.currentTweens.hideQuick();
        this.staticTweens.hide();
        this.staticTweens.hideQuick();

        this.back_interval = setInterval(() => {
            this['free_background'].play();
        }, 280);

        setTimeout(() => {
            this.auto_mode = true;
            this.current_auto_amount = this.freespin_count;
            this.spin();
        }, 500);
    },

    completeFreespin: function () {
        this['ControlPanelContainer'].visible = true;
        this['back_fire'].visible = true;
        this['background container wrapper'].visible = true;
        this['free_background container wrapper'].visible = false;
        this['start button'].texture = this.getTexture(this.startbuttonNormalbg);
        this['start button glow'].texture = this.getTexture(this.startbuttonGlowbg);
        clearInterval(this.back_interval);
    },

    buttonHandlerCloseDialog: function (container) {
        MRAID.markMeaningfulInteraction();
        this.playSound('btn_auto_close', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
        this.automenu_mode = false;
        this['AutoMenuContainer'].visible = this.automenu_mode;
    },

    showHelpPage: function (index) {
        if (index === 1) {
            this['wild_paytable'].play();
        }
        this['info container ' + index].visible = true;
        this['info container ' + index].alpha = 1;
    },

    hideHelpPage: function (index) {
        this['info container ' + index].visible = false;
        this['info container ' + index].alpha = 0;
    },

    buttonHandlerNext: function (container) {
        console.log("cc");
        this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});

        if (this.helpPageIndex === 2) {

            this.helpPageIndex = 1;

            this.hideHelpPage(2);
            this.showHelpPage(this.helpPageIndex);

        } else {

            this.hideHelpPage(this.helpPageIndex);

            this.helpPageIndex++;

            this.showHelpPage(this.helpPageIndex);

        }
        this.sethelpPageIndicator();
    },

    buttonHandlerPrev: function (container) {
        this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});

        if (this.helpPageIndex === 1) {

            this.helpPageIndex = 2;

            this.hideHelpPage(1);
            this.showHelpPage(this.helpPageIndex);

        } else {

            this.hideHelpPage(this.helpPageIndex);

            this.helpPageIndex--;

            this.showHelpPage(this.helpPageIndex);

        }
        this.sethelpPageIndicator();
    },

    buttonHandlerEnter: function (container) {
        this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        this['InfoContainer'].visible = false;
        this['MainContainer'].visible = true;
    },

    sethelpPageIndicator: function () {
        if (this.helpPageIndex === 1) {
            this['indicator 1'].texture = this.getTexture("circle");
            this['indicator 2'].texture = this.getTexture("circle_dark");
        } else {
            this['indicator 1'].texture = this.getTexture("circle_dark");
            this['indicator 2'].texture = this.getTexture("circle");
        }
    },

    buttonHandlerAudioSet: function (container) {
        this.sound_mode = !(this.sound_mode);
        if (this.sound_mode) {
            this.playSound("background_music", {}, {volume: this.sound_mode ? 0.5 : 0, loop: true});
            this['audio_set button'].texture = this.getTexture("btn_speaker_on");
        } else {
            this.backSound.stop();
            this['audio_set button'].texture = this.getTexture("btn_speaker_off");
        }
    },

    buttonHandlerClose: function (container) {
        if (this.state !== 'ready') return;
        this.closeGame();
    },

    buttonHandlePaytable: function (container) {
        this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        if (this['InfoContainer'].visible === true) {
            this['InfoContainer'].visible = false;
            this['MainContainer'].visible = true;
            this['wild_paytable'].play();
            this.showHelpPage(1);
        } else {
            this['InfoContainer'].visible = true;
            this['MainContainer'].visible = false;
        }
    },

    returnToOrginalFromHelp: function () {
        this['MainContainer'].visible = true;
        this['ControlPanelContainer'].visible = true;
        this['LogoContainer'].visible = true;
        this['InfoContainer'].visible = false;
    },

    setBetAmountValues: function (line_step, level_step, coin_step) {

        let line_value = this.line_value_list;
        let level_value = this.level_value_list[level_step - 1];
        let coin_value = this.coin_value_list[coin_step - 1];

        let betAmount = line_value * level_value * coin_value;

        if (this.credits.value < betAmount) {
            console.warn("BetAmount is lower than Credit Value");
            return false;
        }

        this.lines.value = line_value;
        this.lines.step = line_step;

        this.levels.value = level_value;
        this.levels.step = level_step;

        this.coins.value = coin_value;
        this.coins.step = coin_step;

        this.bet.amount = betAmount;

        this.refreshPanelValues();
    },

    setCoinValues: function (coin_step, level_step) {

        let line_value = this.coins_;
        let level_value = this.level_value_list[level_step - 1];

        let betAmount = line_value * level_value;

        if (this.credits.value < betAmount) {
            return false;
        }

        this.lines.value = line_value;
        this.coins.step = coin_step;

        this.levels.value = level_value;
        this.levels.step = level_step;

        this.bet.amount = betAmount;

        this.refreshPanelValues();
    },

    refreshPanelValues: function () {
        this.animFieldPoints('credits bar', this.credits.drawed.toFixed(2).toString());
        this.animFieldPoints('level bar', this.levels.value);
        this.animFieldPoints('coin bar', this.coins.value);
        this.animFieldPoints('win bar', this.server_win_amount.drawed, true);
        this.animFieldPoints('betamount', this.levels.value * this.line_value_list);
        this.animFieldPoints('bet bar', this.bet.amount.toFixed(2).toString());
        this.animFieldPoints('total_bet bar', this.bet.amount.toFixed(2).toString());

        if (this.auto_mode) {
            this.animFieldPoints('autoamount', this.current_auto_amount);
        }

        if (this.auto_mode === false) {
            this['start button'].visible = true;
            this['stop button'].visible = false;
        } else {
            this['start button'].visible = true;
            this['stop button'].visible = false;
        }
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
        this['lines bar up'].texture = this.getTexture("selectorPlusDisabled.png");
        this['betperline bar up'].texture = this.getTexture("selectorPlusDisabled.png");
        this['start button'].texture = this.getTexture("spinButtonInactive.png");
        this['button auto'].texture = this.getTexture("StopautoPlayButtonUp.png");
    },

    unfreezeControlPanel: function () {
        this.freeze_status = false;
        this['start button'].texture = this.getTexture("free_btnSkinSkip_enabled");
        this['start button glow'].texture = this.getTexture("free_btnSkinSkip_over");
    },

    setValues: function () {
        this.startbuttonNormalbg = "spinButtonIdle.png";
        this.startbuttonGlowbg = "spinButtonOver.png";
        this.startbuttonDisablebg = "spinButtonDisabled.png";
        this.maxbetbuttonNormalbg = "maxBetButtonUp.png";
        this.maxbetButtonDisablebg = "maxBetButtonDisabled.png";
        this.autobuttonNormalbg = "autoPlayButtonUp.png";
        this.autoButtonGlowbg = "autoPlayButtonOver.png";
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

    levelup_state: false,
    leveldown_state: false,
    coinup_state: false,
    coindown_state: false,

    bonus_highlights: [],
    bonus_active: [],

    removeCellMatrix: function (matrix, card_count, direction) {
        if (direction === 1) {
            for (var i = 0; i < 3; i++) {
                for (var j = card_count; j < 5; j++) {
                    matrix[i][j] = 0;
                }
            }
        } else {
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < (5 - card_count); j++) {
                    matrix[i][j] = 0;
                }
            }
        }
        return matrix;
    },

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
            card_count = serverData[k].cardCount === 3 ? 1 : serverData[k].cardCount;
            pay_line = this.spinCombination.paylines[serverData[k].linePosIdx];
            pay_line = this.removeCellMatrix(pay_line, serverData[k].cardCount, serverData[k].direction);
            symbol_name = this.spinCombination.uniquesymbols[serverData[k].audioIndex];
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
            windata.push(serverData[k].direction);
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

        var response = "{\"error\":\"0\",\"response\":{\"initCards\":[[2,0,2],[2,2,5],[3,2,2],[4,2,0],[1,1,2]],\"arrRetVal\":[{\"retType\":0,\"win\":3000,\"linePosIdx\":4,\"cardCount\":4,\"direction\":1},{\"retType\":0,\"win\":1400,\"linePosIdx\":6,\"cardCount\":3,\"direction\":1}],\"betAmount\":200,\"winAmount\":4400,\"balance\":6058206.7}}";
        // var response = "{\"error\":\"0\",\"response\":{\"initCards\":[[3,5,2],[1,3,4],[2,4,0],[5,3,0],[2,4,0]],\"arrRetVal\":[{\"retType\":0,\"win\":25,\"linePosIdx\":1,\"cardCount\":3,\"direction\":0}],\"betAmount\":1,\"winAmount\":25,\"balance\":60582}}";
        // var response = "{\"error\":\"0\",\"response\":{\"initCards\":[[1,3,1],[0,1,3],[3,0,1],[5,1,5],[2,1,1]],\"arrRetVal\":[{\"retType\":0,\"win\":1,\"linePosIdx\":4,\"cardCount\":4,\"direction\":1}],\"betAmount\":0.1,\"winAmount\":1,\"balance\":605825}}";

        //jackpot
        // var response = "{\"error\":\"0\",\"response\":{\"initCards\":[[1,3,0],[3,2,1],[5,4,2],[0,1,4],[2,3,1]],\n" +
        //     "                \"arrRetVal\":[{\"retType\":0,\"win\":125,\"linePosIdx\":2,\"cardCount\":3}],\"betAmount\":9,\"winAmount\":1250,\"balance\":11250}}";
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
                    value: 0
                },
                {
                    key: 'bet',
                    value: this.levels.step - 1
                },
                {
                    key: 'denom',
                    value: this.coins.step - 1
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
