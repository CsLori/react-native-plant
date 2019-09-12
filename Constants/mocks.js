const categories = [
    {
        id: 1,
        name: 'tomato',
        tags: ['Tomato'],
        count: 147,
        image: require('../assets/plant.jpg')
    },
    {
        id: 2,
        name: 'cucumber',
        tags: ['Cucumber'],
        count: 111,
        image: require('../assets/plant.jpg')
    },
    {
        id: 3,
        name: 'basil',
        tags: ['Basil'],
        count: 14,
        image: require('../assets/plant.jpg')
    },
    {
        id: 4,
        name: 'flowers',
        tags: ['Flowers'],
        count: 47,
        image: require('../assets/plant.jpg')
    }

]

const plants = [
    {
        id: 1,
        name: '',
        description: '',
        gallery: [
            require('../assets//image.jpg'),
            require('../assets//image.jpg'),
            require('../assets//image.jpg')]

    }
]

const explore = [
    require('../assets//image.jpg'),
    require('../assets//image.jpg'),
    require('../assets//image.jpg'),
    require('../assets//image.jpg'),
    require('../assets//image.jpg'),
    require('../assets//image.jpg')
]


const profile = {
    username: 'Jacob',
    email: 'jacob@jacob.gmail.com',
    avatar: require('../assets/image.jpg')


}

export {
    categories, plants, profile, explore
}