export const withdraw = (clients, balances, client, amount) => {

    const clientBalance = clients.indexOf(client);

    return (balances[clientBalance] > amount) ?
        balances[clientBalance] -= amount :
        -1;
}