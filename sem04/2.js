class Software{
    constructor(nume){
        this.nume = nume;
    }
    run(){
        console.log(`${this.nume} ruleazaz`)
    }
}

class Plugin{
    constructor(nume, versiune){
        this.nume = nume;
        this.versiune = versiune;
    }

        info() {
            return `${this.nume} -- ${this.versiune}`;
        }
    
}

class Browser extends Software{
    constructor(nume){
        super(nume);
        this.plugins = [];
    }

    adaugaPlugin(plugin){
        this.plugins.push(plugin);
        console.log(`Plugin-ul ${plugin.nume} a fost adaugat`)
    }

    listaPlugins(){
        console.log(`Plugins instalate in ${this.nume}: `);
        if(this.plugins.length === 0 )
        {
            console.log("Nu sunt plugins instalate")
        }else{
            for(const p of this.plugins){
                console.log(`${p.info()}`);
            }
        }
    }
    run(){
        console.log(`${this.nume} ruleaza cu:`);
        if (this.plugins.length === 0) {
            console.log(" fara plugins");
        } else {
            for (const p of this.plugins) {
                console.log(`${p.info()}`);
            }
        }
    }


}

const chrome = new Browser("Google Chrome");
const adblock = new Plugin("AdBlock", "5.2");
const darkmode = new Plugin("Dark Mode", "1.0");
chrome.adaugaPlugin(adblock);
chrome.adaugaPlugin(darkmode);
chrome.listaPlugins();
chrome.run();
