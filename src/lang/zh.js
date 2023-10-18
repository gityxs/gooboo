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
    title: 'Gooboo is already running in another tab',
    description: 'To prevent inconsistencies with your savefile, Gooboo can only run once. Please close this tab and return to the game on the existing tab.'
  },
  confirm: {
    title: 'Confirm action',
    prestige: 'You are about to prestige, resetting all of your progress in this feature in exchange for prestige currency. Are you sure you want to prestige?',
    prestigeNoGain: 'You are about to prestige, resetting all of your progress. Because of your lack of progress, you don\'t get any prestige currency. Are you sure you want to prestige?',
    prestigeCrop: 'You are about to prestige this crop, resetting all of its levels, experience and genes in exchange for a permanent gain bonus to all crops. Are you sure you want to prestige?',
    upgrade: {
      0: 'You are about to buy the upgrade ',
      1: ', which costs rare currency. Are you sure you want to buy this?'
    },
    shop: 'You are about to buy an event reward, which costs rare currency. Are you sure you want to buy this?',
    theme: {
      0: 'You are about to buy the theme ',
      1: ', which costs rare currency. Are you sure you want to buy this?'
    },
    cardPack: {
      0: 'You are about to buy the card pack ',
      1: ', which costs rare currency. Are you sure you want to buy this?'
    },
    weatherChaosFishingRodBuy: 'You are about to buy the fishing rod "{0}", which costs rare currency. Are you sure you want to buy this?',
    summerFestivalCellBuy: 'You are about to buy a new island cell, which costs rare currency. Are you sure you want to buy this?',
    farmCrop: 'You are about to plant crops that cost rare currency. Are you sure you want to buy this?',
    treasure: 'You are about to buy a new treasure, which costs rare currency. Are you sure you want to buy this?',
    schoolExamPass: 'You are about to buy an exam pass, which cost rare currency. Are you sure you want to buy this?',
    treasureFragment: 'You are about to buy fragments, which cost rare currency. Are you sure you want to buy this?',
    treasureDelete: 'You are about to destroy a treasure, which will give fragments in return. Are you sure you want to buy this?',
    casinoBingoBuy: 'You are about to buy a bingo card, which costs rare currency. Are you sure you want to buy this?',
    casinoWheelSpin: 'You are about to spin the wheel of fortune, which costs rare currency. Are you sure you want to buy this?',
    consumable: 'This action requires consumables that you do not have. Do you want to buy these for rare currency?'
  },
  feature: {
    subfeature: 'Subfeature',

    // Main features
    mining: 'Mining',
    village: 'Village',
    horde: 'Horde',
    farm: 'Farm',
    gallery: 'Gallery',

    // Side features
    note: 'Notes',
    relic: 'Relics',
    gem: 'Gems',
    achievement: 'Achievements',
    school: 'School',
    card: 'Cards',
    general: 'Generals',
    event: 'Event',
    treasure: 'Treasure',
    cryolab: 'Cryo lab',
    debug: 'Debug',

    // Subfeatures
    miningGas: 'Gas',
    schoolLiterature: 'Literature',
    schoolHistory: 'History',
    schoolArt: 'Art',
    generalOrladee: 'Orladee',
    generalOppenschroe: 'Oppenschroe',
    generalBellux: 'Bellux',
    generalOnoclua: 'Onoclua',
    generalOmnisolix: 'Omnisolix',

    // Meta
    meta: 'Game'
  },
  subfeature: {
    mining: {
      0: 'Ore mine',
      1: 'Gas giant',
    },
    village: {
      0: 'Workers',
    },
    horde: {
      0: 'Equipment',
    },
    farm: {
      0: 'Garden',
    },
    gallery: {
      0: 'Freestyle',
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
    subtitle: 'developed by Tendsty',
    text: 'Gooboo is an idle / incremental game where you manage multiple features in a mysterious, unknown world. Gather different resources to buy a huge variety of upgrades to increase your resource gains. Progress in your main features to unlock new content and learn more about this world. And when progression starts slowing down, prestige individual features to take your gains to the next level.',
    updates: {
      web: 'You are using the web version. The game regularly checks for updates, automatically uses the newest version and notifies you when an update is available.',
      desktop: {
        0: 'You are using the desktop version. You need to check for updates manually on the ',
        1: 'releases',
        2: ' page.'
      },
      steam: 'You are using the steam version. Updates are handled via steam.'
    },
    viewPatchnotes: 'View patch notes',
    numberFormatting: 'Number formatting',
    numberFormattingDescription: 'To keep numbers readable, extremely big (and small) numbers are formatted using the units below.',
    bigNumbers: 'Big numbers',
    smallNumbers: 'Small numbers',
    timeUnits: 'Time units',
    timeUnit: {
      s: 'Second',
      m: 'Minute',
      h: 'Hour',
      d: 'Day'
    },
    socials: {
      title: 'Socials',
      text: 'Gooboo can be played on its own without the need for external guides. But if you feel like hanging out with other players, you can visit these places:',
      viewCode: 'View source code',
      patreon: 'Patreon',
      reddit: 'Reddit',
      discord: 'Discord'
    },
    supportMe: {
      title: 'Support me',
      text: 'This game is free and has no microtransactions or ads. If you want to support the development, check out my patreon page:',
      patreon: 'Patreon'
    },
    tech: {
      title: 'Used technologies',
      web: 'Web',
      fonts: 'Fonts',
      testing: 'Automated testing',
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
      website: 'Website',
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
    school: 'School',
    beginner: {
      title: 'Still learning',
      description: 'You are new to this school, reducing your golden dust reward to {0}%. Reach a higher global level to reduce this penalty, and remove it entirely by reaching global level 175.'
    },
    subjectBookGain: 'Each unlocked subject gives 10 books per hour, no matter the grade.',
    passCapGain: 'You get a new exam pass every day (next one in {0}) and every 10 global levels.',
    buyPass: 'Buy an exam pass for',
    library: 'Library',
    practice: 'Practice',
    practiceDescription: 'Practice this subject without time pressure, but gain no rewards or grades',
    study: 'Study',
    studyDescription: 'Get the highest possible score in {0}, and get a chance to improve your grade if you study on your best grade. Depending on your score, you gain (or lose) progress to the next grade. An average score of {1} is expected.',
    studyNoF: 'You cannot lose grade progress at F grade.',
    takeExam: 'Take exam',
    takeExamDescription: 'Take an exam, where you have {0} to get the highest possible score. You will receive golden dust as reward ({1} - {2}, based on your performance and chosen grade). If you achieve a score of {3}, the exam is rated as perfect and you unlock the next grade.',
    takeExamNoF: 'You cannot take exams at F grade.',
    takeExamNoFStudy: 'Study a bit first!',
    takeExamCost: 'Requires',
    examDustFull: 'Your ancient hourglass is full! All golden dust gained in this exam will be lost!',
    examDustOvercap: 'Your ancient hourglass is almost full. Some golden dust gained from this exam could get lost due to overcap.',
    answer: 'Answer',
    begin: 'The lesson begins!',
    beginExam: 'The exam begins!',
    grade: 'Grades',
    gradeDescription: 'Grades determine the difficulty of this subject. You can switch between grades at any time and unlock better grades by studying enough or getting a perfect exam score.',
    math: {
      name: 'Math',
      subtitle: 'Solve equations',
      description: 'Answer various equations to raise your score. Gain 1 score for each correct answer, and lose 1 score for each wrong answer (cannot go below 0). As your grade increases, numbers get bigger and new operators are introduced.',
    },
    literature: {
      name: 'Literature',
      subtitle: 'Write sentences',
      description: 'Type the displayed sentence to raise your score. Gain 1 score for each sentence typed. The same sentence will stay until it is typed correctly, and you can see the beginning of the next sentence. As your grade increases, sentences and words get longer and new special characters are introduced.',
    },
    history: {
      name: 'History',
      subtitle: 'Remember dates',
      description: 'Remember the displayed dates and enter them correctly to raise your score. At the start you can see all dates. When you have remembered them, you can continue to the questions, which makes the dates disappear. You will be asked 5 questions about the dates you just saw, and gain 1 score for each correct date. As your grade increases, years get larger and more dates get introduced.',
      year: 'Year {0}',
      examInfo: 'In exams, you get two chances to remember dates. After your first answers are done, you get a new set of dates and questions'
    },
    art: {
      name: 'Art',
      subtitle: 'Mix colors',
      description: 'Guess colors correctly to raise your score. Two colors will be displayed, guess the result from mixing them. Gain 1 score for each correct answer, and lose 1 score for each wrong answer (cannot go below 0). As your grade increases, more answers get added and the answers get more similar.',
    }
  },
  hourglass: {
    title: 'Ancient hourglass',
    subtitle: 'Skip time for this feature',
    subtitleSchool: 'Convert exam passes to golden dust',
    timeInMinutes: 'Time (in minutes)'
  },
  cryolab: {
    frozen: '{0} / {1} features frozen',
    active: 'Active: {0}%',
    activeTitle: 'Prestige gain (active)',
    activeDescription: 'Passively gain prestige currency equal to {0}% of your best prestige per day. This is only active when the feature is frozen.',
    passive: 'Passive: {0}%',
    passiveTitle: 'Prestige gain (passive)',
    passiveDescription: 'Passively gain prestige currency equal to {0}% of your best prestige per day. This is only active when the feature is not frozen.',
    expDescription: 'You have {0} / {1} experience and gain {2} experience per day if this feature is frozen.',
    expDescription2: 'Experience gain is based on your best prestige.',
    expNext: 'Next level effect:',
    expNoGain: 'To gain experience for this feature, gain some prestige currency first',
    cropExp: 'Gain up to this amount of experience for each crop (base grow time and gold cost reduce experience gained)',
    frozenFeature: {
      title: 'Feature is frozen',
      description: 'This feature is frozen by the cryolab. You will not gain any progress in this feature, but gain prestige currency automatically.'
    }
  },
  general: {
    completionReward: 'Completion reward',
    questGained: '{0} gained',
    grobodal: {
      name: 'Grobodal',
      diggingDeeper: 'Digging deeper',
      combatTraining: 'Combat training',
      gardening: 'Gardening',
      pitchBlack: 'Pitch black',
      masterOfTheSystem: 'Master of the system',
      thinkPlayerThink: 'Think, player, think!',
    },
    orladee: {
      name: 'Orladee',
      beautyOfThisWorld: 'Beauty of this world'
    },
    oppenschroe: {
      name: 'Oppenschroe'
    },
    bellux: {
      name: 'Bellux'
    },
    onoclua: {
      name: 'Onoclua'
    },
    omnisolix: {
      name: 'Omnisolix'
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
          name: 'Tea',
          description: 'The player heals 25 and crits on the next attack after an enemy freezes'
        },
        starShield: {
          name: 'Star shield',
          description: 'The player gets 5 armor in the first 3 turns'
        },
        coffee: {
          name: 'Coffee',
          description: 'The player heals 8 on crit'
        },
        pebbles: {
          name: 'Pebbles',
          description: 'The player stuns targets on crit for 1 turn'
        },
        sunShield: {
          name: 'Sun shield',
          description: ''
        },
        moonShield: {
          name: 'Moon shield',
          description: ''
        },
        fireplace: {
          name: 'Fireplace',
          description: ''
        },
        specialSnowflake: {
          name: 'Special snowflake',
          description: ''
        },
        candyCane: {
          name: 'Candy cane',
          description: ''
        },
        shovel: {
          name: 'Shovel',
          description: ''
        },
        turkey: {
          name: 'Turkey',
          description: ''
        }
      }
    },
    merchant: {
      name: 'Merchant'
    },
    casino: {
      name: 'Casino',
      prize: 'Prize',
      bingo: {
        1: '1x Bingo',
        2: '2x Bingo',
        3: '3x Bingo'
      }
    },
    bank: {
      name: 'Bank',
      description: 'Manage your topaz in 1 of 3 options. Using one option disables all other ones. Paying back loans does not require or consume an action.',
      project: {
        name: 'Project',
        expandVault: 'Expand vault',
        persuadeInvestors: 'Persuade investors',
        improveCreditScore: 'Improve credit score',
        businessMarketing: 'Business marketing',
        cardTournament: 'Sponsor card tournament',
        fund: 'Fund'
      },
      investment: {
        name: 'Investment',
        description: 'Invest topaz to get it back with interest at the next bank event. Gain {0}% interest for the first {1} topaz and {2}% for everything above',
        invest: 'Invest'
      },
      loan: {
        name: 'Loan',
        description: 'Borrow topaz with {0}% interest and repay it later. Topaz debt is automatically paid back when you get topaz with a full capacity.',
        repay: 'Repay',
        borrow: 'Borrow'
      }
    },
    calendar: 'Calendar',
    rewards: 'Rewards'
  },
  globalLevel: {
    name: 'Global level',
    description: 'Based on the sum of multiple values. Used to unlock new features',
    mining_0: 'Deepest ore mine rock broken',
    mining_1: 'Deepest gas giant rock broken',
    village_0: 'Maximum housing',
    horde_0: 'Highest zone boss defeated',
    farm_0: 'Sum of all crop levels',
    gallery_0: 'Log5 of total beauty',
    debug: 'Debug'
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
    mine: 'Mine',
    gainSummary: 'Gain {0} on hit, {1} (x{2}) on break, {3} per second',
    gainSummaryHit: 'Gain {0} on hit',
    gainSummaryBreak: 'Gain {0} on break',
    depthDweller: 'Depth dweller',
    dweller: {
      title: 'Current / highest possible dweller depth',
      description1: 'The dweller starts fast and gets slower the closer it gets to its limit.',
      description2: 'For each completed half meter of current dweller depth, your prestige reward increases.',
      description3: 'Highest possible dweller depth is {0}% of your maximum depth in the mine.',
      description4: 'Maximum dweller depth',
      nextTime: 'You reach {0}m in {1}'
    },
    pickaxePower: 'This is the power of your pickaxe and your base damage. Increase it by crafting a better pickaxe.',
    damage: 'Damage',
    timeToBreak: 'Time needed to break the current rock',
    durability: 'Durability',
    durabilityDescription: 'The amount of damage needed to break this rock',
    durabilityBreaks: {
      s: 'This rock was broken {0} time',
      p: 'This rock was broken {0} times'
    },
    toughness: 'Toughness',
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
      power: 'Power',
      purity: 'Purity',
      impurity: 'Impurity',
      craftPickaxe: 'Craft pickaxe',
      purityDescription: 'To reach 50% minimum quality, your purity needs to match your impurity.',
      premiumSlot: 'This is a premium crafting slot. Impurity above x1 is halved and purity is doubled.'
    },
    craftingDescription: 'Consume selected ores and create a new pickaxe with a random power value. If it is better than your current pickaxe ({0} power), replace it.',
    resinDescription: 'Each piece of resin adds 30% power and 25% purity. Up to {0} resin may be used per pickaxe craft.',
    smokeDescription: 'Consume all smoke to create a new pickaxe with a fixed power value',
    smeltery: 'Smeltery',
    smelteryTemperatureDescription: 'Reach certain temperatures to unlock more smelteries. Smelteries also gain +{0}% speed per degree above the requirement',
    smelteryTemperatureDescription2: 'This smeltery has +{0}% speed because of temperature',
    smelterySpeedDescription: 'This smeltery has a base time of {0}',
    smelt: 'Smelt',
    enhance: 'Enhance',
    enhancement: {
      title: 'Enhancements',
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
    offering: {
      name: 'Offerings',
      description: {
        0: 'Sacrifice ',
        1: ' for ',
        2: ' and increase the cost of the next sacrifice. Sacrifice cost resets on prestige.'
      },
      sacrifice: 'Sacrifice'
    },
    material: 'Material',
    food: 'Food',
    mental: 'Mental resources',
    loot: 'Loot',
    foodConsume: 'Consuming up to {0} per second'
  },
  horde: {
    horde: 'Horde',
    zone: 'Zone',
    player: 'Player',
    enemy: 'Enemy',
    loadoutName: 'Loadout name',
    newLoadout: 'New loadout',
    noLoadouts: 'No loadouts',
    monsterPartHint: 'Go to zone 10+ and reach enemy #101 to discover a new currency! That currency is essential to progess further, as it helps you raise your bone capacity.',
    enemyDescription: 'Each enemy in the same zone has x{0} attack, x{1} health and +{2}% bones compared to the previous enemy. This is enemy #{3} and has x{4} attack, x{5} health and +{6}% bones. All of these effects reset when you die.',
    enemySigil1: {
      s: 'Enemies in this zone have {0} sigil',
      p: 'Enemies in this zone have {0} sigils',
    },
    enemySigil2: {
      s: '.',
      p: ', chosen from {0} different types.',
    },
    damageTypes: {
      title: 'Damage types',
      description: 'Each attack has one of three damage types. Damage dealt and taken can be modified for each damage type.',
      dealt: 'Dealt',
      taken: 'Taken',
      physic: 'Physical',
      magic: 'Magical',
      bio: 'Biological'
    },
    itemFindDescription: 'After defeating an enemy you have a chance to find this equipment',
    attackDescription: 'The amount of damage dealt per attack',
    attackConversion: {
      text: 'Regular attacks happen every second and have the following damage distribution: ',
      physic: '{0}% physical',
      magic: '{0}% magical',
      bio: '{0}% biological'
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
    minibossDescription: 'Minibosses appear in place of regular enemies and are a bit stronger. They hold valuable loot and up to 2 can be waiting at once',
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
