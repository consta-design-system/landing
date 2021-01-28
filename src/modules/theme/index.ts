// отключил правило так как нужно подключить стили из пресетов
/* eslint-disable no-unused-vars */
import './Theme_color_altDark.css';
import './Theme_color_altDefault.css';
import './Theme_color_altDisplay.css';
import './Theme_color_alt2Dark.css';
import './Theme_color_alt2Default.css';
import './Theme_color_alt2Display.css';
import './Theme_font_gpnPromo.css';
import './Theme_size_gpnPromo.css';
import './Theme_space_gpnPromo.css';
import './Theme_control_gpnPromo.css';

import { IconFavorite } from '@consta/uikit/IconFavorite';
import { IconMoon } from '@consta/uikit/IconMoon';
import { IconSun } from '@consta/uikit/IconSun';
// импортируем пресеты чтобы подключились стили к проекту
import {
  presetGpnDark,
  presetGpnDefault,
  presetGpnDisplay,
  ThemePreset,
} from '@consta/uikit/Theme';
import { combine, declareAction, declareAtom, map } from '@reatom/core';

import { n } from '@/utils/reatom';

const nTheme = n('theme');

export const presets = [
  {
    name: 'Газпром нефть',
    value: 0,
    brandColor: '#0071B2',
  },
  {
    name: 'Ва-банк',
    value: 1,
    brandColor: '#b80b0b',
  },
  {
    name: 'Алюмикель',
    value: 2,
    brandColor: '#730bb8',
  },
];
type Preset = typeof presets[number];
const presetDefault = presets[0];

export const colors = [
  {
    name: 'Светлая',
    icon: IconSun,
    value: 0,
  },
  {
    name: 'Тёмная',
    icon: IconMoon,
    value: 1,
  },
  {
    name: 'Промо',
    icon: IconFavorite,
    value: 2,
  },
];
type Colors = typeof colors[number];
const colorDefault = colors[0];

export const fonts = [
  { name: 'Промо', value: 'gpnPromo' },
  { name: 'Системный', value: 'gpnDefault' },
];
type Font = typeof fonts[number];
const fontDefault = fonts[0];

export const sizes = [
  { name: 'Крупный', value: 'gpnPromo' },
  { name: 'Средний', value: 'gpnDefault' },
];
type Size = typeof sizes[number];
const sizeDefault = sizes[0];

export const spaces = [
  { name: 'Просторнее', value: 'gpnPromo' },
  { name: 'Теснее', value: 'gpnDefault' },
];
type Space = typeof spaces[number];
const spaceDefault = spaces[0];

const colorsMods = [
  [
    {
      primary: 'gpnDefault',
      accent: 'gpnDark',
      invert: 'gpnDark',
    },
    {
      primary: 'gpnDark',
      accent: 'gpnDark',
      invert: 'gpnDefault',
    },
    {
      primary: 'gpnDisplay',
      accent: 'gpnDark',
      invert: 'gpnDefault',
    },
  ],
  [
    {
      primary: 'altDefault',
      accent: 'altDark',
      invert: 'altDark',
    },
    {
      primary: 'altDark',
      accent: 'altDark',
      invert: 'altDefault',
    },
    {
      primary: 'altDisplay',
      accent: 'altDark',
      invert: 'altDefault',
    },
  ],
  [
    {
      primary: 'alt2Default',
      accent: 'alt2Dark',
      invert: 'alt2Dark',
    },
    {
      primary: 'alt2Dark',
      accent: 'alt2Dark',
      invert: 'alt2Default',
    },
    {
      primary: 'alt2Display',
      accent: 'alt2Dark',
      invert: 'alt2Default',
    },
  ],
] as const;

function getColorMod(preset: Preset, color: Colors): ThemePreset['color'] {
  return colorsMods[preset.value][color.value];
}

export const setColorAction = declareAction<Colors>(nTheme('setColor'));
export const setFontAction = declareAction<Font>(nTheme('setFont'));
export const setSizeAction = declareAction<Size>(nTheme('setSize'));
export const setSpaceAction = declareAction<Space>(nTheme('setSpace'));
export const setPresetAction = declareAction<Preset>(nTheme('setPreset'));

export const presetAtom = declareAtom<Preset>(nTheme('preset'), presetDefault, (on) =>
  on(setPresetAction, (state, preset) => preset),
);

export const colorAtom = declareAtom<Colors>(nTheme('color'), colorDefault, (on) =>
  on(setColorAction, (state, color) => color),
);

export const fontAtom = declareAtom<Font>(nTheme('font'), fontDefault, (on) =>
  on(setFontAction, (state, font) => font),
);

export const sizeAtom = declareAtom<Size>(nTheme('size'), sizeDefault, (on) =>
  on(setSizeAction, (state, size) => size),
);

export const spaceAtom = declareAtom<Space>(nTheme('space'), spaceDefault, (on) =>
  on(setSpaceAction, (state, space) => space),
);

export const themeAtom = map(
  nTheme('theme'),
  combine([presetAtom, colorAtom, fontAtom, sizeAtom, spaceAtom]),
  ([preset, color, font, size, space]) => ({
    color: getColorMod(preset, color),
    control: 'gpnPromo',
    font: font.value,
    size: size.value,
    space: space.value,
  }),
);
