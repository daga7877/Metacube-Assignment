import { LightningElement, track} from 'lwc';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL from '@salesforce/schema/Contact.Email';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import createContact from '@salesforce/apex/createContact.createContact';

export default class CreateRecordWithFieldIntigrity extends LightningElement {

    @track fname = FIRSTNAME_FIELD;
    @track lname = LASTNAME_FIELD;
    @track email = EMAIL;
    @track phone = PHONE_FIELD;
    rec = {
        FirstName:this.fname,
        LastName : this.lname,
        Email : this.email,
        Phone : this.phone,
    }

    handleFnameChange(event) {
        this.rec.FirstName = event.target.value;
        
    }

    handleLnameChange(event) {
        this.rec.LastName = event.target.value;
        
    }
    
    handleEmailChange(event) {
        this.rec.Email = event.target.value;
        
    }
    
    handlePhnChange(event) {
        this.rec.Phone = event.target.value;
        
    }

    handleClick() {
        createContact({ contact : this.rec })
            .then(result => {
                this.message = result;
                this.error = undefined;
                if(this.message !== undefined) {
                    this.rec.Name = '';
                    this.rec.Email = '';
                    this.rec.Phone = '';
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Contact created',
                            variant: 'success',
                        }),
                    );
                }
                
                
            })
            .catch(error => {
                this.message = undefined;
                this.error = error;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
               
            });
    }
}