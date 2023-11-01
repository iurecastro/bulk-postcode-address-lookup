// Substitua "YOUR_POSTCODE" pelo código postal que deseja pesquisar
const postcode = "YOUR_POSTCODE";

async function fetchAddress(postcode) {
    const response = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
    const data = await response.json();
    return data.result;
}

// Chama a função fetchAddress com o código postal especificado
fetchAddress(postcode)
    .then(addressData => {
        if (addressData && addressData.address) {
            const address = addressData.address;
            const formattedAddress = `${address.line_1 || ''}, ${address.district || ''}, ${address.city || ''}, ${address.postcode || ''}`;
            console.log(`Endereço: ${formattedAddress}`);
        } else {
            console.log('Endereço não encontrado.');
        }
    })
    .catch(error => {
        console.error('Erro ao buscar o endereço:', error);
    });


    