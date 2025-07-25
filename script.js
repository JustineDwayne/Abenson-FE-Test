class Bed {
    constructor(name, img, desc, tags) {
        this.name = name;
        this.img = img;
        this.desc = desc;
        this.tags = tags;
    }

    render() {
        return `
            <div class="bed-card">
            <div class="bed-image-container">
                <img class="bed-image" src=${this.img} alt=${this.name} />
                <div class="overlay">
                    <span class="bed-description">${this.desc}</span>
                    <span class="bed-tags">
                        ${this.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}
                    </span>
                </div>
            </div>
            <div class="bed-name">
                <h1 class="name-text">${this.name}</h1>
            </div>
         </div>
        `;
    }
}


// Mock data for demonstration

//Data for Types
const typesBeds = [
    new Bed("Single Bed", "assets/plush.png", "A comfortable single bed for one person.", ["Single", "Compact"]),
    new Bed("Double Bed", "images/double-bed.jpg", "A spacious double bed for couples.", ["Double", "Spacious"]),
    new Bed("Queen Bed", "images/queen-bed.jpg", "A luxurious queen bed for ultimate comfort.", ["Queen", "Luxury"]),
    new Bed("King Bed", "images/king-bed.jpg", "An expansive king bed for those who love space.", ["King", "Spacious"]),
    new Bed("Bunk Bed", "images/bunk-bed.jpg", "A fun bunk bed perfect for kids' rooms.", ["Bunk", "Kids"])
]

const firmnessBeds = [

]

// Function to render product cards
function renderBeds(beds) {
    document.getElementById("cards-container").innerHTML = beds.map(bed => bed.render()).join('');
}

renderBeds(typesBeds); // Initial render with Types beds