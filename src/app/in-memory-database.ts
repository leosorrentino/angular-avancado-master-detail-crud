import { InMemoryDbService } from "angular-in-memory-web-api";

import { Category } from "./pages/categories/shared/category.model";
import { Entry } from "./pages/entries/shared/entry.model";

export class InMemoryDatabase implements InMemoryDbService {
    createDb(){
        const categories: Category[] = [
            { id: 1, name: 'Moradia', description: 'Pagamentos de Contas da Casa'},
            { id: 2, name: 'Saúde', description: 'Plano de saúde e remédios'},
            { id: 3, name: 'Lazer', description: 'Cinema, parques, praia, etc'},
            { id: 4, name: 'Salario', description: 'Recebimentos de salário'},
            { id: 5, name: 'Freelas', description: 'Trabalhos como freelancer'}
        ];

        const entries: Entry[] = [
            { id: 1, name: 'Gás de Cozinha', categoryId: categories[0].id, category: categories[0], paid: true, date: "28/08/2019", amount: "70,80", type: "expense", description: "Primeira Descrição" } as Entry,
            { id: 2, name: 'Gás de Cozinha', categoryId: categories[1].id, category: categories[1], paid: false, date: "28/08/2019", amount: "70,80", type: "expense" } as Entry,
            { id: 3, name: 'Gás de Cozinha', categoryId: categories[3].id, category: categories[2], paid: true, date: "28/08/2019", amount: "70,80", type: "revenue" } as Entry,
            { id: 4, name: 'Gás de Cozinha', categoryId: categories[2].id, category: categories[2], paid: true, date: "28/08/2019", amount: "70,80", type: "expense" } as Entry,
            { id: 5, name: 'Gás de Cozinha', categoryId: categories[1].id, category: categories[4], paid: false, date: "28/08/2019", amount: "70,80", type: "expense" } as Entry,
            { id: 6, name: 'Gás de Cozinha', categoryId: categories[2].id, category: categories[1], paid: true, date: "28/08/2019", amount: "70,80", type: "revenue" } as Entry,
            { id: 7, name: 'Gás de Cozinha', categoryId: categories[2].id, category: categories[2], paid: false, date: "28/08/2019", amount: "70,80", type: "expense" } as Entry,
            { id: 8, name: 'Gás de Cozinha', categoryId: categories[1].id, category: categories[2], paid: true, date: "28/08/2019", amount: "70,80", type: "revenue" } as Entry,
            { id: 9, name: 'Gás de Cozinha', categoryId: categories[2].id, category: categories[4], paid: false, date: "28/08/2019", amount: "70,80", type: "expense" } as Entry,
            { id: 10, name: 'Gás de Cozinha', categoryId: categories[1].id, category: categories[1], paid: true, date: "28/08/2019", amount: "70,80", type: "expense" } as Entry
        ]
        return { categories, entries }
    }
}