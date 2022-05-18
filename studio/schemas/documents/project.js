export default {
    title: 'Project',
    name: 'project',
    type: 'document',

    fields: [
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'projectName'
            }
        },
        {
            title: 'Frontpage Image',
            name: 'frontpageImage',
            type: 'image'
        },
        {
            title: 'Project Name',
            name: 'projectName',
            type: 'string'
        },
        {
            title: 'Heading Image',
            name: 'headingImage',
            type: 'image'
        },
        {
            title: 'Brief',
            name: 'brief',
            type: 'text'
        },
        {
            title: 'Client',
            name: 'client',
            type: 'blockContent'
        },
        {
            title: 'Idea',
            name: 'idea',
            type: 'blockContent'
        },
        {
            title: 'Images',
            name: 'images',
            type: 'array',
            of: [{
                type: 'image'
            }]
        }

    ]
}