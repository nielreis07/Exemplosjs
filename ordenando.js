const swap = (vetor, pos1, pos2) => {
    const temp = vetor[pos1];
    vetor[pos1] = vetor[pos2];
    vetor[pos2] = temp;
};

const shuffle = (vetor, quantidadeTrocas) => {
    for (let i = 0; i < quantidadeTrocas; i++) {
        const pos1 = Math.floor(Math.random() * vetor.length);
        const pos2 = Math.floor(Math.random() * vetor.length);
        swap(vetor, pos1, pos2);
    }
};

const bubble_sort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
};

const selection_sort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        let indiceMenor = i;
        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[indiceMenor]) {
                indiceMenor = j;
            }
        }
        if (indiceMenor !== i) {
            swap(vetor, i, indiceMenor);
        }
    }
};

const particionamento = (vetor, inicio, fim, pivot) => {
    let i = inicio;
    let j = fim;

    while (i <= j) {
        while (vetor[i] < pivot) {
            i++;
        }
        while (vetor[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(vetor, i, j);
            i++;
            j--;
        }
    }
    return i;
};

const quick_sort = (vetor, inicio, fim) => {
    if (inicio < fim) {
        const pivot = vetor[Math.floor((inicio + fim) / 2)];
        const indice = particionamento(vetor, inicio, fim, pivot);
        quick_sort(vetor, inicio, indice - 1);
        quick_sort(vetor, indice, fim);
    }
};

const vetor1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Vetor original:", [...vetor1]);

const vetorBubble = [...vetor1];
bubble_sort(vetorBubble);
console.log("Bubble Sort:", vetorBubble);

const vetorSelection = [...vetor1];
selection_sort(vetorSelection);
console.log("Selection Sort:", vetorSelection);

const vetorQuick = [...vetor1];
quick_sort(vetorQuick, 0, vetorQuick.length - 1);
console.log("Quick Sort:", vetorQuick);

const vetorShuffle = [...vetor1];
shuffle(vetorShuffle, 10);
console.log("Vetor embaralhado:", vetorShuffle);