export interface EmojiEntry {
  emoji: string;
  name: string;
}

export const EMOJI_DATA: EmojiEntry[] = [
  // Fruits
  { emoji: '🍎', name: 'red apple' },
  { emoji: '🍏', name: 'green apple' },
  { emoji: '🍐', name: 'pear' },
  { emoji: '🍊', name: 'tangerine orange' },
  { emoji: '🍋', name: 'lemon' },
  { emoji: '🍌', name: 'banana' },
  { emoji: '🍉', name: 'watermelon' },
  { emoji: '🍇', name: 'grapes' },
  { emoji: '🍓', name: 'strawberry' },
  { emoji: '🫐', name: 'blueberries' },
  { emoji: '🍈', name: 'melon' },
  { emoji: '🍒', name: 'cherries' },
  { emoji: '🍑', name: 'peach' },
  { emoji: '🥭', name: 'mango' },
  { emoji: '🍍', name: 'pineapple' },
  { emoji: '🥥', name: 'coconut' },
  { emoji: '🥝', name: 'kiwi fruit' },
  { emoji: '🍅', name: 'tomato' },
  { emoji: '🫒', name: 'olive' },
  { emoji: '🥑', name: 'avocado' },

  // Vegetables
  { emoji: '🥦', name: 'broccoli' },
  { emoji: '🥬', name: 'leafy green lettuce' },
  { emoji: '🥒', name: 'cucumber' },
  { emoji: '🌶️', name: 'hot pepper chili' },
  { emoji: '🫑', name: 'bell pepper' },
  { emoji: '🌽', name: 'corn' },
  { emoji: '🥕', name: 'carrot' },
  { emoji: '🧄', name: 'garlic' },
  { emoji: '🧅', name: 'onion' },
  { emoji: '🥔', name: 'potato' },
  { emoji: '🍠', name: 'sweet potato' },
  { emoji: '🫘', name: 'beans' },
  { emoji: '🍄', name: 'mushroom' },
  { emoji: '🥜', name: 'peanuts nuts' },

  // Bread & Grains
  { emoji: '🍞', name: 'bread' },
  { emoji: '🥐', name: 'croissant' },
  { emoji: '🥖', name: 'baguette french bread' },
  { emoji: '🫓', name: 'flatbread' },
  { emoji: '🥨', name: 'pretzel' },
  { emoji: '🥯', name: 'bagel' },
  { emoji: '🧇', name: 'waffle' },
  { emoji: '🥞', name: 'pancakes' },
  { emoji: '🍕', name: 'pizza' },
  { emoji: '🌮', name: 'taco' },
  { emoji: '🌯', name: 'burrito wrap' },
  { emoji: '🫔', name: 'tamale' },
  { emoji: '🥙', name: 'pita stuffed flatbread' },
  { emoji: '🍜', name: 'noodles ramen' },
  { emoji: '🍝', name: 'spaghetti pasta' },
  { emoji: '🍚', name: 'rice' },

  // Protein & Meat
  { emoji: '🥩', name: 'cut of meat steak beef' },
  { emoji: '🍗', name: 'poultry leg chicken' },
  { emoji: '🍖', name: 'meat on bone' },
  { emoji: '🌭', name: 'hot dog sausage' },
  { emoji: '🥓', name: 'bacon' },
  { emoji: '🍔', name: 'hamburger burger' },
  { emoji: '🥚', name: 'egg' },
  { emoji: '🍳', name: 'fried egg cooking' },

  // Seafood
  { emoji: '🐟', name: 'fish' },
  { emoji: '🐠', name: 'tropical fish' },
  { emoji: '🐡', name: 'blowfish pufferfish' },
  { emoji: '🦐', name: 'shrimp prawn' },
  { emoji: '🦞', name: 'lobster' },
  { emoji: '🦀', name: 'crab' },
  { emoji: '🦑', name: 'squid' },
  { emoji: '🐙', name: 'octopus' },
  { emoji: '🦪', name: 'oyster' },
  { emoji: '🍣', name: 'sushi' },

  // Dairy & Cheese
  { emoji: '🥛', name: 'glass of milk' },
  { emoji: '🧀', name: 'cheese wedge' },
  { emoji: '🧈', name: 'butter' },
  { emoji: '🍦', name: 'ice cream' },

  // Drinks
  { emoji: '☕', name: 'coffee hot beverage' },
  { emoji: '🍵', name: 'tea teacup' },
  { emoji: '🧃', name: 'juice box beverage' },
  { emoji: '🥤', name: 'cup with straw soda' },
  { emoji: '🍶', name: 'sake' },
  { emoji: '🍺', name: 'beer mug' },
  { emoji: '🍷', name: 'wine glass' },
  { emoji: '🥂', name: 'champagne clinking glasses' },
  { emoji: '🍾', name: 'bottle popping cork champagne' },
  { emoji: '🧊', name: 'ice cube' },
  { emoji: '💧', name: 'water droplet' },
  { emoji: '🫗', name: 'pouring liquid water' },

  // Sweets & Snacks
  { emoji: '🍫', name: 'chocolate bar' },
  { emoji: '🍬', name: 'candy' },
  { emoji: '🍭', name: 'lollipop' },
  { emoji: '🍪', name: 'cookie biscuit' },
  { emoji: '🎂', name: 'birthday cake' },
  { emoji: '🍰', name: 'shortcake cake slice' },
  { emoji: '🧁', name: 'cupcake muffin' },
  { emoji: '🥧', name: 'pie' },
  { emoji: '🍩', name: 'doughnut donut' },
  { emoji: '🍿', name: 'popcorn' },
  { emoji: '🥤', name: 'cup with straw' },

  // Condiments & Cooking
  { emoji: '🧂', name: 'salt' },
  { emoji: '🫙', name: 'jar' },
  { emoji: '🍯', name: 'honey pot' },
  { emoji: '🥫', name: 'canned food' },
  { emoji: '🧴', name: 'lotion bottle' },

  // Prepared Food
  { emoji: '🥗', name: 'salad green' },
  { emoji: '🍱', name: 'bento box' },
  { emoji: '🥘', name: 'pot of food stew' },
  { emoji: '🍲', name: 'pot of food soup' },
  { emoji: '🫕', name: 'fondue' },
  { emoji: '🥣', name: 'bowl with spoon cereal' },
  { emoji: '🥪', name: 'sandwich' },
  { emoji: '🧆', name: 'falafel' },

  // Shopping & Household
  { emoji: '🛒', name: 'shopping cart trolley' },
  { emoji: '🛍️', name: 'shopping bags' },
  { emoji: '🧹', name: 'broom cleaning' },
  { emoji: '🧽', name: 'sponge cleaning' },
  { emoji: '🧻', name: 'toilet paper roll' },
  { emoji: '🪥', name: 'toothbrush' },
  { emoji: '🧼', name: 'soap bar' },
  { emoji: '🪒', name: 'razor' },
  { emoji: '💊', name: 'pill medicine' },
  { emoji: '🩹', name: 'bandage adhesive' },
  { emoji: '🧴', name: 'lotion bottle shampoo' },
  { emoji: '🪣', name: 'bucket' },
  { emoji: '🔋', name: 'battery' },
  { emoji: '💡', name: 'light bulb idea' },
  { emoji: '🕯️', name: 'candle' },
  { emoji: '📦', name: 'package box' },

  // Misc food-related
  { emoji: '🧋', name: 'bubble tea boba' },
  { emoji: '🥡', name: 'takeout box' },
  { emoji: '🥢', name: 'chopsticks' },
  { emoji: '🍽️', name: 'plate fork knife' },
  { emoji: '🥄', name: 'spoon' },

  // Pets
  { emoji: '🐕', name: 'dog pet' },
  { emoji: '🐈', name: 'cat pet' },
  { emoji: '🐾', name: 'paw prints pet food' },

  // Nature & Plants
  { emoji: '🌻', name: 'sunflower' },
  { emoji: '🌹', name: 'rose flower' },
  { emoji: '🌱', name: 'seedling plant' },
  { emoji: '🪴', name: 'potted plant' },
  { emoji: '🌿', name: 'herb leaf' },

  // Symbols & Misc
  { emoji: '✅', name: 'check mark done' },
  { emoji: '⭐', name: 'star favorite' },
  { emoji: '❤️', name: 'red heart love' },
  { emoji: '🔥', name: 'fire hot spicy' },
  { emoji: '💰', name: 'money bag' },
  { emoji: '🏷️', name: 'label tag price' },
  { emoji: '📝', name: 'memo note' },
  { emoji: '🎉', name: 'party popper celebration' },
];
