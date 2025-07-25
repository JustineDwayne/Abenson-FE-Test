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
            </div>
            <div class="bed-name">
                <h1 class="name-text">${this.name}</h1>
                <p class="bed-name-description">${this.desc}</p>
                <span class="bed-name-tags">
                    ${this.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}
                </span>
            </div>
        </div>
    `;
    }
}


// Mock data for demonstration

//Data for Types
const typesBeds = [
    new Bed(
        "Trundle Bed",
        "assets/plush.png",
        "Space saving functionality. It slides under another bed - easy extra sleeping place.",
        ["Single", "Compact"]
    ),
    new Bed(
        "Foam Mattress",
        "assets/plush.png",
        "A cozy double bed with plush foam layers, designed for couples.",
        ["Double", "Spacious"]
    ),
    new Bed(
        "Spring Mattress",
        "assets/plush.png",
        "A regal queen bed with responsive spring support, offering luxurious comfort for restful nights.",
        ["Queen", "Luxury"]
    ),
    new Bed(
        "Latex Foam",
        "assets/plush.png",
        "A grand king bed with natural latex foam, delivering expansive space.",
        ["King", "Spacious"]
    ),
    new Bed(
        "Foldable Foam",
        "assets/plush.png",
        "A vibrant bunk bed with foldable foam mattresses, ideal for kids’ rooms or shared spaces.",
        ["Bunk", "Kids"]
    ),
    new Bed(
        "Memory Foam",
        "assets/plush.png",
        "A snug single bed with contouring memory foam, crafted for personalized comfort.",
        ["Single", "Compact"]
    )
];

const firmnessBeds = [
    new Bed(
        "Plush",
        "assets/plush.png",
        "A soft single bed with plush cushioning, offering a cloud-like sleep experience for ultimate relaxation.",
        ["Single", "Compact"]
    ),
    new Bed(
        "Medium Plush",
        "assets/plush.png",
        "A balanced double bed with medium plush comfort, perfect for couples.",
        ["Double", "Spacious"]
    ),
    new Bed(
        "Firm",
        "assets/plush.png",
        "A sturdy queen bed with firm support, designed for sleepers who prefer a solid, stable surface.",
        ["Queen", "Luxury"]
    ),
    new Bed(
        "Medium Firm",
        "assets/plush.png",
        "A spacious king bed with medium-firm support, blending comfort and stability for a restful sleep.",
        ["King", "Spacious"]
    )
];

// Function to render product cards
function renderBeds(beds) {
    document.getElementById("cards-container").innerHTML = beds.map(bed => bed.render()).join('');
}

renderBeds(typesBeds); // Initial render with Types beds