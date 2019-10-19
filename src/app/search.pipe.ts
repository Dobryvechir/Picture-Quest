import { Pipe, PipeTransform } from '@angular/core';
import { Quest } from './models/quest.model'


@Pipe({
    name: 'LockFilter'
})

export class SearchPipe implements PipeTransform {
    transform(quests: Quest[], searchTerm: string): Quest[] {

        if(!searchTerm){
            return quests;
    
        }
        return quests.filter(quest =>
            
            quest.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
            || quest.category.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
            || quest.subcategory.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
    
}