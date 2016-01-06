import {Pipe} from 'angular2/core';

@Pipe({
  name: 'userFilter',
  pure: false
})
export class UserFilterPipe {
  private retval;
  
  transform(value, [username]) {
    console.log('checking pipe', value);
    var newRetval = value.filter(i => {
      return i.assignee === null || !!username && i.assignee === username
    });
    
    // console.log('newRetVal')
    if(!newRetval || !this.retval || newRetval.length !== this.retval.length) {
      console.log('updating retval');
      this.retval = newRetval;
    }
    
    console.log('retval', this.retval);
    return this.retval;
    
  }
}


@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe {
  transform(value:number, args:string[]) : any {
    return Math.pow(value, parseInt(args[0] || '1', 10));
  }
}