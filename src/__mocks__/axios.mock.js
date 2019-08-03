export default {
  post: jest.fn(() => Promise.resolve({ data: {} })),
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        data: {
          '0': {
            id: 4,
            account_number: 2000000003,
            owner: 5,
            type: 'savings',
            status: 'active',
            balance: '170002.00',
            created_on: '2019-04-28T11:49:09.165Z',
            updated_at: '2019-04-28T11:49:09.165Z'
          },
          user: {
            id: 5,
            email: 'issacola57@gmail.com',
            firstName: 'isaac',
            lastName: 'olayisade',
            type: 'client',
            isAdmin: false
          }
        }
      }
    })
  )
};
