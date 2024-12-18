export interface MovingTypeDetailProps {
    type: string;
    name: string;
    image: string
    description: {
        title: string;
        description: string;
    }[];
}
export interface whatToExpectDetailsProps {
    title: string;
    description: string
}
export const movingTypeDetails: MovingTypeDetailProps[] = [
    {
        type: 'residential',
        name: 'Residential Move',
        image: '/assets/residentialImg.jpeg',
        description: [
            {
                title: 'Comprehensive Moving Services',
                description: 'We offer a full range of residential moving services, including professional packing, careful loading, and reliable transportation of your belongings to your new home.'
            },
            {
                title: 'Furniture Handling',
                description: 'Our team takes apart large furniture pieces for safe transport and reassembles them perfectly at your new location.'
            },
            {
                title: 'Valuation Protection',
                description: 'To provide peace of mind, we offer valuation protection plans to cover potential damages during your move.'
            }
        ]

    },

    {
        type: 'commercial',
        name: 'Commercial Move',
        image: '/assets/commercialImg.jpeg',
        description: [
            {
                title: 'Tailored Relocation Solutions',
                description: 'We provide commercial relocation solutions customized to  meet the unique needs of businesses, no matter the size or industry.'
            },
            {
                title: 'Minimizing Downtime',
                description: 'Our professional moving services are designed to reduce downtime, ensuring your operations resume quickly and smoothly'
            },
            {
                title: ' Furniture Handling',
                description: 'Our team expertly disassembles large furniture pieces for secure transport and reassembles them at the new location'
            },
            {
                title: ' Specialized Business Services',
                description: 'We offer tailored solutions for moving offices, including the safe handling of office equipment and assistance with employee relocations.'
            },
            {
                title: 'Valuation Protection',
                description: 'To provide added peace of mind, we offer valuation protection plans to cover potential damages during the move.'
            }
        ]

    },

    {
        type: 'specialty',
        name: 'Specialty Move',
        image: '/assets/specialtyImg.',
        description: [
            {
                title: 'Delicate and High-Value Items',
                description: 'We specialize in the careful packing and moving of items such as pianos, artwork, antiques, and electronics, ensuring they are transported safely and securely.'
            },
            {
                title: 'Custom Packing Solutions',
                description: 'To protect fragile and valuable items, we offer customized packing solutions tailored to the specific needs of each item.'
            },
            {
                title: 'Expert Handling',
                description: 'Our trained professionals use the right tools and techniques to handle specialty items, ensuring their safety throughout the moving process'
            },
            {
                title: 'Secure Transportation',
                description: 'Specialty moves involve secure transportation, with extra  measures to ensure your items arrive at their destination in perfect condition. '
            },
            {
                title: 'Valuation Protection',
                description: 'For added peace of mind, we offer valuation protection plans to cover potential damages to your prized possessions during the move.'
            }
        ]

    }
]

export const whatToExpectDetails: whatToExpectDetailsProps[] = [
    {
        title: 'Arrival & Initial Walk-Through ',
        description: 'We pride ourselves on punctuality and reliability, arriving on time with a truck from our well- maintained fleet, fully equipped for your move.Together, we’ll walk through your space to confirm what’s staying, what’s going, and any specific instructions to ensure a smooth start to your relocation'
    },
    {
        title: 'Preparation',
        description: 'Before lifting a single item, we prioritize protecting your home. We lay down floor runners and cover banisters with moving  blankets to keep your space secure and damage- free during the process.'
    },
    {
        title: 'Protection of Belongings',
        description: 'Your belongings deserve the best care. Our team carefully pads  and wraps your furniture, ensuring safe transportation from start to finish.Equipped with the right tools, we handle each item with exceptional care and precision.'
    },
    {
        title: 'Final Check Before Departure',
        description: ' We leave no detail unchecked. Before hitting the road, we conduct a second walk- through of your space, verifying that  everything is packed, secured, and ready for transport.'
    },
    {
        title: 'Unloading at Your New Home',
        description: 'Upon arrival at your new location, we unload your belongings efficiently and with care.You guide us on where each item belongs, and we handle the rest, ensuring everything is placed  exactly as you envision.'
    },
    {
        title: 'Final Walk-Through',
        description: 'Once your belongings are in place, we’ll do one last walk through with you to ensure nothing has been overlooked. We only leave once you’re completely satisfied with the move and everything is in order.'
    },

]
