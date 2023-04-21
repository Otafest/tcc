var APP_DATA = {
  "scenes": [
    {
      "id": "0-north-building-1f-telus-conbini",
      "name": "North Building 1F Telus-CONbini",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -2.8274579765039363,
        "pitch": 0.16982397097106983,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 0.21219403156866257,
          "pitch": 0.16325204987540154,
          "rotation": 0,
          "target": "1-north-building-1f-telus-hallway"
        },
        {
          "yaw": -2.253607220927627,
          "pitch": 0.19784667464726624,
          "rotation": 0.7853981633974483,
          "target": "2-north-building-1f-volunteer-room---escalators"
        },
        {
          "yaw": 3.0394243602404547,
          "pitch": 0.13191982343880504,
          "rotation": 0,
          "target": "25-north-building-1f-security"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-north-building-1f-telus-hallway",
      "name": "North Building 1F Telus Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5992908913405213,
          "pitch": 0.2298171128912596,
          "rotation": 0.7853981633974483,
          "target": "0-north-building-1f-telus-conbini"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-north-building-1f-volunteer-room---escalators",
      "name": "North Building 1F Volunteer Room - Escalators",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -2.8680519178814645,
        "pitch": 0.1951639363347102,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 0.32065997372079913,
          "pitch": 0.23883208826754831,
          "rotation": 0,
          "target": "0-north-building-1f-telus-conbini"
        },
        {
          "yaw": -2.954530094750023,
          "pitch": 0.12029739359523361,
          "rotation": 7.0685834705770345,
          "target": "3-north-building-1f-escalator"
        },
        {
          "yaw": 2.747057759240138,
          "pitch": 0.07082781698044371,
          "rotation": 0,
          "target": "24-stephen-ave"
        },
        {
          "yaw": 2.632308512782201,
          "pitch": 0.039671988575179284,
          "rotation": 10.995574287564278,
          "target": "25-north-building-1f-security"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-north-building-1f-escalator",
      "name": "North Building 1F Escalator",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 2.958000700070743,
        "pitch": -0.13879816893932428,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 0.2695478056046259,
          "pitch": 0.6397565532141378,
          "rotation": 0,
          "target": "2-north-building-1f-volunteer-room---escalators"
        },
        {
          "yaw": 2.98197717751629,
          "pitch": -0.37773734228449385,
          "rotation": 0,
          "target": "4-north-building-2f-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-north-building-2f-landing",
      "name": "North Building 2F Landing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 2.693914484650855,
        "pitch": 0.2799316295495622,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -3.0920449493998134,
          "pitch": 0.3823265572734762,
          "rotation": 0.7853981633974483,
          "target": "3-north-building-1f-escalator"
        },
        {
          "yaw": 2.930453230646906,
          "pitch": 0.04120417431580492,
          "rotation": 1.5707963267948966,
          "target": "5-north-building-2f-exhibitor-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-north-building-2f-exhibitor-hall",
      "name": "North Building 2F Exhibitor Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 0.7444622591233951,
        "pitch": 0.16395909082179294,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -2.9528184921635354,
          "pitch": 0.2100826542625711,
          "rotation": 0,
          "target": "4-north-building-2f-landing"
        },
        {
          "yaw": 1.4049265088660619,
          "pitch": 0.0954256261928279,
          "rotation": 0,
          "target": "6-north-building-2f-15"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-north-building-2f-15",
      "name": "North Building 2F +15",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 3.037847141023276,
        "pitch": -0.09318054256866937,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -0.23698546315824842,
          "pitch": 0.3197359058861373,
          "rotation": 0,
          "target": "5-north-building-2f-exhibitor-hall"
        },
        {
          "yaw": 3.022222226136151,
          "pitch": -0.0666621188856702,
          "rotation": 0,
          "target": "7-south-building-2f-marriott-shortcut"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-south-building-2f-marriott-shortcut",
      "name": "South Building 2F Marriott Shortcut",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -2.32276469913028,
        "pitch": 0.33582255832704533,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 1.0897997736249536,
          "pitch": 0.1165109492064822,
          "rotation": 0,
          "target": "6-north-building-2f-15"
        },
        {
          "yaw": -1.9364490805744872,
          "pitch": 0.3655531211546599,
          "rotation": 1.5707963267948966,
          "target": "8-south-building-2f-patio"
        },
        {
          "yaw": -3.107864380148209,
          "pitch": 0.2582576579051796,
          "rotation": 0,
          "target": "9-south-building-2f-glen-entrance-north"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-south-building-2f-patio",
      "name": "South Building 2F Patio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 1.6516701294871252,
        "pitch": 0.07380610800188414,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 2.4467577201105897,
          "pitch": 0.10594330296371979,
          "rotation": 0,
          "target": "7-south-building-2f-marriott-shortcut"
        },
        {
          "yaw": -2.3105681921253076,
          "pitch": 0.17338008987820075,
          "rotation": 0,
          "target": "10-south-building-2f-glen-lines"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.40580918090164175,
          "pitch": 0.0691340859634888,
          "title": "Marriott Shortcut",
          "text": "Weee (no pics sorry)"
        }
      ]
    },
    {
      "id": "9-south-building-2f-glen-entrance-north",
      "name": "South Building 2F Glen Entrance (North)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -2.134710212032788,
        "pitch": 0.019322555922967055,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -0.1864442597197602,
          "pitch": 0.2389666546146909,
          "rotation": 0,
          "target": "7-south-building-2f-marriott-shortcut"
        },
        {
          "yaw": -1.51493243072904,
          "pitch": 0.20845897702742988,
          "rotation": 0,
          "target": "10-south-building-2f-glen-lines"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-south-building-2f-glen-lines",
      "name": "South Building 2F Glen Lines",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -1.3041731275804906,
        "pitch": 0.008689614526064204,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 1.67407440295249,
          "pitch": 0.1653983000109278,
          "rotation": 0,
          "target": "9-south-building-2f-glen-entrance-north"
        },
        {
          "yaw": -1.424288635003487,
          "pitch": 0.21953421836953524,
          "rotation": 0,
          "target": "11-south-building-2f-glen-205"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-south-building-2f-glen-205",
      "name": "South Building 2F Glen 205",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8435442511849249,
          "pitch": 0.27153264062727445,
          "rotation": 0,
          "target": "10-south-building-2f-glen-lines"
        },
        {
          "yaw": 0.7316260390824247,
          "pitch": 0.19941500111021426,
          "rotation": 0,
          "target": "12-south-building-2f-glen-202-203"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-south-building-2f-glen-202-203",
      "name": "South Building 2F Glen 202-203",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5392597064067672,
          "pitch": 0.12787008426267654,
          "rotation": 0,
          "target": "11-south-building-2f-glen-205"
        },
        {
          "yaw": 0.7570261897232147,
          "pitch": 0.08238335669592978,
          "rotation": 0,
          "target": "13-south-building-2f-glen-209"
        },
        {
          "yaw": 0.6610878900355264,
          "pitch": 0.08678192684099884,
          "rotation": 5.497787143782138,
          "target": "14-south-building-2f-glen-entrance-south"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-south-building-2f-glen-209",
      "name": "South Building 2F Glen 209",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 1.142506634866633,
        "pitch": 0.05162653311084142,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -2.917677965590668,
          "pitch": 0.15004996752783661,
          "rotation": 0,
          "target": "12-south-building-2f-glen-202-203"
        },
        {
          "yaw": -2.661253130103365,
          "pitch": 0.20265883830094822,
          "rotation": 0.7853981633974483,
          "target": "14-south-building-2f-glen-entrance-south"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-south-building-2f-glen-entrance-south",
      "name": "South Building 2F Glen Entrance (South)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.536583225110469,
          "pitch": 0.2536172147987923,
          "rotation": 0.7853981633974483,
          "target": "12-south-building-2f-glen-202-203"
        },
        {
          "yaw": 3.087737745235966,
          "pitch": 0.23155369725244235,
          "rotation": 5.497787143782138,
          "target": "13-south-building-2f-glen-209"
        },
        {
          "yaw": 0.8688619115141503,
          "pitch": 0.34607286987808905,
          "rotation": 0,
          "target": "15-south-building-1f-escalator"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-south-building-1f-escalator",
      "name": "South Building 1F Escalator",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 0.6142639881422163,
        "pitch": 0.5288952246919862,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -2.311336264880838,
          "pitch": 0.04352532135136222,
          "rotation": 0.7853981633974483,
          "target": "14-south-building-2f-glen-entrance-south"
        },
        {
          "yaw": 0.48863280895038486,
          "pitch": 0.5392798251972728,
          "rotation": 0,
          "target": "16-south-building-1f-escalator-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-south-building-1f-escalator-landing",
      "name": "South Building 1F Escalator Landing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1596927272134643,
          "pitch": 0.1443233692866137,
          "rotation": 0,
          "target": "15-south-building-1f-escalator"
        },
        {
          "yaw": -1.5130241365513282,
          "pitch": 0.09776973261987543,
          "rotation": 0,
          "target": "21-south-building-1f-marriott-link"
        },
        {
          "yaw": -0.40671344996880165,
          "pitch": 0.005704596467802858,
          "rotation": 0,
          "target": "17-south-building-1f-ota-info-booth"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-south-building-1f-ota-info-booth",
      "name": "South Building 1F Ota Info Booth",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -2.523653610439135,
        "pitch": 0.1000934751026854,
        "fov": 1.3646202047689777
      },
      "linkHotspots": [
        {
          "yaw": 1.636678438651316,
          "pitch": 0.09427697135799029,
          "rotation": 0,
          "target": "16-south-building-1f-escalator-landing"
        },
        {
          "yaw": -1.5807416857032877,
          "pitch": 0.06886470485740226,
          "rotation": 0,
          "target": "18-south-building-1f-main-entrance-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-south-building-1f-main-entrance-stairs",
      "name": "South Building 1F Main Entrance Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.16692211779591126,
          "pitch": 0.04218318870612947,
          "rotation": 0,
          "target": "17-south-building-1f-ota-info-booth"
        },
        {
          "yaw": 0.1650832849070092,
          "pitch": 0.42484535845584404,
          "rotation": 3.141592653589793,
          "target": "19-south-building--1f-macleod-a"
        },
        {
          "yaw": -2.9422496280040384,
          "pitch": 0.17788761566450262,
          "rotation": 0,
          "target": "24-stephen-ave"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-south-building--1f-macleod-a",
      "name": "South Building -1F Macleod A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9322408324220355,
          "pitch": 0.020132619128961693,
          "rotation": 0,
          "target": "18-south-building-1f-main-entrance-stairs"
        },
        {
          "yaw": 0.2220126380238554,
          "pitch": 0.06401542721986431,
          "rotation": 0,
          "target": "20-south-building--1f-admissions"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-south-building--1f-admissions",
      "name": "South Building -1F Admissions",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -2.78906178538249,
        "pitch": 0.2034380751800544,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 0.24679890157703177,
          "pitch": 0.02900259764864188,
          "rotation": 0,
          "target": "19-south-building--1f-macleod-a"
        },
        {
          "yaw": -1.5207286634703756,
          "pitch": 0.13206940292231195,
          "rotation": 6.283185307179586,
          "target": "21-south-building-1f-marriott-link"
        },
        {
          "yaw": -0.7109725672644274,
          "pitch": 0.13989786264427373,
          "rotation": 5.497787143782138,
          "target": "26-south-building--1f-chill-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-south-building-1f-marriott-link",
      "name": "South Building 1F Marriott Link",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.06038166923737798,
          "pitch": 0.06427771224929835,
          "rotation": 0,
          "target": "22-south-building-1f-ideation-doors"
        },
        {
          "yaw": -0.5123125202096759,
          "pitch": 0.07109272784066434,
          "rotation": 10.210176124166829,
          "target": "20-south-building--1f-admissions"
        },
        {
          "yaw": 3.049239882782567,
          "pitch": 0.2689534089911927,
          "rotation": 0,
          "target": "16-south-building-1f-escalator-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-south-building-1f-ideation-doors",
      "name": "South Building 1F Ideation Doors",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -0.7920611863391009,
        "pitch": 0.022417387909930753,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -2.6213867604059864,
          "pitch": 0.1726620593720618,
          "rotation": 0,
          "target": "21-south-building-1f-marriott-link"
        },
        {
          "yaw": -0.9717649683704259,
          "pitch": 0.27703662464778844,
          "rotation": 0,
          "target": "23-south-building-1f-ideation-centre"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6624286476781585,
          "pitch": 0.09631256803809407,
          "title": "The Marriott",
          "text": "Elevators, Starbucks, Guest Services, etc."
        }
      ]
    },
    {
      "id": "23-south-building-1f-ideation-centre",
      "name": "South Building 1F Ideation Centre",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7743022271400628,
          "pitch": 0.1486021225133669,
          "rotation": 0,
          "target": "22-south-building-1f-ideation-doors"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-stephen-ave",
      "name": "Stephen Ave",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.753359708272157,
          "pitch": 0.04347943739858273,
          "rotation": 0,
          "target": "18-south-building-1f-main-entrance-stairs"
        },
        {
          "yaw": -1.6602705387226528,
          "pitch": 0.047125699227539286,
          "rotation": 0,
          "target": "25-north-building-1f-security"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-north-building-1f-security",
      "name": "North Building 1F Security",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2550253804108795,
          "pitch": 0.18554488707939498,
          "rotation": 0,
          "target": "0-north-building-1f-telus-conbini"
        },
        {
          "yaw": 2.383667762197172,
          "pitch": 0.21844782986693012,
          "rotation": 0,
          "target": "24-stephen-ave"
        },
        {
          "yaw": 2.8054087461149475,
          "pitch": 0.21722187403665671,
          "rotation": 0.7853981633974483,
          "target": "2-north-building-1f-volunteer-room---escalators"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-south-building--1f-chill-space",
      "name": "South Building -1F Chill Space",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.21847403077163996,
          "pitch": 0.12841119001867085,
          "rotation": 5.497787143782138,
          "target": "27-south-building--1f-pacific-hallway"
        },
        {
          "yaw": 3.132120533865196,
          "pitch": 0.19371919792866876,
          "rotation": 0,
          "target": "20-south-building--1f-admissions"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-south-building--1f-pacific-hallway",
      "name": "South Building -1F Pacific Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7432845673081694,
          "pitch": 0.36489084624762747,
          "rotation": 0.7853981633974483,
          "target": "26-south-building--1f-chill-space"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "TCC Venue",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
