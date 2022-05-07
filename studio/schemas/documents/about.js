export default {
    title: 'About',
    name: 'about',
    type: 'document',

    fields: [
        {
            title: 'Heading',
            name: 'heading',
            type: 'string'
        },
        {
            title: 'Portrait',
            name: 'portrait',
            type: 'image'
        },
        {
            title: 'Information',
            name: 'info',
            type: 'text'
        },
        {
            title: 'Contact information',
            name: 'contactinfo',
            type: 'text'
        },
        {
            title: 'Social media',
            name: 'socials',
            type: 'array',
            of: [{
                type: 'image'
            }]
        }
    ]
}