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
            title: 'Software',
            name: 'software',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        },
        {
            title: 'Information',
            name: 'info',
            type: 'text'
        },
        {
            title: 'Contact information',
            name: 'contactInfo',
            type: 'text'
        },
        {
            title: 'Values',
            name: 'values',
            type: 'blockContent'
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