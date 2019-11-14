const { GraphQLID, GraphQLNoneNull } = require('graphql')
const EventType = require('../types/event')

module.exports = {
    type: EventType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNoneNull(GraphQLID)
        }
    },
    resolve: (root, args) => {
        return new Promise((resolve, reject) => {
            resolve({
                id: 'ljkndslbcjskbsa',
                name: 'Launch Party',
                date: 'Today'
            })
        })
    }
}