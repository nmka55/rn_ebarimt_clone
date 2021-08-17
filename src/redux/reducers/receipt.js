import {RECEIPT_ADD_EDIT, RECEIPT_DELETE, USER_LOGOUT} from '../constants';

const initialState = {
  list: [
    {
      lotteryNumber: 'AB12345678',
      amount: 35000,
      returnAmount: 690.91,
      companyName: 'Tesla',
      date: new Date().toISOString(),
      status: 1,
      category: 1,
      details: [
        {
          name: 'Model X',
          unitPrice: 15000,
          quantity: 1,
          nhat: 50,
          nuat: 1500,
          price: 15000,
        },
        {
          name: 'Model S',
          unitPrice: 25000,
          quantity: 1,
          nhat: 50,
          nuat: 2500,
          price: 25000,
        },
      ],
    },
    {
      lotteryNumber: 'BG1234567',
      amount: 35000,
      returnAmount: 690.91,
      companyName: 'Tesla',
      date: new Date().toISOString(),
      status: 1,
      category: 3,
      details: [
        {
          name: 'Model X',
          unitPrice: 15000,
          quantity: 1,
          nhat: 50,
          nuat: 1500,
          price: 15000,
        },
        {
          name: 'Model S',
          unitPrice: 25000,
          quantity: 1,
          nhat: 50,
          nuat: 2500,
          price: 25000,
        },
      ],
    },
    {
      lotteryNumber: 'IO8765432',
      amount: 35000,
      returnAmount: 690.91,
      companyName: 'Tesla',
      date: new Date().toISOString(),
      status: 1,
      category: 1,
      details: [
        {
          name: 'Model X',
          unitPrice: 15000,
          quantity: 1,
          nhat: 50,
          nuat: 1500,
          price: 15000,
        },
        {
          name: 'Model S',
          unitPrice: 25000,
          quantity: 1,
          nhat: 50,
          nuat: 2500,
          price: 25000,
        },
      ],
    },
    {
      lotteryNumber: 'QW8765432',
      amount: 35000,
      returnAmount: 690.91,
      companyName: 'Tesla',
      date: new Date().toISOString(),
      status: 1,
      category: 0,
      details: [
        {
          name: 'Model X',
          unitPrice: 15000,
          quantity: 1,
          nhat: 50,
          nuat: 1500,
          price: 15000,
        },
        {
          name: 'Model S',
          unitPrice: 25000,
          quantity: 1,
          nhat: 50,
          nuat: 2500,
          price: 25000,
        },
      ],
    },
    {
      lotteryNumber: 'CD1234567',
      amount: 35000,
      returnAmount: 690.91,
      companyName: 'Tesla',
      date: new Date().toISOString(),
      status: 1,
      details: [
        {
          name: 'Model X',
          unitPrice: 15000,
          quantity: 1,
          nhat: 50,
          nuat: 1500,
          price: 15000,
        },
        {
          name: 'Model S',
          unitPrice: 25000,
          quantity: 1,
          nhat: 50,
          nuat: 2500,
          price: 25000,
        },
      ],
    },

    {
      lotteryNumber: 'BN5345345',
      amount: 35000,
      returnAmount: 690.91,
      companyName: 'Tesla',
      date: new Date().toISOString(),
      status: 0,
      details: [
        {
          name: 'Model X',
          unitPrice: 15000,
          quantity: 1,
          nhat: 50,
          nuat: 1500,
          price: 15000,
        },
        {
          name: 'Model S',
          unitPrice: 25000,
          quantity: 1,
          nhat: 50,
          nuat: 2500,
          price: 25000,
        },
      ],
    },

    {
      lotteryNumber: 'FG6457586',
      amount: 35000,
      returnAmount: 690.91,
      companyName: 'Tesla',
      date: new Date().toISOString(),
      status: 0,
      details: [
        {
          name: 'Model X',
          unitPrice: 15000,
          quantity: 1,
          nhat: 50,
          nuat: 1500,
          price: 15000,
        },
        {
          name: 'Model S',
          unitPrice: 25000,
          quantity: 1,
          nhat: 50,
          nuat: 2500,
          price: 25000,
        },
      ],
    },

    {
      lotteryNumber: 'TY2345678',
      amount: 35000,
      returnAmount: 690.91,
      companyName: 'Tesla',
      date: new Date().toISOString(),
      status: 0,
      details: [
        {
          name: 'Model X',
          unitPrice: 15000,
          quantity: 1,
          nhat: 50,
          nuat: 1500,
          price: 15000,
        },
        {
          name: 'Model S',
          unitPrice: 25000,
          quantity: 1,
          nhat: 50,
          nuat: 2500,
          price: 25000,
        },
      ],
    },
  ],
  totalInfo: {
    registeredCount: 5,
    pendingCount: 3,
    promo: 7771,
    lottery: 30000,
  },
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case RECEIPT_ADD_EDIT:
      console.log(RECEIPT_ADD_EDIT);
      if (action?.data?.id === -1) {
        return {
          ...state,
          list: [...state?.list, {...action.data}],
        };
      } else {
        console.log('UPDATING!!!');
        let nana = state?.list?.map(x => {
          if (x?.lotteryNumber === action?.data?.lotteryNumber) {
            x = action?.data;
          }
          return x;
        });

        return {
          ...state,
          list: nana,
        };
      }
    // return { ...initialState };
    case RECEIPT_DELETE:
      return {
        ...state,
        list: state?.list?.filter(x => x?.id !== action.data),
      };
    case USER_LOGOUT:
      return {...initialState};
    default:
      return state;
    // return {...initialState};
  }
};

export default todo;
