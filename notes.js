// match and count
[
    {
        $match: {
            isActive: true
        }
    },
    {
        $count: 'count'
    }
]

// For average all documents based on age 
[
    {
      $group: {
        _id: null, // _id variable name
        averageAge: { // averageAge variable name
          $avg: "$age"
        }
      }
    }
  ]
  
// For the average of gender based documents based on age 

[
    {
      $group: {
        _id: "$gender",
        averageAge: {
          $avg: "$age"
        }
      }
    }
  ]
  