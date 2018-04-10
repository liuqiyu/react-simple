/**
 * reducer
 * create by lqy 2018/4/10
 */

const aa = {
  text: '',
};

const reducer = (state = aa, action) => {
  switch (action.type) {
    case 'CURRENT_INDEX':
      return {
        text: action.text,
      };
    default:
      return state;
  }
}

export default reducer;