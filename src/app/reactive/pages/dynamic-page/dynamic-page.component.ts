import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    favoriteGames: this.fb.array([
      ['League of Legends', Validators.required],
      ['Elder Ring', Validators.required],
    ])
  });

  public newFavorite: FormControl = new FormControl('', Validators.required );

  constructor( private fb: FormBuilder ){}

  get favoriteGames(){
    return this.myForm.get('favoriteGames') as FormArray;
  }

  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  isValidFieldInArray( FormArray: FormArray, index: number){
    return FormArray.controls[index].errors && FormArray.controls[index].touched;
  }

  getFieldError( field: string ): string | null{

    if ( !this.myForm.controls[field] ) {
      return null;
  }

  const errors = this.myForm.controls[field].errors || {};

  for ( const key of Object.keys(errors) ) {
    switch( key ){
      case 'required':
        return 'Este campo es requerido';

      case 'minlength':
        return `Mínimo ${ errors['minLength'].requiredLength } caracteres`;
    }
  }

  return null;
  }

  onAddToFavorites(): void {
    if ( this.newFavorite.invalid ) return;
    const newFavoriteGame = this.newFavorite.value;

    this.favoriteGames.push( this.fb.control( newFavoriteGame, Validators.required ) );

    this.newFavorite.reset();
  }

  OnDeleteFavorite( index: number): void {
    this.favoriteGames.removeAt(index);
  }

  onSubmit(): void {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    (this.myForm.controls['favoriteGames'] as FormArray ) = this.fb.array([]);
    this.myForm.reset();

  }

}
