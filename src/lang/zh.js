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
      name: '降雪',
      fightCount: '战斗',
      fight: '战斗',
      fightDescription: '以几个雪球为代价与显示的对手战斗。 如果你赢了，你将获得雪球、降雪代币、生产者和获得新的非生产者物品的机会。 非生产者物品在前 5 场比赛中得到保证。 您的战利品等级会增加获得新物品的机会以及收到的雪球和降雪代币的数量。',
      pickProducer: '选择一个生产者',
      pickItem: '选择一个物品',
      reroll: '重掷',
      rerollDescription: '将拥有的物品重掷到同一类别（生产者或非生产者）的另一个物品中。',
      buyItem: '购买物品',
      buyItemDescription: '获取三个随机非生产者物品之一',
      attackDescription: '你的攻击造成的伤害量。 最终伤害量将在你攻击的 80% 到 120% 之间。',
      healthDescription: '在冻结并无法战斗之前你可以承受的伤害量。',
      defenseDescription: '将传入的伤害减少固定数量。',
      critDescription: '每个暴击等级使你造成暴击的几率提高 1%。 暴击造成 +10 伤害。 暴击率高于 25% 时，当暴击率接近 75% 时，每个暴击等级的暴击率会降低。 为此每损失 1% 暴击率，获得 +0.2 暴击伤害。',
      blockDescription: '增加你格挡攻击且不受伤害的几率。',
      boost: '立即获得 1 天的进度',
      fighter: {
        player: '玩家',
        snowOwl: '雪鸮',
        dog: '狗',
        cat: '猫',
        penguin: '企鹅',
        rabbit: '兔子',
        turtle: '乌龟',
        toddler: '学步儿童',
        babysitter: '保姆',
        kid: '小孩',
        fatKid: '胖孩子',
        teenager: '少年',
        bully: '恶霸',
        youngAdult: '青年人',
        hooligan: '流氓',
        adult: '成人',
        snowBot: '雪地机器人'
      },
      item: {
        rollingPin: {
          name: '擀面杖',
          description: '生产面团，可以将其烘烤成饼干，从而提高您的暴击率'
        },
        forest: {
          name: '森林',
          description: '产生树苗，可以长成松树，增强你的攻击力'
        },
        spiceJar: {
          name: '香料罐',
          description: '生产肉桂，可用于制作热红酒，提高你的格挡率'
        },
        tap: {
          name: '水龙头',
          description: '产生水，可以变成冰雕，提高你的战利品等级'
        },
        snowCannon: {
          name: '雪炮',
          description: '产生雪，可以用来堆雪人，为你提供额外的物品'
        },
        shepherd: {
          name: '牧羊人',
          description: '生产纱线，可制成羊毛帽子，提升您的生命值'
        },
        animalTooth: {
          name: '动物牙齿',
          description: ''
        },
        collar: {
          name: '项圈',
          description: ''
        },
        chili: {
          name: '辣椒',
          description: ''
        },
        drumstick: {
          name: '鼓槌',
          description: ''
        },
        mouse: {
          name: '老鼠',
          description: '当你的一只宠物攻击时治疗玩家 1'
        },
        bone: {
          name: '骨头',
          description: '你的宠物攻击时会治愈 1 点'
        },
        gravestone: {
          name: '墓碑',
          description: '宠物冻结可以治愈玩家和其他宠物 15'
        },
        spikedCollar: {
          name: '尖刺项圈',
          description: '随机宠物有 30 点暴击和格挡等级，此奖励在冻结时转移到另一只随机宠物'
        },
        heartCollar: {
          name: '心形项圈',
          description: '随机宠物复活一次'
        },
        treatBag: {
          name: '治疗袋',
          description: '宠物可以选择治疗 50% 最大生命值而不是攻击。 每袋 3 份零食'
        },
        tennisBall: {
          name: '网球',
          description: '当玩家冻结时所有宠物都会复活'
        },
        appleJuice: {
          name: '苹果汁',
          description: '玩家可以选择治疗 50% 最大生命值而不是攻击。 一次性使用'
        },
        hotWater: {
          name: '热水',
          description: '玩家以 25% 生命值复活一次'
        },
        dumbbell: {
          name: '哑铃',
          description: '玩家受到攻击时获得 0.5 攻击力'
        },
        target: {
          name: '目标',
          description: '玩家攻击时获得 4 暴击等级'
        },
        gloves: {
          name: '手套',
          description: '玩家受到攻击时获得 0.2 攻击力和 1 暴击等级'
        },
        snowboard: {
          name: '滑雪板',
          description: '前5次玩家攻击暴击'
        },
        tea: {
          name: '茶',
          description: '敌人被冻结后，玩家可以治疗 25 点并在下一次攻击中暴击'
        },
        starShield: {
          name: '星盾',
          description: '玩家在前 3 回合内获得 5 点护甲'
        },
        coffee: {
          name: '咖啡',
          description: '玩家暴击时治疗 8 点'
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
      hasCustomNavbar: '自定义导航栏',
      hasCustomBackground: '自定义背景色',
      hasCustomColors: '自定义调色板',
      hasCustomUI: '自定义用户界面元素',
      hasAnimations: '包括动画',
      hasParticles: '包括粒子',
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
      name: '自动化',
      progressMining: {
        name: 'Mining autoprogress limit',
        description: 'When breaking a rock for the first time, you automatically advance to the next depth if breaking it takes X seconds or less'
      },
      fightHordeBoss: {
        name: 'Autofight horde boss'
      }
    },
    performance: {
      name: '性能',
      upgradeListItems: {
        name: '每页升级数'
      },
      cssShadows: {
        name: '文字阴影',
        0: '无',
        1: '简单',
        2: '光滑'
      },
      particleAmount: {
        name: '粒子数量',
        0: '无',
        1: '减少',
        2: '平均',
        3: '增加'
      },
      recordAutoplay: {
        name: '记录自动播放数据'
      }
    },
    notification: {
      name: '通知',
      position: {
        name: '位置',
        0: '左上',
        1: '顶部',
        2: '右上',
        3: '右下',
        4: '底部',
        5: '左下'
      },
      autosave: {
        name: '自动保存提示'
      },
      backupHint: {
        name: '备份提示',
        0: '关闭',
        1: '稀少',
        2: '平均',
        3: '普通'
      },
      updateCheck: {
        name: '检查更新'
      },
      note: {
        name: '笔记提示'
      },
      achievement: {
        name: '成就提示'
      },
      heirloom: {
        name: '传家宝提示'
      },
      cardPackContent: {
        name: '卡包内容'
      },
      cropReady: {
        name: '作物成熟'
      }
    },
    confirm: {
      name: '确认',
      prestige: {
        name: '声望'
      },
      gem: {
        name: '宝石购买'
      },
      eventToken: {
        name: '活动代币购买'
      },
      farmRareResources: {
        name: '稀有农场资源购买'
      },
      treasureDelete: {
        name: '宝藏删除'
      }
    }
  },
  statBreakdown: {
    base: '基础值',
    min: '最小值',
    max: '最大值',
    globalLevel: '全局等级',
    prestige: '声望',
    graniteBreaksMult: 'Log10 中断',
    miningTemperature: '温度',
    villageOffering: '供品',
    zoneCleared: '区域已清理',
    zoneClearedTotal: '清除最高区域',
    zone: '区域',
    hordeBasicLoot: '基础战利品',
    hordeItemPermanent: '装备效果',
    hordeNostalgia: '怀旧之情',
    hordeNostalgiaLost: '发现传家宝',
    cards: '卡片',
    treasure: '宝藏',
    debug: '调试',
    bankInvestment: '投资',
    alloying: '合金化',
    miningResin: '树脂',
    cryolab: '冷冻实验室',
    ritualTier: '仪式层级',
    ritualPotionLevel: '药水等级',
    ritualHint: '发现提示',
    ritualIngredient: '奖励成分',
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
      s: '这块石头被打破了 {0} 次',
      p: '这块石头被打破了 {0} 次'
    },
    toughness: '韧性',
    toughnessDescription: '将受到的伤害减少固定数量',
    toughnessHigh: '韧性正在大幅减少你的伤害',
    toughnessTooHigh: '韧性太高，无法造成任何伤害',
    scrapDescription: '在你摧毁这块岩石至少一次后，每次造成伤害都会获得碎片。 当您摧毁一块岩石时，您将获得 {0}x 的废料奖励',
    scrapNotBroken: '你还没有获得废料，因为这块岩石从未被破碎过',
    oreNotBroken: '您还没有获得矿石，因为这块岩石从未被破碎过',
    oreDescription: {
      short: '可以在 {0}米 或以下找到',
      long: '可以在 {0}米 - {1}米 处找到，如果深度能被 {2} 整除，则可以在以下位置找到'
    },
    rareEarthNotBroken: '你还没有获得稀土，因为这块岩石从未被破碎过',
    rareEarthDescription: {
      granite: '可以在 {0}m 或以下找到已破碎 1000 次或以上的岩石。 每突破 10 次，获得的数量就会翻倍',
      salt: '可以在 {0}m 或以下找到含有 1 个矿石的岩石',
      coal: '可以在每块岩石第一次破碎处的 {0} 米或以下位置找到',
      sulfur: '当撞到最深的岩石时，可以在 {0} 米或以下找到',
      niter: '可以在 {0} 米或以下的地方找到，力量为 10 次岩石破碎',
      obsidian: '如果你的镐没有增强，可以在 {0}m 或以下找到'
    },
    rareEarthNotAffected: '该资源不受稀土增益影响',
    scrapGainHint: '当撞击您以前从未破碎过的岩石时，您不会产生废料。 有时，留在当前深度收集更多废料比立即向下挖掘更明智。',
    oreCrafting: '点击矿石将其添加到制作槽中',
    crafting: {
      power: '力量',
      purity: '纯度',
      impurity: '杂质',
      craftPickaxe: '制作镐子',
      purityDescription: '要达到 50% 的最低质量，您的纯度需要与杂质相匹配。',
      premiumSlot: '这是一个高级制作槽。 高于 x1 的杂质减半，纯度加倍。'
    },
    craftingDescription: '消耗选定的矿石并创建具有随机力量值的新镐。 如果它比您当前的镐（{0} 功率）更好，请更换它。',
    resinDescription: '每一块树脂增加 30% 的力量和 25% 的纯度。 每个镐工艺最多可以使用 {0} 个树脂。',
    smokeDescription: '消耗所有烟雾以创建具有固定力量值的新镐',
    smeltery: '冶炼厂',
    smelteryTemperatureDescription: '达到一定温度即可解锁更多冶炼厂。 冶炼厂的速度也比要求高出每度 +{0}%',
    smelteryTemperatureDescription2: '由于温度原因，该冶炼厂的速度增加了 +{0}%',
    smelterySpeedDescription: '该冶炼厂的基准时间为 {0}',
    smelt: '冶炼',
    enhance: '增强',
    enhancement: {
      title: '增强',
      description: '使用金属锭来增强你的镐。 每个金属锭都有自己独特的增强功能，可以多次应用。 但要小心，每一次成功的增强都会使下一个变得更加困难，所以请考虑一下你在镐上放置了哪些增强',
      chanceDescription: '您的增强有 {0}% 的机会成功，并且成功后难度会增加 {1}%。 能量条总会被消耗，但增强效果仅在成功时生效。 当你失败时，你的成功机会会不断增加，直到你获得成功的增强。 增强功能也更有可能在成功条结束时取得成功',
      barAluminium: '轻量',
      barBronze: '坚固',
      barSteel: '锋利',
      barTitanium: '挖掘机',
      barShiny: '丰富'
    },
    gasGain: {
      0: '获得 ',
      1: '% 你可获得的 ',
      2: ' 当你打破这块石头时。 您最多可以 ',
      3: ' 在这个深度'
    }
  },
  village: {
    job: {
      name: '工作',
      collector: '收集者',
      farmer: '农夫',
      harvester: '收割机',
      miner: '矿工',
      wellWorker: '井工',
      librarian: '图书管理员',
      glassblower: '玻璃吹制工',
      entertainer: '艺人',
      lumberjack: '伐木工',
      blastMiner: '爆破矿工',
      fisherman: '渔夫',
      scientist: '科学家',
      gardener: '园丁',
      oilWorker: '石油工人',
      sculptor: '雕塑家',
      explorer: '探险家',
    },
    policy: {
      name: '政策',
      taxes: '税收',
      immigration: '移民',
      religion: '宗教',
      scanning: '扫描',
    },
    buildings: '建筑',
    village: '村庄',
    pray: '祈祷',
    unemployed: '未分配',
    unemployedDescription: '未分配的村民不生产资源。 将他们分配给以下工作',
    taxpayers: '纳税人',
    taxpayersDescription1: '所有工作的村民每秒消耗每种食物最多 {0}，并缴纳相当于 {1} 的税款 ',
    taxpayersDescription2: ' 每个消耗的食物物品.',
    happinessDescription: '幸福感会修改所有资源增益（金币和信仰除外）',
    powerDescription: '每个力量的所有材料和食物增益增加+50%。 您当前的力量将材料和食物增益乘以 x{0}',
    pollutionDescription: '每污染一点，幸福感就会降低 1%。 如果你的污染程度超过了你的容忍度，那么每污染一次超过你的容忍度，幸福感惩罚就会增加 1%。 您的下一个污染点将使幸福感降低 {0}%',
    lootDescription: '每次进度条填满时都会找到新的战利品',
    lootRarity: '战利品质量决定了战利品的稀有度分布:',
    lootNeedQuality: '需要超过 {0} 的质量',
    buildingStat: '已建成建筑物总数',
    housingStat: '已建成住房总数（每栋建筑前 25 栋）',
    coinNotAffected: '金币不受“所有资源增益”的影响',
    faithNotAffected: '信仰不受“所有资源增益”和“精神资源增益”影响',
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
    monsterPartHint: '前往 10+ 区并找到敌人 #101 来发现新货币！ 这种货币对于进一步进度至关重要，因为它可以帮助您提高骨头容量。',
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
      title: '嘲讽模式',
      description: '当被嘲讽时，即使没有人在等待，敌人也会继续生成，但所有早期生成的敌人都不会携带战利品。 嘲讽仅在试图接近Boss时有效',
      on: '嘲讽模式已开启',
      off: '嘲讽模式已关闭',
      clickToToggle: '点击切换'
    },
    reachBoss: {
      title: '到达Boss',
      description: '要挑战该区域的Boss，您需要在不死亡的情况下击败 {0} 个敌人'
    },
    fightBoss: {
      title: '打Boss',
      description: '你已经击败了足够多的敌人来挑战这个区域的Boss'
    },
    fleeBoss: {
      title: '逃离Boss',
      description: '逃离这场战斗并继续与普通敌人战斗'
    },
    defeatedBoss: {
      title: 'Boss被击败',
      description: '你已经击败了这个区域的Boss，这让你可以前往下一个区域'
    },
    souls: '灵魂',
    stat: {
      crit: '暴击'
    },
    rampage: {
      name: 'Rampage',
      description: 'Fighting the same enemy for too long makes it angry! You have fought this enemy for {0} and it starts rampaging every {1}.',
      effect: 'Each time an enemy rampages, it gets x{0} attack, +{1}% crit chance, +{2}% crit damage, +{3} stun resist and becomes immune to attack reducing effects.',
      effectCurrent: 'This enemy has rampaged {0} times. It has x{1} attack, +{2}% crit chance, +{3}% crit damage and {4} stun resist.'
    },
    sigil: {
      name: '印记',
      hasActive: '具有积极作用',
      min: '出现在区域 {0} 或更高区域',
      special: '仅在特殊条件下出现',
      inactive: '未激活',
      power: '力量',
      health: '生命值',
      bashing: '猛击',
      recovery: '恢复',
      toughness: '韧性',
      strength: '力量',
      magic: '魔法',
      magicBolt: '魔法箭',
      fireball: '火球',
      incorporeal: '无形',
      focus: '聚焦',
      wisdom: '智慧',
      sparks: '火花',
      protection: '保护',
      shielding: '屏蔽',
      resistance: '抵抗',
      precision: '精确',
      screaming: '尖叫',
      cure: '治愈',
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
      name: '装备',
      usableInStun: '可以在眩晕时使用',
      utilityOvertime: '实用活性物质可以以前一个电荷一半的速度存储多个电荷',
      inactive: '不活动的装备效果以正常速度的 {0}% 恢复冷却时间',
      takeEquipped: '携带装备',
      dagger: '匕首',
      shirt: '衬衫',
      guardianAngel: '守护天使',
      milkCup: '一杯牛奶',
      starShield: '星盾',
      longsword: '长剑',
      mace: '狼牙棒',
      boots: '靴子',
      liver: '肝脏',
      fireOrb: '火球',
      campfire: '营火',
      clover: '三叶草',
      snowflake: '雪花',
      oppressor: '压迫者',
      toxin: '毒素',
      corruptEye: '腐败的眼睛',
      meatShield: '肉盾',
      wizardHat: '巫师帽',
      redStaff: '红色杖',
      cleansingSpring: '净化泉',
      marblePillar: '大理石柱',
      rainbowStaff: '彩虹之杖',
      antidote: '解毒剂',
      brokenStopwatch: '坏了的秒表',
      luckyCharm: '幸运符',
      club: '击棍',
      goldenStaff: '金色杖',
      toxicSword: '毒剑',
      scissors: '剪刀',
      cat: '猫',
      healthyFruit: '健康水果',
      glasses: '玻璃',
      deadBird: '死鸟',
      calmingPill: '安神丸',
      cleansingFluid: '洁面液',
      forbiddenSword: '禁忌之剑',
      corruptedBone: '腐烂的骨头',
      plaguebringer: '瘟疫使者',
      forbiddenShield: '禁忌之盾',
      dangerShield: '危险之盾',
      forbiddenToxin: '禁忌毒素',
      glowingEye: '发光的眼睛',
      experimentalVaccine: '实验疫苗',
      microscope: '显微镜',
      moltenShield: '熔火之盾',
      cutter: '美工刀',
      book: '书籍',
      chocolateMilk: '巧克力牛奶',
      bigHammer: '大锤',
      spookyPumpkin: '古怪的南瓜',
      strangeChemical: '奇怪的化学物质',
      forbiddenHeartShield: '禁心之盾',
      cloudStaff: '云杖',
      secretWeapon: '秘密武器',
      bomb: '炸弹',
      leechingStaff: '吸血杖',
      shatteredGem: '破碎的宝石',
      firework: '烟花',
      bowTie: '蝴蝶结',
      mysticalAccelerator: '神秘加速器',
      blazingStaff: '炽热之杖',

      // Chess pieces
      pawn: '士兵',
      knight: '骑士',
      bishop: '主教',
      rook: '骗子',
      queen: '女王',
      king: '国王'
    },
    active: {
      damagePhysic: {
        0: '造成',
        1: '物理伤害'
      },
      damageMagic: {
        0: '造成',
        1: '魔法伤害'
      },
      damageBio: {
        0: '造成',
        1: '生物伤害'
      },
      heal: {
        0: '回复',
        1: '生命值'
      },
      bone: {
        0: '获得',
        1: '最高区域骨头'
      },
      monsterPart: {
        0: '获得',
        1: '最高区域怪物零件'
      },
      stun: {
        0: '击晕对手',
        1: ''
      },
      silence: {
        0: '沉默对手',
        1: ''
      },
      revive: {
        0: '重新填充',
        1: '恢复'
      },
      removeAttack: {
        0: '移除',
        1: '来自对手的攻击'
      },
      raiseAttack: {
        0: '永久增加攻击力',
        1: ''
      },
      poison: {
        0: '应用',
        1: '药水'
      },
      antidote: {
        0: '移除',
        1: '药水'
      },
      permanentStat: {
        0: '提高 ',
        2: ' ',
        1: '(直到声望)'
      },
      divisionShield: {
        0: '获得',
        1: '师盾'
      },
      reviveAll: '恢复所有生命值',
      removeStun: '移除眩晕',
    },
    heirloom: {
      name: '传家宝',
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
      name: '精通',
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
      name: '塔楼',
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
    farm: '农场',
    unlockSeed: '解锁种子',
    experience: '经验值',
    expToLevelUp: '你还需要 {0} 次收获以达到下一等级',
    yield: '生产',
    rareDrops: '稀有掉落',
    prestige: {
      description: '您可以对已达到 4 级的农作物进行声望，将其声望等级提高到当前等级以获得奖励。 这将重置该作物的所有经验、等级和基因。 每个声望等级将所有作物增益乘以 x1.04。',
      current: '您当前的声望等级为 {0}，将所有农作物收益乘以 x{1}。',
      next: '声望此农作物可将您的声望等级提高 {0}。 这会将您的总声望等级提高到 {1}，将您的农作物收益增加到 x{2}。',
      nextNoEffect: '您的等级不高于该作物的声望等级。 声望不会增加你的声望等级，但仍会重置等级和基因。'
    },
    button: {
      plantAll: '在所有空地块上种植选定的作物 ({0})。 您还可以通过单击空地块来种植单一作物',
      replant: '所有生长的作物都被收获并再次种植在同一块地块上',
      replantFertilizer: '也将使用相同的肥料（如果可能）',
      harvestAll: '所有生长的农作物均已收获。 您还可以通过单击来收割单一作物',
      delete: '从地块上移除作物。 消耗的资源不予退还',
      deleteBuilding: '建筑物也可以通过这种方式移除并返回到您的库存中',
      color: '地块可以着色，以便更轻松地管理大片土地。 选择一种颜色并单击地块来绘制它。 当您选择颜色时，批量操作仅影响相同颜色的地块',
      colorFilter: '仅影响该颜色的地块',
    },
    timeDescription: '成长所需时间',
    overgrowDescription: '完全生长后，您的植物可以再次生长，但需要 {0}x (1 / 过度生长 + 1)x 时间才能生长。 每个完成的生长周期都算作一次额外的收获，具有所有好处。',
    fertilizerCostDescription: '每种作物所需肥料',
    goldChance: '黄金几率',
    goldChanceDescription: '根据农作物的生长时间和放置的花园侏儒的数量，收获植物有机会获得黄金',
    goldChanceMultiple: '超过 100% 的金币几率仍然会增加金币收益，保证您找到 {0} 个金币，并且有 {1}% 的机会再找到 1 个金币',
    goldChanceWarning: '在地块上放置一个花园侏儒即可开始寻找黄金',
    freeUpgrades: {
      s: '基因剩余',
      p: '基因剩余'
    },
    fertilizerCannotBeBought: '无法购买',
    crop: {
      carrot: '胡萝卜',
      blueberry: '蓝莓',
      wheat: '小麦',
      tulip: '郁金香',
      potato: '土豆',
      raspberry: '覆盆子',
      barley: '大麦',
      dandelion: '蒲公英',
      corn: '玉米',
      watermelon: '西瓜',
      rice: '大米',
      rose: '玫瑰',
      leek: '韭菜',
      honeymelon: '蜜瓜',
      rye: '黑麦',
      daisy: '雏菊',
      cucumber: '黄瓜',
      grapes: '葡萄',
      hops: '啤酒花',
      violet: '紫罗兰',
      goldenRose: '金玫瑰'
    },
    cropUpgrade: {
      yield: 'x1.15 产量',
      grow: 'x0.8 生长时间',
      exp: '+0.5 经验值',
      gold: 'x1.12 黄金几率',
      overgrow: '+50% 过度生长',
      cost: 'x0.75 成本, 至少降低-1成本',
      double: 'x1.5 产量, 经验值和黄币几率和 x1.2 稀有掉落几率，但 x2 增长时间',
      fertile: '肥料效果增强 25%',
      drops: 'x1.2 稀有掉率'
    },
    cropUpgradeName: {
      yield: '生产',
      grow: '生长',
      exp: '经验值',
      gold: '黄金',
      overgrow: '过度生长',
      cost: '成本',
      double: '双倍',
      fertile: '肥沃',
      drops: '掉落'
    },
    fertilizerEffect: {
      yield: '生产',
      grow: '生长',
      gold: '黄金',
      drop: '稀有掉落几率',
      vegetable: '仅蔬菜',
      fruit: '仅水果',
      grain: '仅粮食',
      flower: '仅鲜花'
    },
    building: {
      premium: '高级 {0}',
      premiumOwned: '高级: {0} 已拥有',
      gardenGnome: {
        name: '花园侏儒',
        description: '田里的庄稼收获时可能会产出黄金。 几率取决于作物的生长时间。',
        descriptionPremium: '田里的庄稼收获时可能会产出黄金。 根据作物生长时间，几率加倍。',
      },
      sprinkler: {
        name: '洒水装置',
        description: '同一行的农作物生长速度是原来的两倍',
        descriptionPremium: '同一行的农作物生长速度是原来的三倍',
      },
      lectern: {
        name: '讲台',
        description: '同一列作物给予三倍经验',
        descriptionPremium: '同一列中的农作物可提供五倍经验',
      },
      pinwheel: {
        name: '风车',
        description: '周围 8 格中每种独特农作物的掉落几率增加 +1%',
        descriptionPremium: '周围 8 格中每种独特农作物的掉落几率增加 +2%',
      },
      flag: {
        name: '旗帜',
        description: '如果作物位于与旗帜相关的正确位置，则作物增益增加 +50%。 蔬菜：左上、水果：右上、谷物：左下、花：右下',
        descriptionPremium: '如果作物位于与旗帜相关的正确位置，则作物增益增加 +100%。 蔬菜：左上、水果：右上、谷物：左下、花：右下',
      }
    }
  },
  gallery: {
    gallery: '画廊',
    auction: '拍卖',
    colorSuffix: '颜色',
    openPackage: '打开',
    idea: {
      tier: '层 {0} 创意',
      unlock: '解锁创意',

      makeItPretty: '让它变得漂亮',
      stompBerries: '踩碎浆果',
      carvePumpkins: '雕刻南瓜',
      sortWaste: '垃圾分类',
      advertise: '广告',
      beImpatient: '缺乏耐心',

      makeLemonade: '制作柠檬水',
      growATree: '种一棵树',
      buildComposter: '建造堆肥机',
      observeRainbow: '观察彩虹',
      buildRedReservoir: '修建红色水库',
      orderMassiveSafe: '订购大量保险箱',

      drawOcean: '画海洋',
      makeWine: '酿酒',
      calculateOdds: '计算胜算',
      buildOrangeReservoir: '修建橙色水库',
      thinkHarder: '更加努力地思考',
    },
    nextInspiration: {
      0: '下一个 ',
      1: ' 还有 '
    }
  },
  gem: {
    newGemsTime: '每次进度条填满时都会获得新的宝石。 生成器创建新宝石每 {0}.',
    newGemsTimeAchievement: '每次进度条填满时都会获得新的宝石。 每项成就都会使生成速度提高 +{0}%。 您的 {1} 成就将生成速度提高了 +{2}%，从 {3} 提高到了 {4}。'
  },
  achievement: {
    relicReward: '此圣遗物是在完成此成就的下一级时作为奖励而给予的。',
    secret: '这项成就是秘密的，不提供任何奖励。'
  },
  treasure: {
    effectSummary: '效果总结',
    tier: '层',
    tierItem: '层 {0} 宝藏',
    tierEffect: {
      globalLevel: '你的全局等级增加了宝藏层级和获得更高层级宝藏的机会。',
      upgrade: '升级成本',
      destroy: '碎片当被摧毁时',
      regular: '普通效果',
      special: '特殊效果'
    },
    buyFragment: {
      0: '购买片段 (',
      1: ') 花费'
    },
    buyTreasure: '获得具有随机等级和效果的宝藏',
    upgradeDescription: '使用碎片升级宝藏。 碎片成本取决于宝藏的层级和等级。',
    destroyDescription: '摧毁宝藏即可根据宝藏层级获得碎片。 所有用于升级该宝藏的碎片也将被返还。'
  },
  relic,
  card
}
