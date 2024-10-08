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
import tag from './zh/tag'

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
    select: '选择',
    deselect: '取消选择',
    take: '拿走',
    max: '最大',
    maxed: '最大',
    free: '免费',
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
    resetProgress: '重置进度',
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
    add: '增加',
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
    },
    import: {
      message: '文件无法加载',
      base64: '解码失败',
      json: 'JSON 无法解码',
      key: '加载的存档文件缺少所需数据',
      version: '该文件来自游戏的较新版本（v{0}，当前版本: v{1})',
      testing: '测试版本中的文件无法在发布版本中使用',
      testingVersion: '来自旧测试版本的文件不能使用',
      migration: '从 v{0} 迁移到 v{1} 时出错',
      checksum: '校验和无效',
    }
  },
  duplicateTab: {
    title: 'Gooboo 已在另一个选项卡中运行',
    description: '为了防止与您的保存文件不一致，Gooboo 只能运行一个。 请关闭此选项卡并返回现有选项卡上的游戏。'
  },
  reset: {
    feature: 'Want to start over? Here you can reset your progress for a single feature without touching other parts of the game.',
    warning: 'This is NOT a prestige and there will be no rewards or refunds for doing this. Resets cannot be undone',
    deleteSave: 'You can also delete your entire savefile here:',
    deleteButton: 'Delete savefile'
  },
  prestigeDescription: {
    mining_ember: 'Gain ember equal to a percentage of your current dweller depth',
    village_blessing: 'Faith will be transformed into blessings',
    village_shares: 'Gain shares equal to 0.1% of your current amount of copper coins',
    horde_soulEmpowered: 'Corrupted souls will be transformed into empowered souls',
    horde_courage: 'Gain courage when you reach level 10, and gain more for each level reached after',
    gallery_cash: 'Gain cash based on your total amount of beauty gained this run',
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
    galleryMotivation: 'You are about to buy motivation, which cost rare currency. Are you sure you want to buy this?',
    treasure: '您将要购买一件新的宝藏，该宝藏需要花费稀有货币。 您确定要购买这个吗？',
    schoolExamPass: '您将要购买一张考试通行证，这需要花费稀有货币。 您确定要购买这个吗？',
    treasureFragment: '您将要购买碎片，这需要花费稀有货币。 您确定要购买这个吗？',
    treasureDelete: '你即将摧毁一个宝藏，这将给予碎片作为回报。 您确定要购买这个吗？',
    casinoBingoBuy: '您将要购买一张宾果卡，该卡需要稀有货币。 您确定要购买这个吗？',
    casinoWheelSpin: '您即将转动命运之轮，这需要花费稀有货币。 您确定要购买这个吗？',
    consumable: '此操作需要您没有的消耗品。 您想用稀有货币购买这些吗？',
    reset: {
      text: 'Are you sure you want to reset the {0} feature? This action cannot be undone!',
    },
    resetAll: 'Are you sure you want to delete your savefile? This action cannot be undone!'
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
    villageCrafting: 'Crafting',
    hordeClasses: 'Classes',
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
      1: '工匠行会',
    },
    horde: {
      0: '装备',
      1: 'Classes',
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
  tag,
  text: {
    villageIngredientBoxGet: 'Receive 3 ingredient boxes',
    hordeBattlePassUpgrade: 'New upgrade',
    hordeBattlePassPrestigeUpgrade: 'New prestige upgrade',
    farmUnlockDna: '解锁 1 级基因的所有 DNA 升级',
    farmGnomeBoost: 'Increase all harvest gain by 4% for each nearby garden gnome. Premium garden gnomes count as 2',
    farmLonelyGrow: '如果田间没有其他此类作物，生长速度会加快两倍',
    farmFertileBoost: 'Increase yield by 30% per sapphire cost of fertilizer',
    farmYieldConversion: '将 5% 的收益转换为其他收益类型',
    farmFastPrestige: '声望将作物等级降低 5，而不是重置为 0',
    farmLuckyHarvest: '1% chance to receive 8x harvest gain',
    farmSelfless: 'Increase yield by +5% for all crops',
    farmUnyielding: '40% chance to replant this crop for free when harvested',
    farmTeamwork: 'Having this gene on one crop of each type doubles all crop yield',
    farmHunter: 'Resource rare drops native to this plant become hunted. Hunt chance is equal to 1% of your rare drop chance. Each time a hunt is successful, resource capacity is increased by 10% of the base value and base hunt chance gets reduced by 5%',
    farmPatient: 'Increases yield by +3% per day passed since this gene was chosen, up to +180% at 60 days',
  },
  upgrade,
  currency,
  stat,
  consumable,
  patchnote,
  info: {
    title: 'Gooboo',
    subtitle: '开发者是 Tendsty',
    testing: '测试',
    text: 'Gooboo 是一款放置/增量游戏，您可以在神秘、未知的世界中管理多个功能。 收集不同的资源来购买各种各样的升级，以增加你的资源收益。 取得主要功能的进展以解锁新内容并了解有关这个世界的更多信息。 当进展开始放缓时，声望个人功能可以将您的收获提升到一个新的等级。',
    updates: {
      web: '您使用的是网页版。 游戏会定期检查更新，自动使用最新版本，并在有可用更新时通知您。',
      desktop: {
        0: '您正在使用桌面版本。 您需要手动检查更新在 ',
        1: '正式版',
        2: ' 页面.'
      },
      offline: {
        0: '您使用的是离线版本。 您需要手动检查更新在 ',
        1: '发布版',
        2: ' 页面.'
      },
      steam: '您使用的是steam版本。 更新是通过 steam 处理的。'
    },
    testingDescription: {
      0: '您正在玩测试版本。 功能可能未完成或有错误，游戏机制可能随时改变。 你可以玩发布版在 ',
      1: '这里',
      2: ' (测试版本中的保存文件无法在游戏的发布版本中使用)'
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
      jsfiledownload: 'Javascript File Download',
      seedrandom: 'seedrandom',
      caveat: 'Caveat',
      roboto: 'Roboto',
      robotomono: 'Roboto Mono',
      cypress: 'Cypress',
      jest: 'Jest',
      github: 'GitHub',
      website: '网站',
      googlefonts: 'Google Fonts'
    },
    cheater: {
      0: {
        title: 'Honorable',
        description: 'Played the game without any of the tools mentioned below',
      },
      100: {
        title: 'Automated',
        description: 'Used tools to automatically perform human-like actions, while still following the game\'s rules',
      },
      200: {
        title: 'Cheater',
        description: 'Edited game variables or used tools to achieve otherwise impossible results or predicted / altered outcomes',
      },
      selfMark: 'Set cheater status',
      selfMarkDescription: 'You can mark yourself as a cheater here. This is purely visual and can be reversed at any time',
      noDetected: 'No cheats detected',
      featureDetected: 'Cheats were detected in the following features:',
      featureDetected2: 'You can remove the cheater mark by fully resetting these features',
      globalDetected: 'Cheats were detected and your savefile has been permanently marked',
      selfMarkClick: 'If you were cheating and the game did not detect it properly, you can click to see options to mark yourself as cheater',
    },
    statistics: {
      name: 'Statistics',
      overview: 'Overview',
      other: 'Other',
      gained: 'Gained',
      maxOwned: 'Highest amount',
      currentTotal: 'current / total',
      defaultPlayerName: 'Player',
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
    reportBug: '报告错误'
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
    cropExp: '为每种作物获得最多此数量的经验（基础生长时间和黄金成本会减少获得的经验）。 然后乘以最高和当前作物等级之间的差异（最高等级的作物没有经验）',
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
      notFound: '没有找到商店',
      bought: '有库存'
    },
    cinders: {
      name: '煤渣',
      perProducer: '每个生产者',
      candle: {
        tealight: '茶烛',
        regular: '蜡烛',
        aroma: '香薰蜡烛',
        chandelier: '吊灯',
        duration: '持续 {0}',
        sootGain: {
          0: '产生 ',
          1: ' ',
          2: ' 在燃烧后'
        }
      }
    },
    bloom: {
      name: '开花',
      tier: '层级',
      canSell: '可以出售获得 {0} ',
      sell: '选择一朵花出售。当你获得一朵库存充足的花时，该类型的最低级别的花会自动出售。',
      dragToBreeder: '拖动一朵花到这里开始繁殖',
      wildGrowth: '在你的库存中的所有花上随机获取一个基因。这不能绕过每朵花3个基因的限制。',
      boost: '立即获得1天的进度',
      genes: '基因',
      wildgrowth: '野性生长',
      flower: {
        daisy: '雏菊',
        poppy: '罂粟',
        iris: '鸢尾花',
        lily: '百合',
        orchid: '兰花',
        cornflower: '矢车菊',
      },
      gene: {
        valuable: {
          name: '宝贵',
          description: '3x 绽放价值'
        },
        mutating: {
          name: '变异',
          description: '2x 基因几率'
        },
        splitting: {
          name: '分裂',
          description: '25% 几率培育 2 朵新花'
        },
        resistant: {
          name: '抗性',
          description: '+10% 层级几率'
        },
        huge: {
          name: '巨大',
          description: '+1 层级并在合并时消耗该基因'
        }
      }
    },
    weatherChaos: {
      name: '天气混乱',
      chanceToCatch: '几率抓住',
      powerNeeded: '需要的钓鱼力量',
      maxSize: '最大尺寸',
      owned: '拥有的',
      fishingPowerDescription: '钓鱼能力决定了你能钓到什么鱼。 达到双倍钓鱼力量要求，以最大程度地捕获该鱼。',
      fishSizeDescription: '大小等于或低于平均水平的鱼被捕获的几率相同。 当尺寸高于平均水平时，其他尺寸就变得更难捕获。',
      fishDescription: '如果你没有钓到宝藏，你还有机会钓到鱼。 可用的鱼类类型取决于地点和天气。',
      trashTitle: '垃圾几率',
      trashDescription: '当你没能钓到宝藏或鱼时，你就会钓到垃圾。',
      treasureDescription: '您有很小的机会捕获宝藏。 如果您的钓鱼能力至少为 {0}，它可能包含鱼饵、新钓鱼竿或新地点的钥匙。',
      treasureDescriptionFinal: '您有很小的机会捕获宝藏。 它可以包含鱼饵或新的钓鱼竿。',
      changeWeather: '改变天气',
      location: {
        pond: '池塘',
        lake: '湖泊',
        river: '河流',
        ocean: '海洋',
        mountain: '高山',
        cave: '洞穴',
      },
      fish: {
        bronzefish: '青铜鱼',
        snail: '蜗牛',
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
        name: '鱼竿',
        basic: '基础',
        fast: '快速',
        leafy: '绿叶',
        heavy: '重',
        hardwood: '硬木',
        master: '精通',
        smelly: '臭',
        turbo: '涡轮',
        golden: '金色',
        dull: '迟钝',
        mystical: '神秘',
        twins: '双胞胎',
      },
      bait: {
        juicyBait: '多汁的诱饵',
        rainbowBait: '彩虹饵',
        trashNet: '垃圾网',
        magnet: '磁铁',
      }
    },
    summerFestival: {
      name: '夏日祭典',
      produces: '生产',
      producesNothing: '什么也不产生',
      empty: '空',
      constructing: '建造中',
      upgrading: '升级',
      deleting: '删除',
      emptyQueue: '建筑队列为空',
      inQueue: '在队列中',
      inDeletionQueue: '队列待删除',
      placeOn: '必须放置在',
      rotateDescription: '旋转建筑物',
      deleteDescription: '删除该建筑物。 资源不会退还，这需要在建造队列中花费时间。',
      complete: '完成',
      build: '建造',
      freeExpansion: {
        s: '{0} 自由扩张',
        p: '{0} 自由扩张'
      },
      quest: {
        name: '任务',
        currency: '收集 {0} ',
        building: '构造 {0}x 等级 {1} {2}'
      },
      tile: {
        beach: '海滩',
        water: '水',
        palm: '棕榈树',
        forest: '森林',
        mountain: '高山',
        plain: '平原',
        land: '陆地'
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
          name: '收集者',
          description: '自动从相邻地块收集资源'
        },
        mainStage: {
          name: '主舞台',
          description: '产生音乐并解锁更多建筑物'
        },
        speaker: {
          name: '扬声器',
          description: ''
        },
        vegetablePatch: {
          name: '菜地',
          description: ''
        },
        kitchen: {
          name: '厨房',
          description: '使用食材制作餐点',
          action: {
            coconutSalad: '椰子沙拉',
            saltyShell: '咸贝壳',
            lemonCandy: '柠檬糖',
            steak: '牛扒',
            fishSticks: '鱼条',
          }
        },
        sawmill: {
          name: '锯木厂',
          description: '将建筑材料切割成组件',
          action: {
            cutPlates: '切割板材',
            cutSandstone: '切割砂岩',
            smeltSteel: '冶炼钢铁',
            combineMaterial: '组合材料'
          }
        },
        huntingArea: {
          name: '狩猎区',
          description: ''
        },
        excavator: {
          name: '挖掘机',
          description: ''
        },
        lighthouse: {
          name: '灯塔',
          description: ''
        },
        grill: {
          name: '烤架',
          description: '用煤做饭',
          action: {
            cookMeat: '烹饪肉类',
            cookFish: '烹饪鱼类'
          }
        },
        mine: {
          name: '矿山',
          description: '从山上开采资源'
        },
        hugeSpade: {
          name: '巨大的铲子',
          description: '从海滩上挖沙子'
        },
        shellOpener: {
          name: '开壳器',
          description: '打开金属零件和稀有物品的外壳',
          action: {
            openShell: '打开外壳'
          }
        },
        waterPurifier: {
          name: '净水器',
          description: '净化咸海水并提取盐'
        },
        fishingNet: {
          name: '捕鱼网',
          description: '从海洋中捕获鱼'
        },
        pepperField: {
          name: '胡椒田',
          description: '种植和收获胡椒植物'
        },
        beehive: {
          name: '蜂窝',
          description: '从勤劳的蜜蜂那里采集蜂蜜'
        },
        citrusPlantation: {
          name: '柑橘种植园',
          description: '种植柑橘类水果并收获它们'
        }
      },
      buildingEffect: {
        autocollectMult: '自动收集数量',
        pearlChance: '珍珠几率',
      }
    },
    nightHunt: {
      name: '夜间狩猎',
      potions: '药水',
      performRitual: '进行仪式',
      performRitualDescription: '消耗所有选定的成分来执行仪式。 如果找到正确的成分组合，即可解锁新药水。 位置也很重要！',
      asBonusIngredient: '一个好的成分',
      findablePotions: '此层可找到的药水',
      ritualStabilityDescription: '稳定性会影响基于百分比的批量几率:',
      ritualStabilityDescription1: '100% - 200%: 保留基础成分的几率 (当前 {0}%)',
      ritualStabilityDescription2: '0% - 100%: 保留奖励成分的几率 (当前 {0}%)',
      ritualStabilityDescription3: '-100% - 0%: 仪式有几率失败而不会获得任何奖励 (当前 {0}%)',
      ritualSuccessDescription: '一次成功的仪式将产生用于新仪式的夜间狩猎代币，并有可能找到新的药水。 对已知药水进行成功的仪式会提高其等级，产生夜间狩猎代币，并使该药水更难达到下一个等级。',
      ritualFamiliarityDescription: '如果该仪式失败，则将该仪式的稳定性和成功几率提高一定量。 此奖励会在仪式成功时叠加并重置。',
      ritualHintDescription: '有几率揭示有关插槽或成分数量的提示。 仅对成功的新仪式给出提示。 对于每个找到的提示，此几率会降低 {0}%。 当发现暗示的仪式时，提示和提示几率惩罚会重置。',
      clickToAdd: '单击成分将其添加到仪式中',
      ingredientSizeDescription: '成分尺寸可让您以每种魔法货币找到更多成分',
      favouriteIngredient: {
        title: 'Favourite ingredient',
        description: 'You can select one ingredient as favourite, and each time you find an ingredient you also receive your favourite ingredient',
        copy: 'Copy found ingredient',
      },
      sackDescription: 'Sacks can appear with high magic amounts, consume 10x more magic and contain 10x the amount of ingredients, split evenly among all available ones',
      newDescription: {
        empty: '在这里你可以看到当前配方是否是新的（之前没有成功过）',
        isNew: '这是一个新配方，如果成功，您将收到夜间狩猎代币',
        isNewPotion: '你还可能发现一种新药水',
        discoveredPotion: '这是已知的药剂配方。 如果这个仪式成功，你会升级药水并获得夜间狩猎代币',
        pointless: '这是一个已知的配方，没有必要在这个配方上进行更多的仪式'
      },
      potion: {
        power: '力量药水',
        insight: '洞察药水',
        rage: '愤怒药水',
        calming: '镇静药水',
        sorrow: '悲伤药水',
        energy: '能量药水',
        nature: '自然药水',
        intensity: '强化药水',
        hysteria: '癔症药水',
        insanity: '疯狂药水',
        patience: '耐心药水',
        transformation: '变身药水',
        silence: '沉默药水',
        photosynthesis: '光合药水',
        sun: '太阳药水',
        growth: '生长药水',
        solidification: '凝固药水',
        liquification: '液化药水',
        glowing: '发光药水',
        stasis: '瘀滞药水',
        creativity: '创意药水',
        poison: '毒药药水',
        warmth: '温暖药水',
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
          description: '玩家在前 3 回合内获得 5 点防御'
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
    village_1: 'Crafting milestones hit',
    horde_0: '击败最高区域首领',
    horde_1: 'Battle pass level',
    farm_0: '所有作物等级的总和',
    gallery_0: 'Log4 整体美感',
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
      prevMainFeature: {
        name: '以前的主要功能'
      },
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
        name: '选项卡显示',
        icon: '只显示图标',
        text: '只显示文字',
        both: '显示图标和文字'
      },
      tabDisplayMobile: {
        name: '选项卡显示',
        icon: '只显示图标',
        text: '只显示文字',
        both: '显示图标和文字'
      },
      relativeUpgradeStats: {
        name: '相对升级统计',
        description: '显示差异而不是之前/之后的值'
      },
      useLegacyFarmSelect: {
        name: 'Old farm selection',
        description: 'Uses the old menu to select crops and buildings in the farm'
      }
    },
    automation: {
      name: '自动化',
      progressMining: {
        name: '挖掘自动进度限制',
        description: '第一次破碎岩石时，如果破碎需要 X 秒或更短时间，您会自动前进到下一个深度'
      },
      fightHordeBoss: {
        name: '自动战斗部落首领'
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
    },
      experiment: {
        name: '实验性',
        warning: '这些设置仍处于实验阶段，可能存在错误、未完成、性能不佳或令人困惑。 启用它们的风险由您自行承担，如果您正在使用它们，请留下反馈！ 如果此部分为空，则表示当时没有可用的实验设置，或者您尚未取得足够的进展，无法看到它们',
        currencyLabel: {
          name: '显示货币标签',
          description: '显示货币收益和达到容量所需的时间，无需悬停'
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
    hordeMaxDifficulty: 'Difficulty cleared',
    hordeBasicLoot: '基础战利品',
    hordeItemPermanent: '装备效果',
    hordeMastery: 'Equipment mastery',
    hordeRest: 'Rest',
    hordeNostalgia: '怀旧之情',
    hordeNostalgiaLost: '发现传家宝',
    hordeClassMult: 'Class multiplier',
    hordeClassLevel: 'Class level',
    hordeBattlePass: 'Battle pass',
    hordeEnergy: 'Energy',
    hordeMana: 'Mana',
    hordeTime: 'Time',
    hordeSacrifice: 'Sacrifice',
    farmEarlyGame: '第一作物',
    galleryCanvas: 'Canvas',
    cards: '卡片',
    cardsShiny: 'Shiny cards',
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
    interest: 'Interest',
    multiplier: 'Multiplier',
  },

  // Feature specific translations
  mining: {
    mine: '矿井',
    gainSummary: '获得 {0} 当击中时, {1} (x{2}) 当挖碎时, {3} 每秒',
    gainSummaryHit: '获得 {0} 当击中时',
    gainSummaryBreak: '获得 {0} 当挖碎时',
    depthDweller: '深度居民',
    dweller: {
      title: '当前 / 最高可能的居住深度',
      description1: '居民开始时速度很快，越接近极限，速度就越慢。',
      description2: '当前居民深度每完成半米，你的声望奖励就会增加。',
      description3: '居民的最大可能深度是矿井中最大深度的 {0}%。',
      description4: '最大居民深度',
      descriptionOvercap: '居民在达到可能的最高深度后可以获得奖励深度，从而使你的声望奖励线性增加。 居民速度降低至 {0}%，达到最高可能深度后每 10% 速度就会再次降低至 {0}%',
      nextTime: '你达到 {0}米 在 {1}'
    },
    pickaxePower: '这是你的镐的力量和基础伤害。 通过制作更好的镐来增加它。',
    damage: '伤害',
    timeToBreak: '击碎目前石头需要时间',
    durability: '耐用性',
    durabilityDescription: '击碎这块岩石所需的伤害量',
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
      obsidian: '如果你的镐没有增强，可以在 {0}m 或以下找到',
      deeprock: 'Can be found at {0}m or below if the digits of the current depth add to 14 or higher',
      glowshard: 'Can be found at {0}m or below, with a chance of 0.1% per meter below the limit. Obtaining one requires you to dig 1m deeper, this limit gets reduced each day by 10%',
    },
    rareEarthNotAffected: '该资源不受稀土增益影响',
    scrapGainHint: '当撞击您以前从未破碎过的岩石时，您不会产生废料。 有时，留在当前深度收集更多废料比立即向下挖掘更明智。',
    oreCrafting: '点击矿石将其添加到制作槽中',
    crafting: {
      power: '力量',
      purity: '纯度',
      impurity: '杂质',
      oreQuality: '制作镐所需的矿石量除以矿石质量',
      craftPickaxe: '制作镐子',
      purityDescription: '要达到 50% 的最低质量，您的纯度需要与杂质相匹配。',
      premiumSlot: '这是一个高级制作槽。 高于 x1 的杂质减半，纯度加倍。',
      minPurity: '制作镐需要至少 0.1% 的最低质量'
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
      barsDescription: '增强功能首先需要任何类型的金属锭。 此数量随着每次增强而增加',
      enhancementDescription: '然后，您需要特定类型的金属锭来确定增强类型。 此数量也会随着该金属锭类型的每次增强而增加',
      barAluminium: '轻量',
      barBronze: '坚固',
      barSteel: '锋利',
      barTitanium: '挖掘机',
      barShiny: '丰富',
      barIridium: '熔岩',
      barDarkIron: 'Void'
    },
    gasGain: {
      0: '获得 ',
      1: '% 你可获得的 ',
      2: ' 当你打破这块石头时。 您最多可以 ',
      3: ' 在这个深度'
    },
    beacon: {
      noBeacon: 'No beacon',
      clickToPlace: 'Click to place beacons',
      selectToPlace: 'Select a beacon to place',
      place: 'Place',
      remove: 'Remove beacon',
      removeDescription: 'You can remove a beacon at any time, but you\'ll need to wait 20 hours to remove another one',
      removeCooldown: 'Wait {0} before you can remove beacons again',
      piercing: 'Piercing beacon',
      rich: 'Rich beacon',
      wonder: 'Wonder beacon',
      hope: 'Hope beacon',
    },
    anomaly: {
      name: 'Anomaly',
      toughness: 'This rock has 100x toughness',
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
    crafting: {
      unlockNew: 'New crafting recipe: ',
      owned: '{0} owned',
      changeStat: {
        value: 'Increase value to {0}',
        timeNeeded: 'Decrease crafting time to {0}'
      },
      nextEffect: 'Next craft effects',
      special: {
        description: 'Special crafts provide permanent bonuses when crafted and their progress does not reset on prestige. Their cost increases with every craft and they do not have milestones'
      },
      crafts: '{0} / {1} 制作',
      sellEvery: '出售 1 每个 ~{0}',
      sellPrice: '出售价格 (值: {0})',
      rope: 'Rope',
      woodenPlanks: 'Wooden planks',
      brick: 'Brick',
      screws: 'Screws',
      waterBottle: 'Water bottle',
      cocktailGlass: 'Cocktail glass',
      boomerang: 'Boomerang',
      polishedGem: 'Polished gem',
      oilLamp: 'Oil lamp',
      shower: 'Shower',
      pouch: 'Pouch',
      cupboard: 'Cupboard',
      weight: 'Weight',
      scissors: 'Scissors',
      herbTea: 'Herb tea',
      glasses: 'Glasses',
      arrows: 'Arrows',
      bowl: 'Bowl',
      chain: 'Chain',
      spear: 'Spear',
      goldenRing: 'Golden ring',
      poisonedArrows: 'Poisoned arrows',
      frostSpear: 'Frost spear',
      spicySoup: 'Spicy soup',
      stopwatch: 'Stopwatch',
      smallChest: 'Small chest',
      bush: 'Bush',
      handSaw: 'Hand saw',
      garage: 'Garage',
      diamondRing: 'Diamond ring',
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
    powerDescription: '每个力量的所有材料和食物增益增加+20%。 您当前的力量将物质和食物增益乘以 x{0}',
    pollutionDescription: '每污染一点，幸福感就会降低 1%。 如果你的污染程度超过了你的容忍度，那么每污染一次超过你的容忍度，幸福感惩罚就会增加 1%。 您的下一个污染点将使幸福感降低 {0}%',
    lootDescription: '每次进度条填满时都会找到新的战利品',
    lootRarity: '战利品质量决定了战利品的稀有度分布:',
    lootNeedQuality: '需要超过 {0} 的质量',
    buildingStat: '已建成建筑物总数',
    housingStat: '已建成住房总数（每栋建筑前 25 栋）',
    coinNotAffected: '金币不受“所有资源增益”的影响',
    faithNotAffected: '信仰不受“所有资源增益”和“精神资源增益”影响',
    artisanDescription: 'Artisans can be assigned to craft items for you',
    counterDescription: 'Counters can be used to sell crafted items to your villagers',
    offering: {
      name: '供品',
      description: {
        0: '牺牲 ',
        1: ' 花费 ',
        2: ' 并增加下一次牺牲的成本。 声望时牺牲成本重置.'
      },
      sacrifice: '牺牲',
      notUnlocked: '此产品尚未解锁。 您仍然可以花费产品，但不能牺牲，并且在解锁产品之前不会应用资源容量',
      notUnlockedHint: '该产品尚未解锁，因此资源容量尚未适用',
      autoGen: '每小时生成本轮游戏 ({0}) 获得的产品的 1%'
    },
    material: '材料',
    food: '食物',
    mental: '精神资源',
    loot: '掠夺',
    specialIngredient: 'Special ingredients',
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
    enemyDescriptionClasses: 'Each enemy in the same zone has x{0} attack, x{1} health and +{2}% blood compared to the previous enemy. This is enemy #{3} and has x{4} attack, x{5} health and +{6}% blood. All of these effects reset when you die.',
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
      bio: '{0}% 生物伤害',
      strengthAmp: 'Each point of strength increases the damage of your regular attacks by +{0}%, for a total of +{1}%. This increases the damage of your regular attacks to {2}.'
    },
    healthDescription: '你在死亡前可承受的伤害数量',
    respawnDescription: '你需要多少时间才能从死亡中恢复过来',
    reviveDescription: '使用复活来恢复完全健康，而不是死亡',
    critDescription: '常规攻击有几率造成更高的伤害。 暴击率可以达到100%以上，此时攻击力会成倍增加',
    toxicDescription: '造成的毒伤（生物）伤害等于攻击造成的伤害的百分比',
    divisionShieldDescription: '将你受到的所有伤害除以（师盾 + 1），并在受到攻击后失去 1 个师盾',
    firstStrikeDescription: '如果这是你的第一次攻击，则造成额外魔法伤害',
    spellbladeDescription: '使用装备效果后造成额外魔法伤害。 对于冷却时间低于 10 秒的装备效果，这并不总是有效',
    cuttingDescription: '攻击后对目标当前生命值造成一定百分比的生物伤害',
    recoveryDescription: '杀死敌人后恢复一定百分比的损失生命值',
    defenseDescription: 'Reduce incoming damage by a percentage of your maximum health',
    executeDescription: 'Instantly kill enemies if they are below a certain health threshold',
    energyDescription: 'Some actives require energy to use. It refills automatically over time',
    manaDescription: 'Some actives require mana to use. It refills slowly over time',
    boss: 'Boss',
    miniboss: '小Boss',
    minibossDescription: '小Boss 会代替普通敌人出现，并且更强一些。 他们拥有宝贵的战利品，并且最多可以同时等待 2 个。 击败 1 名也算击败 4 名普通敌人',
    minibossSoul: '小Boss 拥有 {0} 灵魂',
    minibossHeirloom: '小Boss 拥有 {0} 灵魂并有一个 {1}% 的传家宝几率（{2} 怀旧之情）',
    poisonPlayer: '你中毒了，每秒受到 {0} 点伤害',
    poisonEnemy: '该敌人中毒并每秒受到 {0} 点伤害',
    silencePlayer: '你被沉默并且无法使用主动',
    silenceEnemy: '该敌人已被沉默且无法使用主动技能',
    stunPlayer: '你被眩晕并且无法攻击',
    stunEnemy: '该敌人处于眩晕状态，无法攻击',
    shieldbreak: '更快打破分裂盾',
    stunResist: '从眩晕中恢复得更快',
    stunBoss: 'Boss 获得 +2 眩晕抗性',
    stunMiniboss: '小Boss获得 +1 眩晕抗性',
    bossBioResist: 'Boss 只受到 10% 的生物伤害，但是受到 35% 的魔法伤害',
    minibossBioResist: '小 Boss 只受到 50% 的生物伤害，但是受到 10% 的魔法伤害',
    enemyRespawn: '敌人需要 {0} 时间才能重生，最多可以等待 {1} 个敌人。 击败 Boss 后所有敌人都会立即重生',
    bossBonusDifficulty: 'Boss difficulty',
    bossNoReward: 'You can fight this boss again at any difficulty, but will not receive rewards for doing so',
    energyIncompatible: 'Your currently selected class cannot use this trinket because it requires energy',
    manaIncompatible: 'Your currently selected class cannot use this trinket because it requires mana',
    taunt: {
      title: '嘲讽模式',
      description: '当被嘲讽时，即使没有人在等待，敌人也会继续生成，但所有提前生成的敌人都不会携带战利品。 嘲讽仅在试图接近Boss时有效',
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
      name: '横冲直撞',
      description: '与同一个敌人战斗太久，它会生气！ 您已经与这个敌人战斗了 {0}，它每 {1} 就会开始狂暴。',
      effect: '敌人每次狂暴时，都会获得 x{0} 次攻击、+{1}% 暴击几率、+{2}% 暴击伤害、+{3} 眩晕抗性，并且免疫攻击减少效果。',
      effectCurrent: '该敌人已狂暴 {0} 次。 它具有 x{1} 攻击力、+{2}% 暴击几率、+{3}% 暴击伤害和 {4} 眩晕抗性。'
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
      sharp: '尖锐',
      spitting: '喷吐',
      burst: '爆裂',
      resilience: '弹力',
      growing: '生长',
      cold: '寒冷',
      fury: '暴怒',
      angelic: '天使',
      toxic: '有毒',
      foulBreath: '口臭',
      nuke: '核弹',
      rainbow: '彩虹',
      drain: '流失',
      shocking: '令人震惊',
      defense: '防御',
      executing: '处决',
      berserk: '狂暴',
      iceGiant: '冰巨人',
      generic: '通用',
    },
    corruption: {
      name: '腐败',
      effects: '效果',
      power: '攻击和生命值 x{0}',
      sigil: '印记 +{0}',
      revive: '复活 +{0}',
      execute: '处决 +{0}%'
    },
    activeCooldown: '主动冷却时间',
    activeBuffFor: 'For {0}:',
    itemsEquipped: 'equipment slots used',
    cleared: '已清理',
    fighting: '战斗',
    items: {
      name: '装备',
      usableInStun: '可以在眩晕时使用',
      utilityOvertime: 'CD充满之后，以一半的速度充第二个CD',
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
      mailbreaker: '邮件破坏者',
      club: '击棍',
      goldenStaff: '金色杖',
      toxicSword: '毒剑',
      scissors: '剪刀',
      cat: '猫',
      healthyFruit: '健康水果',
      glasses: '玻璃',
      deadBird: '死鸟',
      shieldDissolver: '护盾溶解器',
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
      hourglass: 'Hourglass',
      glue: 'Glue',
      firework: '烟花',
      bowTie: '蝴蝶结',
      forbiddenStopwatch: 'Forbidden stopwatch',
      mysticalAccelerator: '神秘加速器',
      blazingStaff: '炽热之杖',
      shield: 'Shield',
      armor: 'Armor',
      natureStone: 'Nature stone',
      evergrowingVine: 'Evergrowing vine',
      energyDrink: 'Energy drink',
      dragonheart: 'Dragonheart',
      prism: 'Prism',
      deathsword: 'Deathsword',
      needle: 'Needle',
      mine: 'Mine',
      maskOfJoy: 'Mask of joy',

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
      maxdamagePhysic: {
        0: 'Deal',
        1: 'enemy health physical damage'
      },
      maxdamageMagic: {
        0: 'Deal',
        1: 'enemy health magical damage'
      },
      maxdamageBio: {
        0: 'Deal',
        1: 'enemy health biological damage'
      },
      heal: {
        0: '回复',
        1: '生命值'
      },
      bone: {
        0: '获得',
        1: '最高区域骨头'
      },
      blood: {
        0: '获得',
        1: '最高难度血液'
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
      poison: {
        0: '应用',
        1: '药水'
      },
      antidote: {
        0: '移除',
        1: '中毒效果'
      },
      permanentStat: {
        0: '提高 ',
        2: ' ',
        1: '(直到声望)'
      },
      gainStat: {
        0: 'Permanently increase ',
        2: ' by',
        1: ''
      },
      divisionShield: {
        0: '获得',
        1: '分裂盾'
      },
      removeDivisionShield: {
        0: '移除',
        1: '来自对手的分裂盾'
      },
      executeKill: {
        0: 'Kill an enemy below',
        1: 'health'
      },
      refillEnergy: {
        0: 'Restore',
        1: 'energy'
      },
      refillMana: {
        0: 'Restore',
        1: 'mana'
      },
      buff: {
        duration: '增益持续时间',
        suffix: '(增益)',
      },
      canCrit: '能以{0}%的效率暴击',
      canCritDiff: '激活暴击效率',
      reviveAll: '恢复所有生命值',
      removeStun: '移除眩晕',
    },
    heirloom: {
      name: '传家宝',
      min: '出现在区域 {0} 或更高区域',
      special: '不会出现在普通小Boss身上',
      description: '传家宝是强大的神器，可以从小Boss那里找到并永远保留。 到达更高的区域以找到更多类型',
      descriptionTower: '传家宝是强大的神器，每 {0} 层都可以找到并永久保留。 到达更高的区域或不同的塔楼以找到更多类型',
      descriptionDouble: '数量最低的传家宝被给予的可能性是前者的两倍。 如果您有多件传家宝数量最低，则此规定不适用。',
      descriptionNostalgia: '怀旧之情会增加您找到传家宝的机会。 在怀旧之情的帮助下找到一个可以消除 1 怀旧之情，直到你的下一个声望',
      power: '力量',
      fortitude: '坚韧',
      wealth: '财富',
      spirit: '精神',
      sharpsight: '锐视',
      reaping: '收割',
      remembrance: '纪念',
      holding: '保持',
      expertise: '经验值',
      mystery: '神秘',
      brick: '砖',
      heat: '热',
      ice: '冰',
      crystal: 'Crystal',
      vitality: 'Vitality',
    },
    itemMastery: {
      name: '精通',
      description: '装备此装备击败 {0} 区或更高区域的Boss或小Boss，即可获得精通点数。 更高的区域Boss可以获得更多的精通点。',
      gain: '从该区域的 Boss 处获得 {0} 精通点，并从小 Boss 处获得该值的 {1}% ({2})',
      bonuses: '提高你的精通等级来解锁该装备的奖励',
      current: '该装备拥有 {0} / {1} 精通点',
      1: '声望后保留装备',
      2: '添加了禁用主动装备的选项，使被动效果提高 +{0}%',
      3: '声望后保留装备等级',
      4: '主动冷却时间减半，禁用主动冷却时间会增加 +{1}%，而不是 +{0}%',
      5: '最多可以收集 {0} 个神秘碎片。 每次精通此值都会增加 {1}'
    },
    tower: {
      name: '塔楼',
      description: '塔楼是需要塔楼钥匙才能进入的特殊场所。 你可以与敌人战斗，争夺王冠和独特的传家宝，直到死去。 到达特定楼层即可永久解锁新奖励',
      zoneDescription: '位于您到达的最高楼层的这座塔中的敌人大约与 {0} 区敌人一样强大。 他们以 {1} 区敌人的力量开始，并在每层获得相当于 {2} 区的属性。',
      floorTitle: '最高层被击败',
      floorDescription: '击败某些楼层的敌人即可解锁永久奖励：',
      rewardTitle: '奖励',
      rewardDescription1: '每击败一个敌人获得 {0} 皇冠',
      rewardDescription2: '敌人每 {0} 层都会提供传家宝，有些传家宝是这座塔独有的:',
      keyDescription: '解锁新塔楼时获得 {0} 个塔楼钥匙，每周获得 1 个塔楼钥匙（下一个在 {1}）',
      enter: '进入',
      enterCost: '需要',
      floor: '层 {0}',
      brick: '砖塔',
      fire: '火塔',
      ice: '冰塔',
      danger: 'Danger tower',
      toxic: 'Toxic tower',
    },
    classes: {
      skill: 'Skill',
      skillPointsLeft: '{0} skill point(s) left',
      skillPointCost: 'Needs {0} skill points to level up',
      skillTreeChoice: 'Here you can make a choice, picking one of these skills locks the other paths',
      adventurer: {
        name: 'Adventurer',
        description: 'A versatile fighter that can deal with every situation'
      },
      archer: {
        name: 'Archer',
        description: 'A ranged fighter that focuses on critical strikes and consistent damage'
      },
      mage: {
        name: 'Mage',
        description: 'A fighter that utilizes spells to quickly deal with foes and allows autocasting'
      },
      knight: {
        name: 'Knight',
        description: 'A durable fighter that slowly takes down opponents, but can deal with strong enemies'
      },
      assassin: {
        name: 'Assassin',
        description: 'A nimble fighter that focuses on killing enemies quickly'
      },
      shaman: {
        name: 'Shaman',
        description: 'A fighter bound to nature that utilizes healing and poison to win fights'
      },
      pirate: {
        name: 'Pirate',
        description: 'The pirate may not be best combatant, but excels at looting'
      },
      undead: {
        name: 'Undead',
        description: 'A weak fighter that offsets this weakness with superior numbers'
      },
      cultist: {
        name: 'Cultist',
        description: 'A versatile fighter that specializes on one task at a time'
      },
      scholar: {
        name: 'Scholar',
        description: 'A supportive fighter that helps other classes'
      }
    },
    battlePass: {
      name: 'Battle pass',
      quest: {
        stat: 'Reach {0} {1}',
        zone: 'Clear {0} zone {1}',
        level: 'Reach level {0}',
        boss: 'Defeat {0} (+{1})'
      },
      statType: {
        base: 'base {0}',
        total: 'total {0}',
      }
    },
    enemyName: {
      soldier: 'Soldier',
      officer: 'Police officer',
      hunter: 'Hunter',
      sniper: 'Sniper',
      strongMonkey: 'Strong monkey',
      angryMonkey: 'Angry monkey',
      dartMonkey: 'Dart monkey',
      monkeyWizard: 'Monkey wizard',
      monkeyDefender: 'Monkey defender',
      monkeyMonk: 'Monkey Monk',
      puppy: 'Puppy',
      kitten: 'Kitten',
      seal: 'Seal',
      piglet: 'Piglet',
      panda: 'Panda',
      koala: 'Koala',
      rabbit: 'Rabbit',
      guineaPig: 'Guinea pig',
    },
    bossName: {
      ohilio_guard1: 'Guard A',
      ohilio_guard2: 'Guard B',
      ohilio: 'ohilio',
      chriz1: 'Chriz',
      chriz2: 'Chriz',
      mina: 'mina',
    },
    area: {
      zoneEndless: 'Endless zone',
      zoneBoss: 'Boss ({0})',
      zone: 'Zone {0}',
      difficulty: '{0} difficulty',
      enemyAmount: '{0} enemies in this zone',
      warzone: 'Warzone',
      monkeyJungle: 'Monkey jungle',
      loveIsland: 'Love island',
    },
    sign: {
      sign_1: {
        text: 'My aim is perfect, I never miss! You better watch out!',
        signed: 'ohilio',
      },
      sign_2: {
        text: 'Think you can hurt me? Never! I\'ll dodge everything, you won\' even be able to hit me! I\'m untouchable!',
        signed: 'ohilio',
      },
      sign_3: {
        text: 'I am the greatest, the best, perfect, undefeatable! Even my guards are nothing compared to me! You think you stand a chance against me? Hah! Prepare to die!',
        signed: 'ohilio',
      },
      sign_4: {
        text: 'After taking a close look at these cute animals, you notice they are not real. They are just will-o-wisps! But why are they here? To make you feel bad? No time to think about it, you need to fight to get past these animal spirits',
        signed: '???',
      },
    },
    quest: {
      name: 'Quests',
      description: 'Complete quests to advance your battle pass and unlock permanent rewards',
      completed: '{0} completed',
      allCompleted: 'All quests completed',
    },
    trinket: {
      rarity: {
        0: 'Unowned',
        1: 'Common',
        2: 'Uncommon',
        3: 'Rare',
        4: 'Epic',
        5: 'Legendary',
        6: 'Mythic',
        7: 'Extraordinary',
        8: 'Radiant',
        9: 'Prismatic',
        10: 'Finalized',
        timeless: 'Timeless'
      },
      equipped: 'trinkets selected (equipped after prestige)',
      vitality: 'Vitality',
      energy: 'Energy',
      magic: 'Magic',
      fists: 'Fists',
      sparks: 'Sparks',
      haste: 'Haste',
      precision: 'Precision',
      wrath: 'Wrath',
      strength: 'Strength',
      toxins: 'Toxins',
      wisdom: 'Wisdom',
      extraction: 'Extraction',
      learning: 'Learning',
      preservation: 'Preservation',
      energize: 'Energize',
      automation: 'Automation',
      cure: 'Cure',
      duality: 'Duality',
      love: 'Love',
    },
    sacrifice: {
      name: 'Sacrifice',
      description: 'Here you can temporarily sacrifice equipment slots to receive powerful bonuses in exchange'
    }
  },
  farm: {
    farm: '农场',
    unlockSeed: '解锁种子',
    experience: '经验值',
    expToLevelUp: '你还需要 {0} 次收获以达到下一等级',
    yield: '生产',
    rareDrops: '稀有掉落',
    huntedRareDrops: 'Hunted rare drops',
    addRareDrop: '增加稀有掉落 ({0})',
    addRareDropAmount: '{0} 数量',
    prestige: {
      description: '您可以对已达到 4 级的农作物进行声望，将其声望等级提高到当前等级以获得奖励。 这将重置该作物的所有经验、等级和基因。 每个声望等级将所有作物增益乘以 x1.04。',
      current: '您当前的声望等级为 {0}，将所有农作物收益乘以 x{1}。',
      next: '声望此农作物可将您的声望等级提高 {0}。 这会将您的总声望等级提高到 {1}，将您的农作物收益增加到 x{2}。',
      nextNoEffect: '您的等级不高于该作物的声望等级。 声望不会增加你的声望等级，但仍会重置等级和基因。',
      cropOnField: '你现在无法声望，因为这种作物已经在田里了'
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
      goldenRose: '金玫瑰',
      sweetPotato: 'Sweet potato',
      strawberry: 'Strawberry',
      sesame: 'Sesame',
      sunflower: 'Sunflower',
      spinach: 'Spinach',
    },
    gene: {
      name: '基因',
      pickLevel: '选择级别 {0} 的基因',
      dnaDescription: '当这种作物达到新的等级时，你就会获得 DNA，并可以将其用于基因升级。 下一个作物等级提供 {0} DNA',
      dnaDuplicate: '您选择的基因不会出现在您的下一个声望中。 不挑选基因可以在下一个声望中使用所有 4 个基因',
      dnaBlocked: '阻断的基因',
      hasUpgrade: '有基因升级',
      lockOnField: 'This gene cannot be picked with this crop on the field',
      basics: 'Basics',
      yield: '产量',
      gold: '黄金',
      exp: '经验值',
      rareDrop: '稀有掉落',
      grow: '生长',
      overgrow: '过度生长',
      giant: '巨人',
      grass: '草',
      dna: 'DNA',
      gnome: '侏儒',
      lonely: '孤独',
      fertile: '肥沃',
      mystery: '神秘',
      conversion: '转换',
      prestige: '声望',
      rareDropChance: '发现',
      lucky: 'Lucky',
      finalize: 'Finalize',
      selfless: 'Selfless',
      unyielding: 'Unyielding',
      teamwork: 'Teamwork',
      hunter: 'Hunter',
      patient: 'Patient',
    },
    fertilizerEffect: {
      vegetable: '仅蔬菜',
      berry: '仅浆果',
      grain: '仅粮食',
      flower: '仅鲜花'
    },
    building: {
      premium: '高级 {0}',
      premiumOwned: '高级: {0} 已拥有',
      owned: '{0} 已拥有',
      gardenGnome: {
        name: '花园侏儒',
        description: '当花园侏儒放置在田野上时，田野上的农作物可能会在收获时产生黄金。 几率取决于作物的生长时间。',
        descriptionPremium: '当花园侏儒放置在田野上时，田野上的农作物可能会在收获时产生黄金。 根据作物生长时间，几率加倍。',
      },
      sprinkler: {
        name: '洒水装置',
        description: '同一行中的农作物生长速度加快 50%，并且过度生长 +150%',
        descriptionPremium: '同一行中的农作物生长速度加快 100%，并且过度生长 +300%',
      },
      lectern: {
        name: '讲台',
        description: '同一列作物给予三倍经验',
        descriptionPremium: '同一列中的农作物可提供五倍经验',
      },
      pinwheel: {
        name: '风车',
        description: '周围 8 格中每种独特农作物的掉落几率增加 +0.015x',
        descriptionPremium: '周围 8 格中每种独特农作物的掉落几率增加 +0.03x',
      },
      flag: {
        name: '旗帜',
        description: '如果作物位于与旗帜相关的正确位置，则作物增益增加 +50%。 蔬菜：左上，浆果：右上、谷物：左下、花：右下',
        descriptionPremium: '如果作物位于与旗帜相关的正确位置，则作物增益增加 +100%。 蔬菜：左上，浆果：右上、谷物：左下、花：右下',
      }
    }
  },
  gallery: {
    gallery: '画廊',
    auction: '拍卖',
    colorSuffix: '颜色',
    openPackage: '打开',
    colorGainReduced: '100 种颜色后额外增益减少为平方根',
    drumCompounding: '为了能够找到这个鼓，你还必须找到所有以前的颜色的鼓在同一包装。这降低了找到鼓的有效机会',
    allConverterInfo: '转换颜色总是消耗所有转换器',
    converterOverload: '对于这种转换，您有比颜色更多的转换器，从而产生x{0}转换增益',
    idea: {
      tier: '层 {0} 创意',
      unlock: '解锁创意',

      makeItPretty: '让它变得漂亮',
      stompBerries: '踩碎浆果',
      carvePumpkins: '雕刻南瓜',
      sortWaste: '垃圾分类',
      advertise: '广告',
      beImpatient: '缺乏耐心',
      beExcited: 'Be excited',

      makeLemonade: '制作柠檬水',
      growATree: '种一棵树',
      buildComposter: '建造堆肥机',
      observeRainbow: '观察彩虹',
      buildRedReservoir: '修建红色水库',
      orderMassiveSafe: '订购大量保险箱',
      buyPen: 'Buy pen',

      drawOcean: '画海洋',
      makeWine: '酿酒',
      calculateOdds: '计算胜算',
      buildOrangeReservoir: '修建橙色水库',
      thinkHarder: '更加努力地思考',
      paintFaster: 'Paint faster',
      buyBrush: 'Buy brush',

      harvestOranges: 'Harvest oranges',
      pulverizeGold: 'Pulverize gold',
      buildYellowReservoir: 'Build yellow reservoir',
      paintForFun: 'Paint for fun',
      printNewspaper: 'Print newspaper',
      expandCanvas: 'Expand canvas',
      hyperfocus: 'Hyperfocus',

      cutGrass: 'Cut grass',
      shapeClay: 'Shape clay',
      buildGreenReservoir: 'Build green reservoir',
      beMysterious: 'Be mysterious',

      lookAtTheSky: 'Look at the sky',
      chewBubblegum: 'Chew bubblegum',
      buildBlueReservoir: 'Build blue reservoir',
    },
    nextInspiration: {
      0: '下一个 ',
      1: ' 还有 '
    },
    shapes: {
      name: 'Shapes',
      upgrades: 'Shape upgrades',
      description: 'Drag a shape to an adjacent one to switch postitons, or click one to collect it. Collecting requires 5 shapes of the same type to be connected and the amount of shapes gained per shape is equal to the collection combo.',
      cost: 'Each action costs',
      special: {
        name: 'Special shapes',
        description: 'A special shape has a {0}% chance to appear instead of a regular shape, and special collections give {1}x shapes. There can only be one special shape on the grid',
        bomb: 'All shapes in a + formation are special collected',
        dice: 'All shapes that do not match the shape above (or below if at top row) this get rerolled',
        accelerator: 'The surrounding 8 shapes are special collected. If all 8 of them are the same, spend all motivation to gain even more shapes',
        sparkles: 'The 4 directly adjacent shapes get regular collected if possible and count as one big combo',
        hourglass: 'Immediately get converters and packages, collect shapes to increase the time',
        chest: 'Special collect 10 nearby shapes, the 8 surrounding ones and the ones to the left and right. If all 10 shapes are different, receive a special reward'
      },
      buyFor: {
        0: 'Buy',
        1: 'for'
      },
      reroll: 'Reroll the entire grid for',
      unlock: 'Unlock shape: {0}',
      circle: 'Circle',
      rectangle: 'Rectangle',
      triangle: 'Triangle',
      star: 'Star',
      ellipse: 'Ellipse',
      heart: 'Heart',
      square: 'Square',
      octagon: 'Octagon',
      pentagon: 'Pentagon',
      hexagon: 'Hexagon',
      bomb: 'Bomb',
      dice: 'Dice',
      accelerator: 'Accelerator',
      sparkles: 'Sparkles',
      hourglass: 'Hourglass',
      chest: 'Chest',
    },
    canvas: {
      name: 'Canvas',
      description: 'Put colors on the canvas to slowly increase their canvas level, granting you permanent bonuses',
      level: 'Canvas level',
      untilNextLevel: '{0} until next level'
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
