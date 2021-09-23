const rooms = [
    {
        id: 1,
        imageSrc: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        type: "Single Room",
        cost: "90$ / PER NIGHT"
    },
    {
        id: 2,
        imageSrc: "https://images.unsplash.com/photo-1594130139005-3f0c0f0e7c5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGhvdGVsJTIwYmVkcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        type: "Family Room",
        cost: "120$ / PER NIGHT"
    },
    {
        id: 3,
        imageSrc: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBiZWRyb29tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        type: "Presidential Room",
        cost: "250$ / PER NIGHT"
    }
]


const photoIitems = [
    {
        id: 1,
        imageSrc: "https://preview.colorlib.com/theme/sogo/images/xslider-1.jpg.pagespeed.ic.9u6JJzRS7-.webp",
        alt: "image 1",
        caption: "First Slide",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 2,
        imageSrc: "https://preview.colorlib.com/theme/sogo/images/xslider-2.jpg.pagespeed.ic.-iGvF6CrIC.webp",
        alt: "image 2",
        caption: "First Slide",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 3,
        imageSrc: "https://preview.colorlib.com/theme/sogo/images/xslider-3.jpg.pagespeed.ic.Jo-05SSikC.webp",
        alt: "image 3",
        caption: "First Slide",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 4,
        imageSrc: "https://preview.colorlib.com/theme/sogo/images/xslider-4.jpg.pagespeed.ic.amA4Wbo-tp.webp",
        alt: "image 4",
        caption: "First Slide",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

    },
    {
        id: 5,
        imageSrc: "https://preview.colorlib.com/theme/sogo/images/xslider-5.jpg.pagespeed.ic.XqFfDt9nFs.webp",
        alt: "image 5",
        caption: "First Slide",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

    },
    {
        id: 6,
        imageSrc: "https://preview.colorlib.com/theme/sogo/images/xslider-6.jpg.pagespeed.ic.0vGJrHw61J.webp",
        alt: "image 6",
        caption: "First Slide",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

    },
    {
        id: 7,
        imageSrc: "https://preview.colorlib.com/theme/sogo/images/xslider-7.jpg.pagespeed.ic.rqVXoHrULE.webp",
        alt: "image 7",
        caption: "First Slide",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
]

const mains = [
    {
        cost: "$20.00",
        item: "Murgh Tikka Masala",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro?"
    },
    {
        cost: "$35.00",
        item: "Fish Moilee",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro?"
    },
    {
        cost: "$15.00",
        item: "Safed Gosht",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro?"
    },
    {
        cost: "$10.00",
        item: "French Toast Combo",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro?"
    },
    {
        cost: "$8.35",
        item: "Vegie Omelet",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro?"
    },
    {
        cost: "$22.00",
        item: "Chorizo and Egg Omelet",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro?"
    }
]

const dessert= [
    {
        cost: "$11.00",
        item: "Banana Split",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro?"
    },
    {
        cost: "$72.00",
        item: "Sticky Toffee Pudding",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro?"
    },
    {
        cost: "$26.00",
        item: "Pecan",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro?"
    },
    {
        cost: "$42.00",
        item: "Apple Strudel",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro?"
    },
    {
        cost: "$7.35",
        item: "Pancakes",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro?"
    },
    {
        cost: "$22.00",
        item: "Ice Cream Sundae",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro?"
    },
]


const drink = [
    {
        cost: "$32.00",
        item: "Spring Water",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro?"
    },
    {
        cost: "$14.00",
        item: "Coke, Diet Coke, Coke Zeror",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro?"
    },
    {
        cost: "$93.00",
        item: "Fanta Orange",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro?"
    },
    {
        cost: "$18.00",
        item: "Lemonade, Lemon Squash",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro?"
    },
    {
        cost: "$38.35",
        item: "Sparkling Mineral Water",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro?"
    },
    {
        cost: "$32.00",
        item: "Lemon, Lime & Bitters",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro?"
    }
]


const clientTestimonials = [
    {
        id: 1,
        imageSrc: "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
        testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies ex odio. Integer ultrices tempor efficitur. Donec porttitor dictum nunc, sed pulvinar nisl porta vel. Ut consectetur viverra mattis. Mauris et dignissim tellus. Sed cursus luctus fringilla. Nulla facilisi. Proin est justo, hendrerit non neque faucibus, lacinia consequat dui. Nullam accumsan faucibus metus. Morbi a pulvinar mauris.",
        name: "_John Doe"
    },
    {
        id: 2,
        imageSrc: "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
        testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies ex odio. Integer ultrices tempor efficitur. Donec porttitor dictum nunc, sed pulvinar nisl porta vel. Ut consectetur viverra mattis. Mauris et dignissim tellus. Sed cursus luctus fringilla. Nulla facilisi. Proin est justo, hendrerit non neque faucibus, lacinia consequat dui. Nullam accumsan faucibus metus. Morbi a pulvinar mauris.",
        name: "_John Doe"
    },
    {
        id: 3,
        imageSrc: "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
        testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies ex odio. Integer ultrices tempor efficitur. Donec porttitor dictum nunc, sed pulvinar nisl porta vel. Ut consectetur viverra mattis. Mauris et dignissim tellus. Sed cursus luctus fringilla. Nulla facilisi. Proin est justo, hendrerit non neque faucibus, lacinia consequat dui. Nullam accumsan faucibus metus. Morbi a pulvinar mauris.",
        name: "_John Doe"
    },
    {
        id: 4,
        imageSrc: "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
        testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies ex odio. Integer ultrices tempor efficitur. Donec porttitor dictum nunc, sed pulvinar nisl porta vel. Ut consectetur viverra mattis. Mauris et dignissim tellus. Sed cursus luctus fringilla. Nulla facilisi. Proin est justo, hendrerit non neque faucibus, lacinia consequat dui. Nullam accumsan faucibus metus. Morbi a pulvinar mauris.",
        name: "_John Doe"
    },
    {
        id: 5,
        imageSrc: "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
        testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies ex odio. Integer ultrices tempor efficitur. Donec porttitor dictum nunc, sed pulvinar nisl porta vel. Ut consectetur viverra mattis. Mauris et dignissim tellus. Sed cursus luctus fringilla. Nulla facilisi. Proin est justo, hendrerit non neque faucibus, lacinia consequat dui. Nullam accumsan faucibus metus. Morbi a pulvinar mauris.",
        name: "_John Doe"
    },
    {
        id: 6,
        imageSrc: "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
        testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies ex odio. Integer ultrices tempor efficitur. Donec porttitor dictum nunc, sed pulvinar nisl porta vel. Ut consectetur viverra mattis. Mauris et dignissim tellus. Sed cursus luctus fringilla. Nulla facilisi. Proin est justo, hendrerit non neque faucibus, lacinia consequat dui. Nullam accumsan faucibus metus. Morbi a pulvinar mauris.",
        name: "_John Doe"
    }
]

const events = [
    {
        imageSrc: "https://images.unsplash.com/photo-1626125345510-4603468eedfb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGNvbmZlcmVuY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        date: "OCTOBER   10, 2021",
        heading: "Travel Hacks to Make Your Flight More Comfortable",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro? Ut, dolores et officia distinctio suscipit omnis non, iusto rem natus autem cum!"
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1596522354195-e84ae3c98731?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGNvbmZlcmVuY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        date: "OCTOBER   10, 2021",
        heading: "5 Job Types That Allow You To Earn As You Travel The World",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro? Ut, dolores et officia distinctio suscipit omnis non, iusto rem natus autem cum!"
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGNvbmZlcmVuY2UlMjByb29tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        date: "OCTOBER   10, 2021",
        heading: "30 Great Ideas On Gifts For Travelers",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro? Ut, dolores et officia distinctio suscipit omnis non, iusto rem natus autem cum!"
    }
]



export default rooms;
export {photoIitems,mains,dessert,drink,clientTestimonials, events};