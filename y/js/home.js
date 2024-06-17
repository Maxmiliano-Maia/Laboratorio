const progresso_income = document.querySelector(".barra #income")
const progresso_expense = document.querySelector(".barra #expense")
document.getElementById("saldo").textContent = saldo;
var income_count= 0;
var expese_count = 0;
var total = 0;

saldo.textContent = 0;

function logout(){
    firebase.auth().signOut().then(()=>{
        window.location.href = "../../index.html";
    }).catch(()=>{
        alert('Erro ao fazer logout');
    })  
}


firebase.auth().onAuthStateChanged(user=>{
    if (user){
        user.getIdToken().then(token => console.log(token));
         findtransactions(user);
    }
})

function newTransaction(){
    window.location.href = "../transaction/transaction.html"
}

function findtransactions(user){
    showLoading();
    transactionService.findByUser(user)
        .then(transaction=>{
                hideLoading();
                addTransactionsToScreen(transaction);
    })
    .catch(error => {
        hideLoading();
        console.log(error);
        console.log("O usuário logado é "+user.uid);
        alert('Erro ao recuperar transações');
    })
}

function addTransactionsToScreen(transaction){
    const orderedList = document.getElementById('transactions');
    
    transaction.forEach(transaction=>{
        const li = createTransactionListItem(transaction);
        li.appendChild(createDeleteButton(transaction));
        
        //data gambiarra correção dia
        const nextDay = new Date(transaction.date);
        nextDay.setDate(nextDay.getDate() + 1);
        const date = document.createElement('p');
        date.textContent = formatdate(nextDay);
        date.innerHTML = formatdate(nextDay);
        li.appendChild(date);
        
        li.appendChild(createParagraph(formatMoney(transaction.money)));
        
        
        li.appendChild(createParagraph(transaction.type));
        if (transaction.type == "Receitas"){
            income_count++;
            console.log("A quantidade de receitas é "+income_count);
            progresso_income.setAttribute("style", "width:"+income_count+"%");
            total += transaction.money.value;
        }else {
            expese_count++;
            console.log("A quantidade de receitas é "+expese_count);
            progresso_expense.setAttribute("style", "width:"+expese_count+"%");
            total -= transaction.money.value;
        }

        saldo.textContent = total;

        li.appendChild(createParagraph(transaction.transactionType));

        if (transaction.description){
            li.appendChild(createParagraph(transaction.description));
        }
        orderedList.appendChild(li);
        
    });
}


function createTransactionListItem(transaction){
        const li = document.createElement('li');
        li.classList.add(transaction.type);
        li.id = transaction.uid;
        li.addEventListener('click', ()=>{
            window.location.href="../transaction/transaction.html?uid=" + transaction.uid;
        })
        return li;
}

function createDeleteButton(transaction){
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Remover";
    deleteButton.classList.add('outline', 'danger');
    deleteButton.addEventListener('click', event => {
        event.stopPropagation();
        askRemoveTransaction(transaction);
    })
    return deleteButton;
}

function createParagraph(value){
    const element = document.createElement('p');
    element.innerHTML = value;
    return element;
}

function askRemoveTransaction(transaction){
    const shouldRemove = confirm('Deseja remover a transação?');
    if (shouldRemove){
        removeTransaction(transaction);
    }
}

function removeTransaction(transaction){
    showLoading();
    
    transactionService.remove(transaction)
        .then(() => {
            hideLoading();
            document.getElementById(transaction.uid).remove();
    })
    .catch(error =>{
        hideLoading();
        console.log(error);
        alert('Erro ao remover transação');
    })
}

function formatdate(date){
    const options = { timeZone: 'America/Sao_Paulo', year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(date).toLocaleDateString('pt-BR', options);
}

function formatMoney(money){
    if (money.currency =="€"){
        return `${money.value} ${money.currency}`;
    }
    else{
        return ` ${money.currency} ${money.value} `;
    }
    
}









