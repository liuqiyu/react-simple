/**
 * action
 * create by lqy 2018/4/10
 */

export const currentNavIndex = (text) => {
  return {
    type: 'CURRENT_INDEX',
    text,
  };
};