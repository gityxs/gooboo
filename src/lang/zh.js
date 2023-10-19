import { zh } from 'vuetify/lib/locale'
import card from './zh/card'
import consumable from './zh/consumable'
import currency from './zh/currency'
import mult from './zh/mult'
import note from './zh/note'
import relic from './zh/relic'
import stat from './zh/stat'
import unlock from './zh/unlock'
import upgrade from './zh/upgrade'
import patchnote from './zh/patchnote'

export default {
  ...zh,

  gooboo: {
    buy: '购买',
    craft: '制作',
    feature: '功能',
    features: '功能',
    cantAfford: '买不起',
    capTooLow: '容量太低',
    equip: '装备',
    unequip: '脱下',
    unequipAll: '全部脱下',
    max: '最大',
    maxed: '最大',
    free: '空闲',
    capacity: '容量',
    multCapacity: '{0} 容量',
    gain: '增益',
    multGain: '{0} 增益',
    apply: '应用',
    reset: '充值',
    unlock: '解锁',
    keep: '保留',
    consumable: '消耗品',
    lock: '未解锁',
    upgrade: '升级',
    upgrades: '升级',
    upgradeVerb: '升级',
    upgradesPrestige: '声望升级',
    prestige: '声望',
    prestigeDescription: '重置此功能以换取声望货币',
    prestigeTime: '此声望周期花费的时间',
    saveManual: '保存',
    saveExport: '导出到文件',
    saveImport: '从文件加载',
    closeAll: '全部关闭',
    draw: '画画',
    finish: '完成',
    boost: '提升',
    skip: '跳过',
    level: '等级',
    chance: '几率',
    effect: '效果',
    effects: '效果',
    confirm: '确认',
    cancel: '取消',
    maxLevel: '最大等级',
    inventory: '库存',
    newGame: '新游戏',
    levelSuffix: '等级',
    delete: '删除',
    convert: '转换',
    playedBefore: {
      0: '以前玩过吗？ 加载你的保存文件 ',
      1: '这里'
    },
    offlineSummary: {
      title: '欢迎回来! 你已经离开了 {0}',
      newVersion: '新版本! ',
      upgradesFinished: '升级完成',
      downloadBackup: '下载存档备份',
      eventEnded: '事件结束',
      eventStarted: '事件开始',
      toFeature: '进入功能'
    },
    operator: {
      '>=': 'at least',
      '>': 'over',
      '<=': 'at most',
      '<': 'under',
      '==': 'exactly'
    }
  },
  endOfContent: {
    name: '内容结束',
    description: '您已到达此功能的内容末尾，使得经过此点的进度比预期慢。 等待未来的更新或专注于其他功能以继续进步'
  },
  message: {
    achievement: {
      get: '成就获得!',
      gained: '获得',
      relicGained: '获得圣遗物'
    },
    card: {
      get: '卡包内容',
      new: '新!'
    },
    feature: {
      feature: '新的功能已解锁!',
      subfeature: '新的子功能已解锁!',
      school: '新的科目已解锁!',
      general: '新的将军已解锁!'
    },
    heirloom: {
      get: '发现了传家宝'
    },
    note: {
      get: '笔记 #{0} 已发现',
      read: '阅读'
    },
    save: {
      success: '游戏已保存',
      error: '自动保存失败'
    },
    prize: {
      get: '你赢得了奖品!',
      bingo1: 'BINGO!',
      bingo2: '双倍 BINGO!',
      bingo3: '三倍 BINGO!'
    },
    school: {
      get: '课程完成!',
      getExam: '考试完成!',
      score: '分数: {0}',
      perfectScore: '(完美!)',
      grade: '{0}% 成绩',
      gradePlus: '你的成绩提高了!',
      dust: '+{0} 金尘'
    },
    update: {
      get: '新的更新!',
      apply: '刷新 + 应用'
    }
  },
  duplicateTab: {
    title: 'Gooboo 已在另一个选项卡中运行',
    description: '为了防止与您的保存文件不一致，Gooboo 只能运行一个。 请关闭此选项卡并返回现有选项卡上的游戏。'
  },
  confirm: {
    title: '确认操作',
    prestige: '您即将获得声望，重置您在此功能中的所有进度，以换取声望货币。 你确定你想要声望吗？',
    prestigeNoGain: '你即将获得声望，重置你所有的进步。 由于您缺乏进度，您不会获得任何声望货币。 你确定你想要声望吗？',
    prestigeCrop: '您将要声望这种作物，重置其所有等级、经验和基因，以换取所有作物的永久增益奖励。 你确定你想要声望吗？',
    upgrade: {
      0: '您即将购买升级 ',
      1: ', 这需要稀有货币。 您确定要购买这个吗？'
    },
    shop: '您将要购买活动奖励，这需要花费稀有货币。 您确定要购买这个吗？',
    theme: {
      0: '您即将购买主题 ',
      1: ', 这需要稀有货币。 您确定要购买这个吗？'
    },
    cardPack: {
      0: '您即将购买卡包 ',
      1: ', 这需要稀有货币。 您确定要购买这个吗？'
    },
    weatherChaosFishingRodBuy: '您将要购买钓鱼竿“{0}”，它需要花费稀有货币。 您确定要购买这个吗？',
    summerFestivalCellBuy: '您将要购买一个新的岛屿细胞，这需要花费稀有货币。 您确定要购买这个吗？',
    farmCrop: '您将要种植需要稀有货币的农作物。 您确定要购买这个吗？',
    treasure: '您将要购买一件新的宝藏，该宝藏需要花费稀有货币。 您确定要购买这个吗？',
    schoolExamPass: '您将要购买一张考试通行证，这需要花费稀有货币。 您确定要购买这个吗？',
    treasureFragment: '您将要购买碎片，这需要花费稀有货币。 您确定要购买这个吗？',
    treasureDelete: '你即将摧毁一个宝藏，这将给予碎片作为回报。 您确定要购买这个吗？',
    casinoBingoBuy: '您将要购买一张宾果卡，该卡需要稀有货币。 您确定要购买这个吗？',
    casinoWheelSpin: '您即将转动命运之轮，这需要花费稀有货币。 您确定要购买这个吗？',
    consumable: '此操作需要您没有的消耗品。 您想用稀有货币购买这些吗？'
  },
  feature: {
    subfeature: '子功能',

    // Main features
    mining: '采矿',
    village: '村庄',
    horde: '部落',
    farm: '农场',
    gallery: '画廊',

    // Side features
    note: '笔记',
    relic: '圣遗物',
    gem: '宝石',
    achievement: '成就',
    school: '学校',
    card: '卡片',
    general: '将军',
    event: '事件',
    treasure: '宝藏',
    cryolab: '冷冻实验室',
    debug: '调试',

    // Subfeatures
    miningGas: '气体',
    schoolLiterature: '文学',
    schoolHistory: '历史',
    schoolArt: '艺术',
    generalOrladee: '奥拉迪',
    generalOppenschroe: '奥本施罗',
    generalBellux: '贝卢克斯',
    generalOnoclua: '奥诺克卢亚',
    generalOmnisolix: '奥尼索利克斯',

    // Meta
    meta: '游戏'
  },
  subfeature: {
    mining: {
      0: '矿石开采',
      1: '气态巨行星',
    },
    village: {
      0: '工人',
    },
    horde: {
      0: '装备',
    },
    farm: {
      0: '花园',
    },
    gallery: {
      0: '花式',
    }
  },
  unlock,
  mult,
  upgrade,
  currency,
  stat,
  consumable,
  patchnote,
  info: {
    title: 'Gooboo',
    subtitle: '开发者是 Tendsty',
    text: 'Gooboo 是一款放置/增量游戏，您可以在神秘、未知的世界中管理多个功能。 收集不同的资源来购买各种各样的升级，以增加你的资源收益。 取得主要功能的进展以解锁新内容并了解有关这个世界的更多信息。 当进展开始放缓时，声望个人功能可以将您的收获提升到一个新的等级。',
    updates: {
      web: '您使用的是网页版。 游戏会定期检查更新，自动使用最新版本，并在有可用更新时通知您。',
      desktop: {
        0: '您正在使用桌面版本。 您需要手动检查更新在 ',
        1: '正式版',
        2: ' 页面.'
      },
      steam: '您使用的是steam版本。 更新是通过 steam 处理的。'
    },
    viewPatchnotes: '查看更新日志',
    numberFormatting: '数字格式',
    numberFormattingDescription: '为了保持数字可读，极大（和极小）的数字使用以下单位进行格式化.',
    bigNumbers: '大数字',
    smallNumbers: '小数字',
    timeUnits: '时间单位',
    timeUnit: {
      s: '秒',
      m: '分钟',
      h: '小时',
      d: '天'
    },
    socials: {
      title: '社交',
      text: 'Gooboo 可以单独玩，无需外部指南。 但如果你想和其他玩家一起出去玩，你可以参观这些地方:',
      viewCode: '查看源码',
      patreon: 'Patreon',
      reddit: 'Reddit',
      discord: 'Discord'
    },
    supportMe: {
      title: '支持我',
      text: '该游戏是免费的，没有微交易或广告。 如果您想支持开发，请查看我的 patreon 页面:',
      patreon: 'Patreon'
    },
    tech: {
      title: '用到的技术',
      web: 'Web',
      fonts: '字体',
      testing: '自动化测试',
      vue: 'Vue.js',
      vuetify: 'Vuetify',
      vuex: 'vuex',
      snackbars: 'v-snackbars',
      color: 'color',
      mdi: 'Material Design Icons',
      caveat: 'Caveat',
      roboto: 'Roboto',
      robotomono: 'Roboto Mono',
      cypress: 'Cypress',
      jest: 'Jest',
      github: 'GitHub',
      website: '网站',
      googlefonts: 'Google Fonts'
    }
  },
  error: {
    tech: {
      vuejs: 'Vue.js',
      javascript: 'Javascript'
    },
    title: '{0} error',
    source: 'Source: {0}',
    position: 'Line {0}, column {1}',
    reportBug: 'Report bug'
  },
  note,
  school: {
    school: '学校',
    beginner: {
      title: '仍在学习',
      description: '您是这所学校的新手，您的金尘奖励减少至 {0}%。 达到更高的全局等级可以减少此惩罚，并通过达到全局等级 175 来完全消除它。'
    },
    subjectBookGain: '每个解锁的科目每小时都会提供 10 本书，无论年级如何。',
    passCapGain: '您每天都会获得一张新的考试通行证（{0} 中的下一个考试通行证），并且每 10 个全局级别都会获得一张新的考试通行证。',
    buyPass: '购买一张考试通行证花费',
    library: '图书馆',
    practice: '练习',
    practiceDescription: '在没有时间压力的情况下练习该科目，但不会获得任何奖励或成绩',
    study: '学习',
    studyDescription: '在{0}中获得尽可能高的分数，如果您以最好的成绩学习，就有机会提高您的成绩。 根据您的分数，您会获得（或失去）升入下一年级的进度。 预计平均得分为 {1}。',
    studyNoF: '您不能失去 F 级的成绩进度。',
    takeExam: '参加考试',
    takeExamDescription: '参加考试，您有 {0} 的机会获得最高分。 您将收到金粉作为奖励（{1} - {2}，根据您的表现和所选等级）。 如果您获得 {3} 分，则考试被评为完美，您可以解锁下一个等级。',
    takeExamNoF: '您不能参加 F 级考试。',
    takeExamNoFStudy: '先稍微学习一下吧！',
    takeExamCost: '要求',
    examDustFull: '你古老的沙漏已经满了！ 这次考试获得的所有金尘都将丢失！',
    examDustOvercap: '你古老的沙漏快满了。 通过这次考试获得的一些金粉可能会因为上限而丢失。',
    answer: '答题',
    begin: '课程开始了！',
    beginExam: '考试开始了！',
    grade: '成绩',
    gradeDescription: '成绩决定了该科目的难度。 您可以随时切换成绩，通过足够的学习或获得完美的考试成绩来解锁更好的成绩。',
    math: {
      name: '数学',
      subtitle: '求解方程式',
      description: '回答各种方程式来提高你的分数。 每个正确答案得 1 分，每个错误答案扣 1 分（不能低于 0）。 随着等级的提高，数量会越来越多，并且会引入新的操作员。',
    },
    literature: {
      name: '文学',
      subtitle: '写句子',
      description: '输入显示的句子来提高你的分数。 每输入一个句子即可获得 1 分。 同一个句子将一直保留到正确输入为止，并且您可以看到下一个句子的开头。 随着等级的提高，句子和单词会变得更长，并且会引入新的特殊字符。',
    },
    history: {
      name: '历史',
      subtitle: '记住日期',
      description: '记住显示的日期并正确输入它们以提高您的分数。 一开始您可以看到所有日期。 当您记住它们后，您可以继续做问题，这会使日期消失。 您将被问到 5 个问题，与您刚刚看到的日期有关，每个正确的日期将获得 1 分。 随着你的成绩提高，年份会变长，并且会引入更多的日期。',
      year: '年份 {0}',
      examInfo: '在考试中，您有两次记住日期的机会。 完成第一个答案后，您会收到一组新的日期和问题'
    },
    art: {
      name: '艺术',
      subtitle: '混合颜色',
      description: '正确猜测颜色以提高你的分数。 将显示两种颜色，猜测它们混合的结果。 每个正确答案得 1 分，每个错误答案扣 1 分（不能低于 0）。 随着您的成绩提高，会添加更多答案，并且答案会变得更加相似。',
    }
  },
  hourglass: {
    title: '古老的沙漏',
    subtitle: '跳过此功能的时间',
    subtitleSchool: '将考试合格证转化为金粉',
    timeInMinutes: '时间 (分钟)'
  },
  cryolab: {
    frozen: '{0} / {1} 功能冻结',
    active: '主动: {0}%',
    activeTitle: '声望增益 (主动)',
    activeDescription: '每天被动获得相当于您最佳声望的 {0}% 的声望货币。 仅当功能被冻结时此功能才有效。',
    passive: '被动: {0}%',
    passiveTitle: '声望增益 (被动)',
    passiveDescription: '每天被动获得相当于您最佳声望的 {0}% 的声望货币。 仅当功能未冻结时此功能才处于激活状态。',
    expDescription: '你有 {0} / {1} 经验和获得 {2} 经验每天如果此功能被冻结.',
    expDescription2: '经验获取基于您的最佳声望。',
    expNext: '下一级效果:',
    expNoGain: '要获得此功能的经验，请先获得一些声望货币',
    cropExp: '为每种作物获得最多此数量的经验（基础生长时间和黄金成本会减少获得的经验）',
    frozenFeature: {
      title: '功能被冻结',
      description: '此功能已被冷冻实验室冻结。 您不会在此功能中获得任何进展，但会自动获得声望货币。'
    }
  },
  general: {
    completionReward: '完成奖励',
    questGained: '{0} 增益',
    grobodal: {
      name: '格罗博达尔',
      diggingDeeper: '挖掘得更深',
      combatTraining: '战斗训练',
      gardening: '园艺',
      pitchBlack: '漆黑一片',
      masterOfTheSystem: '系统大师',
      thinkPlayerThink: '想一想，玩家，想一想!',
    },
    orladee: {
      name: '奥拉迪',
      beautyOfThisWorld: '这世间的美丽'
    },
    oppenschroe: {
      name: '奥本施罗'
    },
    bellux: {
      name: '贝卢克斯'
    },
    onoclua: {
      name: '奥诺克卢亚'
    },
    omnisolix: {
      name: '奥尼索利克斯'
    },
  },
  event: {
    shop: {
      notFound: 'No shops found',
      bought: 'In stock'
    },
    cinders: {
      name: 'Cinders',
      perProducer: 'per producer',
      candle: {
        tealight: 'Tealight',
        regular: 'Candle',
        aroma: 'Scented candle',
        chandelier: 'Chandelier',
        duration: 'Lasts {0}',
        sootGain: {
          0: 'Generates ',
          1: ' ',
          2: ' after burning'
        }
      }
    },
    bloom: {
      name: 'Bloom',
      tier: 'Tier',
      canSell: 'Can be sold for {0} ',
      sell: 'Choose a flower to sell. When you gain a flower with a full inventory, the lowest tier flower of that type is automatically sold.',
      dragToBreeder: 'Drag a flower here to start breeding',
      wildGrowth: 'Get a random gene on all flowers in your inventory. This cannot bypass the 3 gene limit per flower.',
      boost: 'Get 1 day of progress instantly',
      genes: 'Genes',
      wildgrowth: 'Wild growth',
      flower: {
        daisy: 'Daisy',
        poppy: 'Poppy',
        iris: 'Iris',
        lily: 'Lily',
        orchid: 'Orchid',
        cornflower: 'Cornflower',
      },
      gene: {
        valuable: {
          name: 'Valuable',
          description: '3x blossom value'
        },
        mutating: {
          name: 'Mutating',
          description: '2x gene chance'
        },
        splitting: {
          name: 'Splitting',
          description: '25% chance to breed 2 new flowers'
        },
        resistant: {
          name: 'Resistant',
          description: '+10% tier chance'
        },
        huge: {
          name: 'Huge',
          description: '+1 tier and consume this gene on merge'
        }
      }
    },
    weatherChaos: {
      name: 'Weather chaos',
      chanceToCatch: 'chance to catch',
      powerNeeded: 'fishing power needed',
      maxSize: 'Maximum size',
      owned: 'Owned',
      fishingPowerDescription: 'Fishing power determines which fish you can catch. Reach double fishing power requirement for maximum chance to catch that fish.',
      fishSizeDescription: 'Fish with a size at or below average have the same chance to get caught. Other sizes become harder to catch for each size above average.',
      fishDescription: 'You have a chance to catch a fish if you didn\'t catch a treasure. Available fish types are based on location and weather.',
      trashTitle: 'Trash chance',
      trashDescription: 'You\'ll catch trash when you fail to catch a treasure or fish.',
      treasureDescription: 'You have a small chance to catch a treasure. It can contain bait, new fishing rods or the key to a new location if your fishing power is at least {0}.',
      treasureDescriptionFinal: 'You have a small chance to catch a treasure. It can contain bait or new fishing rods.',
      changeWeather: 'Change weather',
      location: {
        pond: 'Pond',
        lake: 'Lake',
        river: 'River',
        ocean: 'Ocean',
        mountain: 'Mountain',
        cave: 'Cave',
      },
      fish: {
        bronzefish: 'Bronzefish',
        snail: 'Snail',
        cablebiter: 'Cablebiter',
        blueshimmer: 'Blueshimmer',
        introvero: 'Introvero',
        zapling: 'Zapling',
        starcone: 'Starcone',
        phelaria: 'Phelaria',
        coldgil: 'Coldgil',
        silverbrass: 'Silverbrass',
        circlejelly: 'Circlejelly',
        woodcrawler: 'Woodcrawler',
        longdano: 'Longdano',
        legabara: 'Legabara',
        biggiesnail: 'Biggiesnail',
        sunshine: 'Sunshine',
        platiglob: 'Platiglob',
        stormdazer: 'Stormdazer',
        riverTurtle: 'River turtle',
        streamsnail: 'Streamsnail',
        ralmon: 'Ralmon',
        wonelle: 'Wonelle',
        grillgil: 'Grillgil',
        sleepysoo: 'Sleepysoo',
        oozior: 'Oozior',
        paleblob: 'Paleblob',
        crystakin: 'Crystakin',
        shadowbiter: 'Shadowbiter',
      },
      fishingRod: {
        name: 'Fishing rod',
        basic: 'Basic',
        fast: 'Fast',
        leafy: 'Leafy',
        heavy: 'Heavy',
        hardwood: 'Hardwood',
        master: 'Master',
        smelly: 'Smelly',
        turbo: 'Turbo',
        golden: 'Golden',
        dull: 'Dull',
        mystical: 'Mystical',
        twins: 'Twins',
      },
      bait: {
        juicyBait: 'Juicy bait',
        rainbowBait: 'Rainbow bait',
        trashNet: 'Trash net',
        magnet: 'Magnet',
      }
    },
    summerFestival: {
      name: 'Summer festival',
      produces: 'Produces',
      producesNothing: 'Produces nothing',
      empty: 'Empty',
      constructing: 'Constructing',
      upgrading: 'Upgrading',
      deleting: 'Deleting',
      emptyQueue: 'No buildings queued',
      inQueue: 'In queue',
      inDeletionQueue: 'Queued for deletion',
      placeOn: 'Must be placed on',
      rotateDescription: 'Rotate building',
      deleteDescription: 'Delete this building. Resources are not refunded and this needs time in the building queue.',
      complete: 'Complete',
      build: 'Build',
      freeExpansion: {
        s: '{0} free expansion',
        p: '{0} free expansions'
      },
      quest: {
        name: 'Quest',
        currency: 'Collect {0} ',
        building: 'Construct {0}x level {1} {2}'
      },
      tile: {
        beach: 'Beach',
        water: 'Water',
        palm: 'Palm tree',
        forest: 'Forest',
        mountain: 'Mountain',
        plain: 'Plains',
        land: 'Land'
      },
      tilePos: {
        0: 'center',
        1: 'right',
        2: 'bottom right',
        3: 'bottom left',
        4: 'left',
        5: 'top left',
        6: 'top right'
      },
      building: {
        collector: {
          name: 'Collector',
          description: 'Automatically collects resources from adjacent tiles'
        },
        mainStage: {
          name: 'Main stage',
          description: 'Produces music and unlocks more buildings'
        },
        speaker: {
          name: 'Speaker',
          description: ''
        },
        vegetablePatch: {
          name: 'Vegetable patch',
          description: ''
        },
        kitchen: {
          name: 'Kitchen',
          description: 'Produces meals using ingredients',
          action: {
            coconutSalad: 'Coconut salad',
            saltyShell: 'Salty shell',
            lemonCandy: 'Lemon candy',
            steak: 'Steak',
            fishSticks: 'Fish sticks',
          }
        },
        sawmill: {
          name: 'Sawmill',
          description: 'Cut building materials into components',
          action: {
            cutPlates: 'Cut plates',
            cutSandstone: 'Cut sandstone',
            smeltSteel: 'Smelt steel',
            combineMaterial: 'Combine material'
          }
        },
        huntingArea: {
          name: 'Hunting area',
          description: ''
        },
        excavator: {
          name: 'Excavator',
          description: ''
        },
        lighthouse: {
          name: 'Lighthouse',
          description: ''
        },
        grill: {
          name: 'Grill',
          description: 'Cooks food using coal',
          action: {
            cookMeat: 'Cook meat',
            cookFish: 'Cook fish'
          }
        },
        mine: {
          name: 'Mine',
          description: 'Extracts resoures from the mountain'
        },
        hugeSpade: {
          name: 'Huge spade',
          description: 'Digs up sand from a beach'
        },
        shellOpener: {
          name: 'Shell opener',
          description: 'Opens shells for metal parts and rare items',
          action: {
            openShell: 'Open shell'
          }
        },
        waterPurifier: {
          name: 'Water purifier',
          description: 'Cleans the salty ocean water and extracts salt'
        },
        fishingNet: {
          name: 'Fishing net',
          description: 'Catches fish from the ocean'
        },
        pepperField: {
          name: 'Pepper field',
          description: 'Grow and harvest pepper plants'
        },
        beehive: {
          name: 'Beehive',
          description: 'Take honey from hard-working bees'
        },
        citrusPlantation: {
          name: 'Citrus plantation',
          description: 'Cultivates citrus fruit and harvests them'
        }
      },
      buildingEffect: {
        autocollectMult: 'Autocollect amount',
        pearlChance: 'Pearl chance',
      }
    },
    nightHunt: {
      name: 'Night hunt',
      potions: 'Potions',
      performRitual: 'Perform ritual',
      performRitualDescription: 'Consume all chosen ingredients to perform the ritual. Unlock a new potion if you find the right combination of ingredients. Position is important as well!',
      asBonusIngredient: 'As bonus ingredient',
      findablePotions: 'Findable potions of this tier',
      ritualStabilityDescription: 'Stability influences multiple chances based on percentage:',
      ritualStabilityDescription1: '100% - 200%: Chance to keep base ingredients (currently {0}%)',
      ritualStabilityDescription2: '0% - 100%: Chance to keep bonus ingredients (currently {0}%)',
      ritualStabilityDescription3: '-100% - 0%: Chance to fail the ritual without getting any rewards (currently {0}%)',
      ritualSuccessDescription: 'A successful ritual will yield night hunt tokens for new rituals, as well as potentially finding a new potion. Successful rituals on known potions increase their level, yield night hunt tokens and make reaching the next level harder for that potion.',
      ritualFamiliarityDescription: 'Raise stability and success chance for this ritual by this amount if it fails. This bonus stacks and resets on ritual success.',
      ritualHintDescription: 'Chance to reveal a hint about either a slot or the amount of an ingredient. Hints are only given on successful new rituals. For each found hint, this chance is reduced by {0}%. Hints and the hint chance penalty reset when the hinted ritual is found.',
      clickToAdd: 'Click on ingredients to add them to the ritual',
      ingredientSizeDescription: 'Ingredient size allows you to find more ingredients per magical currency',
      newDescription: {
        empty: 'Here you can see if the current recipe is new (not succeeded before) or not',
        isNew: 'This is a new recipe and you will receive a night hunt token if it succeeds',
        isNewPotion: 'You could also discover a new potion',
        discoveredPotion: 'This is a known potion recipe. If this ritual succeeds, you level up the potion and receive night hunt tokens',
        pointless: 'This is a known recipe, there is no point in performing more rituals on this one'
      },
      potion: {
        power: 'Potion of power',
        insight: 'Potion of insight',
        rage: 'Potion of rage',
        calming: 'Potion of calming',
        sorrow: 'Potion of sorrow',
        energy: 'Potion of energy',
        nature: 'Potion of nature',
        intensity: 'Potion of intensity',
        hysteria: 'Potion of hysteria',
        insanity: 'Potion of insanity',
        patience: 'Potion of patience',
        transformation: 'Potion of transformation',
        silence: 'Potion of silence',
        photosynthesis: 'Potion of photosynthesis',
        sun: 'Potion of sun',
        growth: 'Potion of growth',
        solidification: 'Potion of solidification',
        liquification: 'Potion of liquification',
        glowing: 'Potion of glowing',
        stasis: 'Potion of stasis',
        creativity: 'Potion of creativity',
        poison: 'Potion of poison',
        warmth: 'Potion of warmth',
      }
    },
    snowdown: {
      name: 'Snowdown',
      fightCount: 'Fight',
      fight: 'Fight',
      fightDescription: 'Fight the shown opponent at the cost of a few snowballs. If you win, you get snowballs, snowdown tokens, a producer and a chance for a new non-producer item. The non-producer item is guaranteed for the first 5 fights. Your loot rating increases the chance for a new item and the amount of snowballs and snowdown tokens received.',
      pickProducer: 'Pick a producer',
      pickItem: 'Pick an item',
      reroll: 'Reroll',
      rerollDescription: 'Reroll an owned item into another item of the same category (producer or non-producer).',
      buyItem: 'Buy item',
      buyItemDescription: 'Get one of three random non-producer items',
      attackDescription: 'Amount of damage your attacks deal. The final amount of damage will be between 80% and 120% of your attack.',
      healthDescription: 'Amount of damage you can take before freezing and becoming unable to fight.',
      defenseDescription: 'Reduces incoming damage by a flat amount.',
      critDescription: 'Increases your chance of dealing a critical hit by 1% per crit rating. Critical hits deal +10 damage. Above 25% crit chance, you get less crit chance per crit rating as your crit chance approaches 75%. For each 1% crit chance lost to this, get +0.2 crit damage.',
      blockDescription: 'Increases your chance of blocking an attack and taking no damage.',
      boost: 'Get 1 day of progress instantly',
      fighter: {
        player: 'Player',
        snowOwl: 'Snow owl',
        dog: 'Dog',
        cat: 'Cat',
        penguin: 'Penguin',
        rabbit: 'Rabbit',
        turtle: 'Turtle',
        toddler: 'Toddler',
        babysitter: 'Babysitter',
        kid: 'Kid',
        fatKid: 'Fat kid',
        teenager: 'Teenager',
        bully: 'Bully',
        youngAdult: 'Young adult',
        hooligan: 'Hooligan',
        adult: 'Adult',
        snowBot: 'Snow-BOT'
      },
      item: {
        rollingPin: {
          name: 'Rolling pin',
          description: 'Produces dough, which can be baked into cookies, boosting your critical rating'
        },
        forest: {
          name: 'Forest',
          description: 'Produces saplings, which can be grown into pine trees, boosting your attack'
        },
        spiceJar: {
          name: 'Spice jar',
          description: 'Produces cinnamon, which can be used to make mulled wine, boosting your block rating'
        },
        tap: {
          name: 'Tap',
          description: 'Produces water, which can be turned into ice sculptures, boosting your loot rating'
        },
        snowCannon: {
          name: 'Snow cannon',
          description: 'Produces snow, which can be used to make snowmen, giving you additional items'
        },
        shepherd: {
          name: 'Shepherd',
          description: 'Produces yarn, which can be turned into wool hats, boosting your health'
        },
        animalTooth: {
          name: 'Animal tooth',
          description: ''
        },
        collar: {
          name: 'Collar',
          description: ''
        },
        chili: {
          name: 'Chili',
          description: ''
        },
        drumstick: {
          name: 'Drumstick',
          description: ''
        },
        mouse: {
          name: 'Mouse',
          description: 'Heal the player 1 when one of your pets attack'
        },
        bone: {
          name: 'Bone',
          description: 'Your pets heal 1 when they attack'
        },
        gravestone: {
          name: 'Gravestone',
          description: 'Pet freezes heal the player and other pets 15'
        },
        spikedCollar: {
          name: 'Spiked collar',
          description: '30 crit and block rating on a random pet, this bonus transfers to another random pet on freeze'
        },
        heartCollar: {
          name: 'Heart collar',
          description: 'A random pet gets revived once'
        },
        treatBag: {
          name: 'Treat bag',
          description: 'Pets can choose to heal for 50% max health instead of attacking. 3 treats per bag'
        },
        tennisBall: {
          name: 'Tennis ball',
          description: 'All pets get revived when the player freezes'
        },
        appleJuice: {
          name: 'Apple juice',
          description: 'The player can choose to heal for 50% max health instead of attacking. Single use'
        },
        hotWater: {
          name: 'Hot water',
          description: 'The player gets revived once with 25% health'
        },
        dumbbell: {
          name: 'Dumbbell',
          description: 'The player gets 0.5 attack on attack'
        },
        target: {
          name: 'Target',
          description: 'The player gets 4 crit rating on attack'
        },
        gloves: {
          name: 'Gloves',
          description: 'The player gets 0.2 attack and 1 crit rating when attacked'
        },
        snowboard: {
          name: 'Snowboard',
          description: 'First 5 player attacks crit'
        },
        tea: {
          name: '茶',
          description: 'The player heals 25 and crits on the next attack after an enemy freezes'
        },
        starShield: {
          name: '星盾',
          description: '玩家在前 3 回合内获得 5 点护甲'
        },
        coffee: {
          name: '咖啡',
          description: 'The player heals 8 on crit'
        },
        pebbles: {
          name: '鹅卵石',
          description: '玩家在暴击时击晕目标 1 回合'
        },
        sunShield: {
          name: '日盾',
          description: ''
        },
        moonShield: {
          name: '月盾',
          description: ''
        },
        fireplace: {
          name: '壁炉',
          description: ''
        },
        specialSnowflake: {
          name: '特殊雪花',
          description: ''
        },
        candyCane: {
          name: '糖果手杖',
          description: ''
        },
        shovel: {
          name: '铲子',
          description: ''
        },
        turkey: {
          name: '火鸡',
          description: ''
        }
      }
    },
    merchant: {
      name: '商人'
    },
    casino: {
      name: '赌场',
      prize: '奖品',
      bingo: {
        1: '1x 宾果',
        2: '2x 宾果',
        3: '3x 宾果'
      }
    },
    bank: {
      name: '银行',
      description: '通过 3 个选项之一管理您的黄玉。 使用一个选项会禁用所有其他选项。 偿还贷款不需要或消耗任何行动。',
      project: {
        name: '项目',
        expandVault: '扩展金库',
        persuadeInvestors: '说服投资者',
        improveCreditScore: '提高信用评分',
        businessMarketing: '商业营销',
        cardTournament: '赞助卡片锦标赛',
        fund: '基金'
      },
      investment: {
        name: '投资',
        description: '投资黄玉可在下次银行活动时连本带利地收回。 前 {1} 颗黄玉获得 {0}% 的利息，以上所有物品均获得 {2}% 的利息',
        invest: '投资'
      },
      loan: {
        name: '贷款',
        description: '以 {0}% 的利息借用黄玉并稍后偿还。 当您获得满容量的黄玉时，黄玉债务会自动偿还。',
        repay: '偿还',
        borrow: '借用'
      }
    },
    calendar: '日历',
    rewards: '奖励'
  },
  globalLevel: {
    name: '全局等级',
    description: '基于多个值的总和。 用于解锁新功能',
    mining_0: '击碎最深矿井岩石击碎',
    mining_1: '最深的气态巨岩击碎',
    village_0: '最大容纳量',
    horde_0: '击败最高区域首领',
    farm_0: '所有作物等级的总和',
    gallery_0: 'Log5 整体美感',
    debug: '调试'
  },
  theme: {
    name: '主题',
    icon: {
      hasCustomNavbar: 'Custom navigation bar',
      hasCustomBackground: 'Custom background',
      hasCustomColors: 'Custom color palette',
      hasCustomUI: 'Custom UI elements',
      hasAnimations: 'Includes animations',
      hasParticles: 'Includes particles',
    },
    default: '蓝色',
    cyan: '青色',
    green: '绿色',
    yellow: '黄色',
    orange: '橙色',
    brown: '棕色',
    red: '红色',
    pink: '粉色',
    purple: '紫色',
    grey: '灰色',
    sepia: '棕褐色',
    factory: '工业',
    forest: '森林',
    cherry: '樱桃色',
    sky: '天空色',
    polar: '极光',
    prismatic: '棱柱形',
    candlelight: '烛光',
    colorful: '彩色',
    rain: '雨色',
    waves: '波浪',
    autumnForest: '秋天的森林',
    frozen: '冰冷',
  },
  settings: {
    keybinds: {
      name: '键盘绑定',
      nextMainFeature: {
        name: '下一个主要功能'
      },
      debugSkip1m: {
        name: '跳过 1 分钟'
      },
      debugSkip10m: {
        name: '跳过 10 分钟'
      },
      debugSkip1h: {
        name: '跳过 1 小时'
      },
      debugSkip1d: {
        name: '跳过 1 天'
      }
    },
    theme: {
      name: '主题'
    },
    general: {
      name: '通用',
      pause: {
        name: '暂停'
      },
      dark: {
        name: '深色模式'
      },
      autosaveTimer: {
        name: '自动保存'
      },
      lang: {
        name: '语言',
        zh: '简体中文',
        en: '英文',
        de: '德文'
      },
      tabDisplayDesktop: {
        name: 'Tab display',
        icon: 'Icon only',
        text: 'Text only',
        both: 'Icon and text'
      },
      tabDisplayMobile: {
        name: 'Tab display',
        icon: 'Icon only',
        text: 'Text only',
        both: 'Icon and text'
      },
      relativeUpgradeStats: {
        name: 'Relative upgrade stats',
        description: 'Shows the difference instead of before / after values'
      }
    },
    automation: {
      name: 'Automation',
      progressMining: {
        name: 'Mining autoprogress limit',
        description: 'When breaking a rock for the first time, you automatically advance to the next depth if breaking it takes X seconds or less'
      },
      fightHordeBoss: {
        name: 'Autofight horde boss'
      }
    },
    performance: {
      name: 'Performance',
      upgradeListItems: {
        name: 'Upgrades per page'
      },
      cssShadows: {
        name: 'Text shadows',
        0: 'None',
        1: 'Simple',
        2: 'Smooth'
      },
      particleAmount: {
        name: 'Particle amount',
        0: 'None',
        1: 'Reduced',
        2: 'Average',
        3: 'Increased'
      },
      recordAutoplay: {
        name: 'Record autoplay data'
      }
    },
    notification: {
      name: 'Notifications',
      position: {
        name: 'Position',
        0: 'Top left',
        1: 'Top',
        2: 'Top right',
        3: 'Bottom right',
        4: 'Bottom',
        5: 'Bottom left'
      },
      autosave: {
        name: 'Autosave hint'
      },
      backupHint: {
        name: 'Backup hint',
        0: 'Off',
        1: 'Rare',
        2: 'Average',
        3: 'Common'
      },
      updateCheck: {
        name: 'Check for updates'
      },
      note: {
        name: 'Note hint'
      },
      achievement: {
        name: 'Achievement hint'
      },
      heirloom: {
        name: 'Heirloom hint'
      },
      cardPackContent: {
        name: 'Card pack content'
      },
      cropReady: {
        name: 'Crop ready'
      }
    },
    confirm: {
      name: 'Confirmation',
      prestige: {
        name: 'Prestiges'
      },
      gem: {
        name: 'Gem purchases'
      },
      eventToken: {
        name: 'Event token purchases'
      },
      farmRareResources: {
        name: 'Rare farm resource purchases'
      },
      treasureDelete: {
        name: 'Treasure deletion'
      }
    }
  },
  statBreakdown: {
    base: 'Base value',
    min: 'Minimum value',
    max: 'Maximum value',
    globalLevel: 'Global level',
    prestige: 'Prestige',
    graniteBreaksMult: 'Log10 breaks',
    miningTemperature: 'Temperature',
    villageOffering: 'Offerings',
    zoneCleared: 'Zone cleared',
    zoneClearedTotal: 'Highest zone cleared',
    zone: 'Zone',
    hordeBasicLoot: 'Basic loot',
    hordeItemPermanent: 'Equipment effect',
    hordeNostalgia: 'Nostalgia',
    hordeNostalgiaLost: 'Heirlooms found',
    cards: 'Cards',
    treasure: 'Treasure',
    debug: 'Debug',
    bankInvestment: 'Investment',
    alloying: 'Alloying',
    miningResin: 'Resin',
    cryolab: 'Cryolab',
    ritualTier: 'Ritual tier',
    ritualPotionLevel: 'Potion level',
    ritualHint: 'Discovered hints',
    ritualIngredient: 'Bonus ingredient',
  },

  // Feature specific translations
  mining: {
    mine: '矿井',
    gainSummary: 'Gain {0} on hit, {1} (x{2}) on break, {3} per second',
    gainSummaryHit: 'Gain {0} on hit',
    gainSummaryBreak: 'Gain {0} on break',
    depthDweller: 'Depth dweller',
    dweller: {
      title: '当前 / 最高可能的居住深度',
      description1: 'The dweller starts fast and gets slower the closer it gets to its limit.',
      description2: 'For each completed half meter of current dweller depth, your prestige reward increases.',
      description3: 'Highest possible dweller depth is {0}% of your maximum depth in the mine.',
      description4: 'Maximum dweller depth',
      nextTime: 'You reach {0}m in {1}'
    },
    pickaxePower: 'This is the power of your pickaxe and your base damage. Increase it by crafting a better pickaxe.',
    damage: '伤害',
    timeToBreak: 'Time needed to break the current rock',
    durability: '耐用性',
    durabilityDescription: 'The amount of damage needed to break this rock',
    durabilityBreaks: {
      s: 'This rock was broken {0} time',
      p: 'This rock was broken {0} times'
    },
    toughness: '韧性',
    toughnessDescription: 'Reduces incoming damage by a flat amount',
    toughnessHigh: 'Toughness is severely reducing your damage',
    toughnessTooHigh: 'Toughness is too high to deal any damage',
    scrapDescription: 'Gain scrap each time you deal damage after you destroyed this rock at least once. When you destroy a rock you gain {0}x scrap rewards',
    scrapNotBroken: 'You do not gain scrap yet because this rock has never been broken',
    oreNotBroken: 'You do not gain ore yet because this rock has never been broken',
    oreDescription: {
      short: 'Can be found at {0}m or below',
      long: 'Can be found at {0}m - {1}m, or below if the depth is divisible by {2}'
    },
    rareEarthNotBroken: 'You do not gain rare earth yet because this rock has never been broken',
    rareEarthDescription: {
      granite: 'Can be found at {0}m or below for rocks that have been broken 1000 times or more. For each power of 10 breaks above that, the amount gained doubles',
      salt: 'Can be found at {0}m or below for rocks with exactly 1 ore',
      coal: 'Can be found at {0}m or below on each rocks first break',
      sulfur: 'Can be found at {0}m or below when hitting the deepest rock',
      niter: 'Can be found at {0}m or below on power of 10 rock breaks',
      obsidian: 'Can be found at {0}m or below if your pickaxe is not enhanced'
    },
    rareEarthNotAffected: 'This resource is not affected by rare earth gain',
    scrapGainHint: 'You do not get scrap when hitting rocks you have never broken before. Sometimes it is smarter to stay on your current depth to collect more scrap instead of digging down immediately.',
    oreCrafting: 'Click on ores to add them to crafting slots',
    crafting: {
      power: '力量',
      purity: '纯度',
      impurity: '杂质',
      craftPickaxe: '制作镐子',
      purityDescription: 'To reach 50% minimum quality, your purity needs to match your impurity.',
      premiumSlot: 'This is a premium crafting slot. Impurity above x1 is halved and purity is doubled.'
    },
    craftingDescription: 'Consume selected ores and create a new pickaxe with a random power value. If it is better than your current pickaxe ({0} power), replace it.',
    resinDescription: 'Each piece of resin adds 30% power and 25% purity. Up to {0} resin may be used per pickaxe craft.',
    smokeDescription: 'Consume all smoke to create a new pickaxe with a fixed power value',
    smeltery: 'Smeltery',
    smelteryTemperatureDescription: 'Reach certain temperatures to unlock more smelteries. Smelteries also gain +{0}% speed per degree above the requirement',
    smelteryTemperatureDescription2: '由于温度原因，该冶炼厂的速度增加了 +{0}%',
    smelterySpeedDescription: '该冶炼厂的基准时间为 {0}',
    smelt: '冶炼',
    enhance: '增强',
    enhancement: {
      title: '增强',
      description: 'Use bars to apply enhancements to your pickaxe. Each bar has their own unique enhancement that can be applied multiple times. But be careful, each successful enhancement makes the next one more difficult, so think about which enhancements you put on your pickaxe',
      chanceDescription: 'Your enhancements have a {0}% chance to succeed and get {1}% harder when they do. Bars will always be consumed, but the enhancement only applies on success. When you fail, your success chance keeps increasing until you get a successful enhancement. Enhancements are also more likely to succeed at the end of your success bar',
      barAluminium: 'Lightweight',
      barBronze: 'Sturdy',
      barSteel: 'Sharp',
      barTitanium: 'Excavator',
      barShiny: 'Rich'
    },
    gasGain: {
      0: 'Gain ',
      1: '% of your obtainable ',
      2: ' when you break this rock. You can get up to ',
      3: ' in this depth'
    }
  },
  village: {
    job: {
      name: 'Jobs',
      collector: 'Collector',
      farmer: 'Farmer',
      harvester: 'Harvester',
      miner: 'Miner',
      wellWorker: 'Well worker',
      librarian: 'Librarian',
      glassblower: 'Glassblower',
      entertainer: 'Entertainer',
      lumberjack: 'Lumberjack',
      blastMiner: 'Blast miner',
      fisherman: 'Fisherman',
      scientist: 'Scientist',
      gardener: 'Gardener',
      oilWorker: 'Oil worker',
      sculptor: 'Sculptor',
      explorer: 'Explorer',
    },
    policy: {
      name: 'Policies',
      taxes: 'Taxes',
      immigration: 'Immigration',
      religion: 'Religion',
      scanning: 'Scanning',
    },
    buildings: 'Buildings',
    village: 'Village',
    pray: 'Pray',
    unemployed: 'Unemployed',
    unemployedDescription: 'Unemployed citizens do not produce resources. Assign them to a job below',
    taxpayers: 'Taxpayers',
    taxpayersDescription1: 'All working citizens consume up to {0} of each food per second and pay taxes equal to {1} ',
    taxpayersDescription2: ' per food item consumed.',
    happinessDescription: 'Happiness modifies all resource gain (except gold coins and faith)',
    powerDescription: 'Gain a +50% increase to all material and food gain for each power. Your current power multiplies material and food gain by x{0}',
    pollutionDescription: 'Reduce happiness by 1% for each point of pollution. If you have more pollution than tolerance, the happiness penalty increases by 1% per pollution over your tolerance. Your next point of pollution would reduce happiness by {0}%',
    lootDescription: 'Find new loot every time the bar fills',
    lootRarity: 'Loot quality determines your loot rarity distribution:',
    lootNeedQuality: 'Needs over {0} quality',
    buildingStat: 'Total buildings constructed',
    housingStat: 'Total housing constructed (first 25 per building)',
    coinNotAffected: 'Coins are not affected by "All resource gain"',
    faithNotAffected: 'Faith is not affected by "All resource gain" and "Mental resource gain"',
    offering: {
      name: '供品',
      description: {
        0: '牺牲 ',
        1: ' 花费 ',
        2: ' 并增加下一次牺牲的成本。 声望时牺牲成本重置.'
      },
      sacrifice: '牺牲'
    },
    material: '材料',
    food: '食物',
    mental: '精神资源',
    loot: '掠夺',
    foodConsume: '消耗高达 {0} 每秒'
  },
  horde: {
    horde: '部落',
    zone: '区域',
    player: '玩家',
    enemy: '敌人',
    loadoutName: '预载名称',
    newLoadout: '新预载',
    noLoadouts: '无预载',
    monsterPartHint: 'Go to zone 10+ and reach enemy #101 to discover a new currency! That currency is essential to progess further, as it helps you raise your bone capacity.',
    enemyDescription: '与前一个敌人相比，同一区域中的每个敌人都有 x{0} 攻击力、x{1} 生命值和 +{2}% 骨头。 这是敌人 #{3}，具有 x{4} 攻击力、x{5} 生命值和 +{6}% 骨头。 当你死后，所有这些效果都会重置。',
    enemySigil1: {
      s: '该区域内的敌人有 {0} 印记',
      p: '该区域内的敌人有 {0} 印记',
    },
    enemySigil2: {
      s: '.',
      p: ', 选择自 {0} 不同种类.',
    },
    damageTypes: {
      title: '伤害类型',
      description: '每次攻击都有三种伤害类型之一。 每种伤害类型所造成和承受的伤害都可以修改。',
      dealt: '造成',
      taken: '受到',
      physic: '物理',
      magic: '魔法',
      bio: '生物武器'
    },
    itemFindDescription: '击败敌人后有几率获得该装备',
    attackDescription: '每次攻击造成的伤害量',
    attackConversion: {
      text: '每秒发生一次常规攻击，伤害分布如下: ',
      physic: '{0}% 物理伤害',
      magic: '{0}% 魔法伤害',
      bio: '{0}% 生物伤害'
    },
    healthDescription: 'The amount of damage you can take before dying',
    respawnDescription: 'How much time you need to recover from dying',
    reviveDescription: 'Instead of dying, use a revive to get healed to full health',
    critDescription: 'Regular attacks have a chance to deal increased damage. Crit chance can reach values over 100%, in which case the attack damage gets multiplied multiple times',
    toxicDescription: 'Deals poison damage (biological) equal to a percentage of damage this deals on attack',
    divisionShieldDescription: 'Divide all damage you take by (Division shield + 1) and lose 1 division shield after being attacked',
    firstStrikeDescription: 'Deal bonus magical damage if this is your first attack',
    spellbladeDescription: 'Deal bonus magical damage after using an equipment effect. For equipment effects with a cooldown of below 10 seconds, this does not always work',
    cuttingDescription: 'Deal a percentage of your targets current health as biological damage after attacking',
    recoveryDescription: 'Heal a percentage of your missing health after killing an enemy',
    boss: 'Boss',
    miniboss: 'Miniboss',
    minibossDescription: 'Minibosses appear in place of regular enemies and are a bit stronger. They hold valuable loot and up to 2 can be waiting at once. Defeating one also counts as defeating 4 regular enemies',
    minibossSoul: 'Minibosses hold {0} souls',
    minibossHeirloom: 'Minibosses hold {0} souls and have a {1}% heirloom chance ({2} nostalgia)',
    poisonPlayer: 'You are poisoned and take {0} damage per second',
    poisonEnemy: 'This enemy is poisoned and takes {0} damage per second',
    silencePlayer: 'You are silenced and cannot use actives',
    silenceEnemy: 'This enemy is silenced and cannot use actives',
    stunPlayer: 'You are stunned and cannot attack',
    stunEnemy: 'This enemy is stunned and cannot attack',
    stunResist: 'Recover faster from stuns',
    stunBoss: 'Bosses receive +2 stun resist',
    stunMiniboss: 'Minibosses receive +1 stun resist',
    bossBioResist: 'Bosses only take 10% biological damage',
    minibossBioResist: 'Minibosses only take 50% biological damage',
    enemyRespawn: 'Enemies take {0} to respawn and up to {1} enemies can be waiting. Defeating a boss immediately respawns all enemies',
    taunt: {
      title: 'Taunt mode',
      description: 'When taunted, enemies keep spawning even when none are waiting, but all enemies spawned early carry no loot. Taunting only works when trying to reach the boss',
      on: 'Taunt mode is on',
      off: 'Taunt mode is off',
      clickToToggle: 'click to toggle'
    },
    reachBoss: {
      title: 'Reach the boss',
      description: 'To challenge the boss of this zone, you need to defeat {0} enemies without dying'
    },
    fightBoss: {
      title: 'Fight boss',
      description: 'You have defeated enough enemies to challenge the boss of this zone'
    },
    fleeBoss: {
      title: 'Flee from the boss',
      description: 'Run away from this battle and keep fighting regular enemies'
    },
    defeatedBoss: {
      title: 'Boss defeated',
      description: 'You have defeated the boss of this zone, which allows you to travel to the next zone'
    },
    souls: 'Souls',
    stat: {
      crit: 'Crit'
    },
    rampage: {
      name: 'Rampage',
      description: 'Fighting the same enemy for too long makes it angry! You have fought this enemy for {0} and it starts rampaging every {1}.',
      effect: 'Each time an enemy rampages, it gets x{0} attack, +{1}% crit chance, +{2}% crit damage, +{3} stun resist and becomes immune to attack reducing effects.',
      effectCurrent: 'This enemy has rampaged {0} times. It has x{1} attack, +{2}% crit chance, +{3}% crit damage and {4} stun resist.'
    },
    sigil: {
      name: 'Sigil',
      hasActive: 'Has active effect',
      min: 'Appears at zone {0} or higher',
      special: 'Only appears under special conditions',
      inactive: 'inactive',
      power: 'Power',
      health: 'Health',
      bashing: 'Bashing',
      recovery: 'Recovery',
      toughness: 'Toughness',
      strength: 'Strength',
      magic: 'Magic',
      magicBolt: 'Magic bolt',
      fireball: 'Fireball',
      incorporeal: 'Incorporeal',
      focus: 'Focus',
      wisdom: 'Wisdom',
      sparks: 'Sparks',
      protection: 'Protection',
      shielding: 'Shielding',
      resistance: 'Resistance',
      precision: 'Precision',
      screaming: 'Screaming',
      cure: 'Cure',
      sharp: 'Sharp',
      spitting: 'Spitting',
      burst: 'Burst',
      resilience: 'Resilience',
      growing: 'Growing',
      cold: 'Cold',
      fury: 'Fury',
      angelic: 'Angelic',
      toxic: 'Toxic',
      foulBreath: 'Foul breath',
      nuke: 'Nuke',
      rainbow: 'Rainbow',
      drain: 'Drain',
      shocking: 'Shocking',
      berserk: 'Berserk',
      iceGiant: 'Ice giant',
      generic: 'Generic',
    },
    corruption: {
      name: 'Corruption',
      effects: 'Effects',
      power: 'Attack and health x',
      sigil: 'Sigil +',
      revive: 'Revive +'
    },
    activeCooldown: 'Active cooldown',
    itemsEquipped: 'items equipped',
    cleared: 'Cleared',
    fighting: 'Fighting',
    items: {
      name: 'Equipment',
      usableInStun: 'Can be used while stunned',
      utilityOvertime: 'Utility actives can store multiple charges at half speed of the previous one',
      inactive: 'Inactive equipment effects recover their cooldown at {0}% of the usual rate',
      takeEquipped: 'Take equipped',
      dagger: 'Dagger',
      shirt: 'Shirt',
      guardianAngel: 'Guardian angel',
      milkCup: 'Cup of milk',
      starShield: 'Star shield',
      longsword: 'Longsword',
      mace: 'Mace',
      boots: 'Boots',
      liver: 'Liver',
      fireOrb: 'Fire orb',
      campfire: 'Campfire',
      clover: 'Clover',
      snowflake: 'Snowflake',
      oppressor: 'Oppressor',
      toxin: 'Toxin',
      corruptEye: 'Corrupt eye',
      meatShield: 'Meat shield',
      wizardHat: 'Wizard hat',
      redStaff: 'Red staff',
      cleansingSpring: 'Cleansing spring',
      marblePillar: 'Marble pillar',
      rainbowStaff: 'Rainbow staff',
      antidote: 'Antidote',
      brokenStopwatch: 'Broken stopwatch',
      luckyCharm: 'Lucky charm',
      club: 'Club',
      goldenStaff: 'Golden staff',
      toxicSword: 'Toxic sword',
      scissors: 'Scissors',
      cat: 'Cat',
      healthyFruit: 'Healthy fruit',
      glasses: 'Glasses',
      deadBird: 'Dead bird',
      calmingPill: 'Calming pill',
      cleansingFluid: 'Cleansing fluid',
      forbiddenSword: 'Forbidden sword',
      corruptedBone: 'Corrupted bone',
      plaguebringer: 'Plaguebringer',
      forbiddenShield: 'Forbidden shield',
      dangerShield: 'Danger shield',
      forbiddenToxin: 'Forbidden toxin',
      glowingEye: 'Glowing eye',
      experimentalVaccine: 'Experimental vaccine',
      microscope: 'Microscope',
      moltenShield: 'Molten shield',
      cutter: 'Box cutter',
      book: 'Book',
      chocolateMilk: 'Chocolate milk',
      bigHammer: 'Big hammer',
      spookyPumpkin: 'Spooky pumpkin',
      strangeChemical: 'Strange chemical',
      forbiddenHeartShield: 'Forbidden heart-shield',
      cloudStaff: 'Cloud staff',
      secretWeapon: 'Secret weapon',
      bomb: 'Bomb',
      leechingStaff: 'Leeching staff',
      shatteredGem: 'Shattered gem',
      firework: 'Firework',
      bowTie: 'Bow tie',
      mysticalAccelerator: 'Mystical accelerator',
      blazingStaff: 'Blazing staff',

      // Chess pieces
      pawn: 'Pawn',
      knight: 'Knight',
      bishop: 'Bishop',
      rook: 'Rook',
      queen: 'Queen',
      king: 'King'
    },
    active: {
      damagePhysic: {
        0: 'Deal',
        1: 'physical damage'
      },
      damageMagic: {
        0: 'Deal',
        1: 'magical damage'
      },
      damageBio: {
        0: 'Deal',
        1: 'biological damage'
      },
      heal: {
        0: 'Restore',
        1: 'health'
      },
      bone: {
        0: 'Gain',
        1: 'highest zone bones'
      },
      monsterPart: {
        0: 'Gain',
        1: 'highest zone monster parts'
      },
      stun: {
        0: 'Stun the opponent for',
        1: ''
      },
      silence: {
        0: 'Silence the opponent for',
        1: ''
      },
      revive: {
        0: 'Refill',
        1: 'revive'
      },
      removeAttack: {
        0: 'Remove',
        1: 'attack from the opponent'
      },
      raiseAttack: {
        0: 'Permanently increase attack by',
        1: ''
      },
      poison: {
        0: 'Apply',
        1: 'poison'
      },
      antidote: {
        0: 'Remove',
        1: 'poison'
      },
      permanentStat: {
        0: 'Increase ',
        2: ' by',
        1: '(until prestige)'
      },
      divisionShield: {
        0: 'Gain',
        1: 'division shield'
      },
      reviveAll: 'Refill all revives',
      removeStun: 'Remove stuns',
    },
    heirloom: {
      name: 'Heirloom',
      min: 'Appears at zone {0} or higher',
      special: 'Does not appear on regular minibosses',
      description: 'Heirlooms are powerful artifacts that can be found from minibosses and stay forever. Reach higher zones to find more types',
      descriptionTower: 'Heirlooms are powerful artifacts that can be found every {0} floors and stay forever. Reach higher zones or different towers to find more types',
      descriptionDouble: 'The heirloom with the lowest amount is twice as likely to be given. If you have multiple heirlooms tied in lowest amount, this does not apply.',
      descriptionNostalgia: 'Nostalgia increases your chance of finding a heirloom. Finding one with the help of nostalgia removes 1 nostalgia until your next prestige',
      power: 'Power',
      fortitude: 'Fortitude',
      wealth: 'Wealth',
      spirit: 'Spirit',
      sharpsight: 'Sharpsight',
      reaping: 'Reaping',
      remembrance: 'Remembrance',
      holding: 'Holding',
      expertise: 'Expertise',
      mystery: 'Mystery',
      brick: 'Brick',
      heat: 'Heat',
      ice: 'Ice',
    },
    itemMastery: {
      name: 'Mastery',
      description: 'Defeat bosses or minibosses at zone {0} or higher with this item equipped to earn mastery points. Higher zone bosses earn more mastery points.',
      bonuses: 'Raise your mastery level to unlock bonuses for this equipment',
      current: 'This equipment has {0} / {1} mastery points',
      1: 'Keep the equipment after prestige',
      2: 'Adds the option to disable the equipment active for a +{0}% boost to the passive effect',
      3: 'Keep the equipment levels after prestige',
      4: 'The active cooldown is halved, and disabling the active gives a +{1}% boost instead of +{0}%',
      5: 'Can collect up to {0} mystical shards. This value is increased by another {1} for each mastery'
    },
    tower: {
      name: 'Towers',
      description: 'Towers are special places that require a tower key to enter. You can fight enemies for crowns and unique heirlooms until you die. Reach specific floors to permanently unlock new bonuses',
      zoneDescription: 'Enemies in this tower on your highest reached floor are about as strong as a zone {0} enemy. They start at the power of a zone {1} enemy and gain {2} zones worth of stats every floor. Corruption is disabled in towers',
      floorTitle: 'Highest floor defeated',
      floorDescription: 'Defeat enemies on certain floors to unlock permanent bonuses:',
      rewardTitle: 'Rewards',
      rewardDescription1: 'Get {0} crown(s) per defeated enemy',
      rewardDescription2: 'Enemies give heirlooms every {0} floors, and some heirlooms are exclusive to this tower:',
      keyDescription: 'Get {0} tower keys when unlocking a new tower, and get 1 tower key every week (next one in {1})',
      enter: 'Enter',
      enterCost: 'Requires',
      floor: 'Floor {0}',
      brick: 'Brick tower',
      fire: 'Fire tower',
      ice: 'Ice tower',
    }
  },
  farm: {
    farm: 'Farm',
    unlockSeed: 'Unlock seed',
    experience: 'Experience',
    expToLevelUp: 'You need {0} more harvests to reach the next level',
    yield: 'Yield',
    rareDrops: 'Rare drops',
    prestige: {
      description: 'You can prestige a crop that has reached level 4, increasing its prestige level to its current level for bonuses. This will reset all experience, level and genes for that crop. Each prestige level multiplies all crop gain by x1.04.',
      current: 'Your current prestige level is {0}, multiplying all crop gain by x{1}.',
      next: 'Prestiging this crop increases your prestige level by {0}. This raises your total prestige level to {1}, increasing your crop gain to x{2}.',
      nextNoEffect: 'Your level is not higher than your prestige level for this crop. Prestiging will not increase your prestige level, but still reset level and genes.'
    },
    button: {
      plantAll: 'Plant the selected crop ({0}) on all empty tiles. You can also plant a single crop by clicking the empty tile',
      replant: 'All grown crops are harvested and planted again on the same tile',
      replantFertilizer: 'The same fertilizer will be used as well (if possible)',
      harvestAll: 'All grown crops are harvested. You can also harvest a single crop by clicking it',
      delete: 'Remove a crop from a tile. Resources spent are not refunded',
      deleteBuilding: 'Buildings can also be removed this way and are returned to your inventory',
      color: 'Tiles can be colored to make managing large fields easier. Select a color and click a tile to paint it. While you have a color selected, mass actions only affect tiles of the same color',
      colorFilter: 'Only affecting tiles of this color',
    },
    timeDescription: 'Time required to grow',
    overgrowDescription: 'After fully growing, your plants can grow again, but need {0}x (1 / overgrow + 1)x time to grow. Each completed growth cycle counts as an extra harvest with all benefits.',
    fertilizerCostDescription: 'Fertilizer needed per crop',
    goldChance: 'Gold chance',
    goldChanceDescription: 'Harvesting plants has a chance to give gold, based on crop grow time and the amount of garden gnomes placed',
    goldChanceMultiple: 'Gold chances over 100% still increase gold gain, you are guaranteed to find {0} gold and have a {1}% chance to find 1 more',
    goldChanceWarning: 'Place a garden gnome on the field to start finding gold',
    freeUpgrades: {
      s: 'gene left',
      p: 'genes left'
    },
    fertilizerCannotBeBought: 'Cannot be bought',
    crop: {
      carrot: 'Carrot',
      blueberry: 'Blueberry',
      wheat: 'Wheat',
      tulip: 'Tulip',
      potato: 'Potato',
      raspberry: 'Raspberry',
      barley: 'Barley',
      dandelion: 'Dandelion',
      corn: 'Corn',
      watermelon: 'Watermelon',
      rice: 'Rice',
      rose: 'Rose',
      leek: 'Leek',
      honeymelon: 'Honeymelon',
      rye: 'Rye',
      daisy: 'Daisy',
      cucumber: 'Cucumber',
      grapes: 'Grapes',
      hops: 'Hops',
      violet: 'Violet',
      goldenRose: 'Golden rose'
    },
    cropUpgrade: {
      yield: 'x1.15 yield',
      grow: 'x0.8 growth time',
      exp: '+0.5 experience',
      gold: 'x1.12 gold chance',
      overgrow: '+50% overgrow',
      cost: 'x0.75 cost, at least -1 cost reduction',
      double: 'x1.5 yield, exp and gold chance and x1.2 rare drop chance, but x2 growth time',
      fertile: 'Fertilizer effects are 25% stronger',
      drops: 'x1.2 rare drop chance'
    },
    cropUpgradeName: {
      yield: 'Yield',
      grow: 'Grow',
      exp: 'Experience',
      gold: 'Gold',
      overgrow: 'Overgrow',
      cost: 'Cost',
      double: 'Double',
      fertile: 'Fertile',
      drops: 'Drops'
    },
    fertilizerEffect: {
      yield: 'Yield',
      grow: 'Grow',
      gold: 'Gold',
      drop: 'Rare drop chance',
      vegetable: 'Vegetables only',
      fruit: 'Fruits only',
      grain: 'Grains only',
      flower: 'Flowers only'
    },
    building: {
      premium: 'Premium {0}',
      premiumOwned: 'Premium: {0} owned',
      gardenGnome: {
        name: 'Garden gnome',
        description: 'Crops on the field may give gold on harvest. The chance is based on crop grow time.',
        descriptionPremium: 'Crops on the field may give gold on harvest. The chance is doubled and based on crop grow time.',
      },
      sprinkler: {
        name: 'Sprinkler',
        description: 'Crops in the same row grow twice as fast',
        descriptionPremium: 'Crops in the same row grow three times as fast',
      },
      lectern: {
        name: 'Lectern',
        description: 'Crops in the same column give triple experience',
        descriptionPremium: 'Crops in the same column give quintuple experience',
      },
      pinwheel: {
        name: 'Pinwheel',
        description: 'Increases the drop chance on the field by +1% for each unique crop in the surrounding 8 tiles',
        descriptionPremium: 'Increases the drop chance on the field by +2% for each unique crop in the surrounding 8 tiles',
      },
      flag: {
        name: 'Flag',
        description: 'Increases crop gain by +50% if they are in the correct position related to the flag. Vegetable: Top left, Fruit: Top right, Grain: Bottom left, Flower: Bottom right',
        descriptionPremium: 'Increases crop gain by +100% if they are in the correct position related to the flag. Vegetable: Top left, Fruit: Top right, Grain: Bottom left, Flower: Bottom right',
      }
    }
  },
  gallery: {
    gallery: 'Gallery',
    auction: 'Auction',
    colorSuffix: 'color',
    openPackage: 'Open',
    idea: {
      tier: 'Tier {0} idea',
      unlock: 'Unlock idea',

      makeItPretty: 'Make it pretty',
      stompBerries: 'Stomp berries',
      carvePumpkins: 'Carve pumpkins',
      sortWaste: 'Sort waste',
      advertise: 'Advertise',
      beImpatient: 'Be impatient',

      makeLemonade: 'Make lemonade',
      growATree: 'Grow a tree',
      buildComposter: 'Build composter',
      observeRainbow: 'Observe rainbow',
      buildRedReservoir: 'Build red reservoir',
      orderMassiveSafe: 'Order massive safe',

      drawOcean: 'Draw ocean',
      makeWine: 'Make wine',
      calculateOdds: 'Calculate odds',
      buildOrangeReservoir: 'Build orange reservoir',
      thinkHarder: 'Think harder',
    },
    nextInspiration: {
      0: 'Next ',
      1: ' in '
    }
  },
  gem: {
    newGemsTime: 'Gain new gems every time the bar fills. The generator creates new gems every {0}.',
    newGemsTimeAchievement: 'Gain new gems every time the bar fills. Each achievement increases generation speed by +{0}%. Your {1} achievements increase generation speed by +{2}%, from {3} to {4}.'
  },
  achievement: {
    relicReward: 'This relic is given as a reward when completing the next level of this achievement.',
    secret: 'This achievement is secret and does not give any bonuses.'
  },
  treasure: {
    effectSummary: 'Effect summary',
    tier: 'Tier',
    tierItem: 'Tier {0} treasure',
    tierEffect: {
      globalLevel: 'Your global level increases both treasure tier and the chance for higher tier treasure.',
      upgrade: 'Upgrade cost',
      destroy: 'Fragments when destroyed',
      regular: 'Regular effects',
      special: 'Special effects'
    },
    buyFragment: {
      0: 'Buy fragments (',
      1: ') for'
    },
    buyTreasure: 'Get a treasure with random tier and effect',
    upgradeDescription: 'Upgrade a treasure using fragments. The fragment cost depends on treasure tier and level.',
    destroyDescription: 'Destroy a treasure to gain fragments based on treasure tier. All fragments spent on upgrading that treasure will also be returned.'
  },
  relic,
  card
}
