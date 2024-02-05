
const games = [
  {
    size: 5,
    name: 'Heart',
    cluesTop: [
      [2, 4, 4, 4, 2],
    ],
    cluesLeft: [
      [1, 1],
      [0, 5],
      [0, 5],
      [0, 3],
      [0, 1],
    ],
    field: [
      [0, 1, 0, 1, 0],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0]]
  },
  {
    size: 5,
    name: 'Human',
    cluesTop: [
      [1, 1, 0, 1, 1],
      [1, 2, 3, 2, 1]
    ],
    cluesLeft: [
      [0, 1],
      [0, 5],
      [0, 1],
      [1, 1],
      [2, 2],
    ],
    field: [
      [0, 0, 1, 0, 0],
      [1, 1, 1, 1, 1],
      [0, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [1, 1, 0, 1, 1]
    ]
  },
  {
    size: 5,
    name: 'House',
    cluesTop: [
      [0, 0, 3, 0, 0],
      [1, 4, 1, 4, 1]
    ],
    cluesLeft: [
      [0, 1],
      [0, 3],
      [0, 5],
      [1, 1],
      [0, 3],
    ],
    field: [
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [0, 1, 0, 1, 0],
      [0, 1, 1, 1, 0]
    ]
  },
  {
    size: 5,
    name: 'Umbrella',
    cluesTop: [
      [0, 2, 0, 0, 0],
      [1, 1, 5, 2, 1]
    ],
    cluesLeft: [
      [1],
      [3],
      [5],
      [1],
      [2],
    ],
    field: [
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [0, 0, 1, 0, 0],
      [0, 1, 1, 0, 0]
    ]
  },
  {
    size: 5,
    name: 'Ship',
    cluesTop: [
      [0, 0, 0, 1, 0],
      [1, 1, 5, 2, 1]
    ],
    cluesLeft: [
      [1],
      [2],
      [1],
      [5],
      [3],
    ],
    field: [
      [0, 0, 1, 0, 0],
      [0, 0, 1, 1, 0],
      [0, 0, 1, 0, 0],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
    ],
  },
  {
    size: 10,
    name: 'Speaker',
    cluesTop: [
      [0, 1, 1, 1, 1, 0, 0, 1, 1, 0],
      [7, 1, 1, 1, 1, 10, 2, 1, 1, 2]
    ],
    cluesLeft: [
      [0, 0, 0, 1],
      [0, 0, 0, 2],
      [0, 1, 1, 1],
      [0, 3, 1, 1],
      [0, 1, 2, 1],
      [0, 1, 2, 1],
      [0, 3, 1, 1],
      [1, 1, 1, 1],
      [0, 0, 1, 2],
      [0, 0, 1, 1]
    ],
    field: [
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
      [1, 1, 1, 0, 0, 1, 0, 0, 1, 0],
      [1, 0, 0, 0, 0, 1, 1, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, 1, 0, 0, 1],
      [1, 1, 1, 0, 0, 1, 0, 0, 1, 0],
      [1, 0, 0, 1, 0, 1, 0, 1, 0, 0],
      [1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0]
    ]
  },
  {
    size: 10,
    name: 'Dog',
    cluesTop: [
      [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 2, 0, 0, 1, 2, 0, 0, 0, 0],
      [1, 2, 0, 1, 2, 3, 1, 0, 0, 0],
      [2, 1, 9, 5, 3, 1, 5, 4, 1, 3]
    ],
    cluesLeft: [
      [2, 2],
      [0, 2],
      [2, 3],
      [0, 5],
      [0, 2],
      [6, 1],
      [8, 1],
      [1, 8],
      [1, 2],
      [2, 3]
    ],
    field: [
      [1, 1, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 0, 0, 0, 1, 1, 0, 0],
      [0, 1, 1, 0, 0, 1, 1, 1, 0, 0]]
  },
  {
    size: 10,
    name: 'Tree',
    cluesTop: [
      [2, 4, 6, 0, 0, 0, 0, 6, 4, 2],
      [2, 1, 1, 7, 10, 10, 7, 1, 1, 2],
    ],
    cluesLeft: [
      [0, 0, 2],
      [0, 0, 4],
      [0, 0, 6],
      [0, 0, 8],
      [0, 0, 10],
      [0, 0, 10],
      [0, 0, 8],
      [0, 0, 6],
      [1, 2, 1],
      [3, 2, 3]
    ],
    field: [
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
      [1, 1, 1, 0, 1, 1, 0, 1, 1, 1]
    ]
  },
  {
    size: 10,
    name: 'Flowers',
    cluesTop: [
      [0, 0, 0, 1, 0, 1, 3, 0, 0, 0],
      [0, 0, 3, 2, 1, 3, 1, 1, 0, 0],
      [1, 1, 3, 1, 1, 1, 1, 3, 1, 3]
    ],
    cluesLeft: [
      [0, 1, 1],
      [0, 1, 3],
      [3, 1, 1],
      [1, 1, 2],
      [1, 1, 1],
      [0, 0, 6],
      [0, 1, 1],
      [0, 1, 1],
      [0, 1, 1],
      [0, 0, 2]
    ],
    field: [
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 0, 0, 1, 0, 0, 1],
      [0, 0, 1, 0, 0, 1, 0, 0, 1, 1],
      [0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
    ]
  },
  {
    size: 10,
    name: 'Bag',
    cluesTop: [
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 3, 2, 1, 1, 2, 3, 0, 0],
      [0, 5, 1, 1, 1, 1, 1, 1, 5, 0]
    ],
    cluesLeft: [
      [0, 0, 0, 2],
      [0, 0, 1, 1],
      [0, 0, 1, 1],
      [0, 0, 1, 1],
      [0, 0, 0, 8],
      [1, 1, 1, 1],
      [0, 1, 2, 1],
      [0, 0, 1, 1],
      [0, 0, 1, 1],
      [0, 0, 0, 6]
    ],
    field: [
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0]
    ]
  },
  {
    size: 15,
    name: 'Computer',
    cluesTop: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 6, 0, 3, 1, 1, 3, 1, 1, 1, 0],
      [11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11],
      [1, 2, 2, 2, 2, 2, 5, 5, 5, 2, 2, 2, 2, 2, 1]
    ],
    cluesLeft: [
      [0, 0, 0, 15],
      [0, 0, 1, 1],
      [1, 1, 4, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 3, 4, 1],
      [0, 0, 1, 1],
      [0, 0, 1, 1],
      [0, 0, 0, 15],
      [0, 0, 0, 3],
      [0, 0, 0, 3],
      [0, 0, 0, 13],
      [0, 0, 0, 15],
    ],
    field: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  {
    size: 15,
    name: 'Cherry',
    cluesTop: [
      [0, 0, 0, 4, 4, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0],
      [0, 1, 3, 1, 2, 4, 2, 2, 4, 1, 1, 2, 2, 1, 2],
      [3, 5, 7, 5, 3, 1, 1, 1, 3, 5, 7, 5, 3, 4, 4]
    ],
    cluesLeft: [
      [0, 4, 1],
      [0, 6, 3],
      [0, 6, 2],
      [0, 3, 5],
      [0, 1, 2],
      [0, 3, 3],
      [2, 3, 2],
      [1, 1, 2],
      [2, 3, 1],
      [0, 1, 5],
      [0, 3, 5],
      [0, 5, 5],
      [0, 5, 3],
      [0, 0, 5],
      [0, 0, 3]
    ],
    field: [
      [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1],
      [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1],
      [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1],
      [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
  },
  {
    size: 15,
    name: 'Workplace',
    cluesTop: [
      [0, 5, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0],
      [0, 1, 5, 3, 3, 6, 3, 3, 3, 1, 2, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 15]
    ],
    cluesLeft: [
      [0, 0, 1, 1],
      [0, 0, 1, 1],
      [0, 0, 1, 1],
      [0, 0, 1, 8],
      [0, 0, 1, 8],
      [0, 0, 1, 1],
      [0, 0, 1, 1],
      [0, 0, 7, 1],
      [0, 0, 9, 1],
      [0, 0, 7, 1],
      [0, 0, 1, 1],
      [0, 0, 1, 1],
      [0, 0, 1, 1],
      [0, 4, 4, 1],
      [1, 1, 1, 1]
    ],
    field: [
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1]
    ]
  },
  {
    size: 15,
    name: 'Lamp',
    cluesTop: [
      [0, 0, 0, 2, 2, 2, 0, 2, 1, 2, 0, 0, 0, 0, 0],
      [0, 1, 3, 2, 2, 2, 2, 1, 2, 3, 7, 6, 3, 2, 1],
      [1, 1, 1, 1, 2, 2, 4, 3, 2, 2, 1, 1, 1, 1, 1]
    ],
    cluesLeft: [
      [0, 2],
      [0, 5],
      [2, 2],
      [2, 4],
      [2, 6],
      [2, 8],
      [2, 2],
      [0, 2],
      [0, 2],
      [0, 2],
      [0, 2],
      [0, 2],
      [0, 2],
      [0, 6],
      [0, 15]
    ],
    field: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
      [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  {
    size: 15,
    name: 'Cup',
    cluesTop: [
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
      [0, 0, 8, 1, 1, 3, 1, 2, 1, 1, 2, 8, 1, 1, 3],
      [1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1]
    ],
    cluesLeft: [
      [0, 0, 1],
      [0, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
      [0, 0, 10],
      [1, 1, 2],
      [1, 2, 1],
      [1, 1, 1],
      [1, 1, 1],
      [0, 1, 2],
      [0, 1, 1],
      [0, 1, 1],
      [0, 0, 8],
      [0, 0, 15],
      [0, 0, 13],
    ],
    field: [
      [
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
      ]
    ]
  },
];
export default games;