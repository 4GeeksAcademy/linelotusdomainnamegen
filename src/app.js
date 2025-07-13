const adjs = ['cool','sweet', 'yummy', 'fast'];

const nouns =['car', 'pastries','tacos','pizza'];

const pronouns = ['the', 'their', 'our' ];

const tlds = ['.com','.net','.org','.us'];


 

function listDomain(pronouns, adjs, nouns, tlds) {
    const domains= [];

for (const pronoun  of pronouns){
    for(const adj of adjs){
        for(const noun of nouns){
            for(const tld of tlds){
                const domain = pronoun + adj + noun +tld;
               console.log(domain); 
               domains.push(domain);
            }
        }
    }
}

   
    return domains;
    
}
const domains = listDomain(pronouns, adjs, nouns, tlds);




const listFormat = document.getElementById('domain');

// Clear list first (in case script runs multiple times)
listFormat.innerHTML = '';
listFormat.style.fontSize = '20px';
listFormat.style.fontWeight ='bold';

// Add each domain as a list item
domains.forEach(domain => { const li = document.createElement('li'); 

    li.textContent = domain;
    listFormat.appendChild(li);
});
