document.addEventListener('DOMContentLoaded', function() {
    // Example data (in practice, this could come from a server)
    const galleryItems = [
        { "title": "Handcrafted Sword", "imageUrl": "images/sword.jpg", "description": "A finely crafted medieval sword." },
        { "title": "Custom Iron Gate", "imageUrl": "images/gate.jpg", "description": "Bespoke iron gate with intricate designs." }
        // Add more items as needed
    ];

    const servicesOffered = [
        { "name": "Custom Weaponry", "description": "Tailor-made swords and knives." },
        { "name": "Decorative Pieces", "description": "Custom ironwork for home decor." }
        // Add more services as needed
    ];

    loadGallery(galleryItems);
    loadServices(servicesOffered);
});

function loadGallery(items) {
    const gallerySection = document.getElementById('gallery');
    items.forEach(item => {
        let img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = item.title;
        img.title = item.title;

        let div = document.createElement('div');
        div.appendChild(img);
        div.appendChild(document.createTextNode(item.description));

        gallerySection.appendChild(div);
    });
}

function loadServices(services) {
    const servicesSection = document.getElementById('services');
    services.forEach(service => {
        let div = document.createElement('div');
        div.appendChild(document.createElement('h3').appendChild(document.createTextNode(service.name)));
        div.appendChild(document.createElement('p').appendChild(document.createTextNode(service.description)));

        servicesSection.appendChild(div);
    });
}