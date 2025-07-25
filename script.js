class Bed {
    constructor(name, img, desc, tags){
        this.name = name;
        this.img = img;
        this.desc = desc;
        this.tags = tags;
    }

    render(){
        return 
         <div class="bed-card">
            <div class="bed-image-container">
                <img class="bed-image" src={this.img} alt={this.name} />
                <div class="overlay">
                    <span class="bed-description">{this.desc}</span>
                    <span class="bed-tags">
                        ${this.tags.map(tag => `<span class="tag">${tag}</span>` ).join(' ')}
                    </span>
                </div>
            </div>
            <div class="bed-name">
                <h1 class="name-text">{this.name}</h1>
            </div>
         </div>
    }
}