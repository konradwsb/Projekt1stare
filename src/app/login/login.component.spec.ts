import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render form', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });

  it('should update username and password on input', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const usernameInput = compiled.querySelector('input[name="username"]') as HTMLInputElement;
    const passwordInput = compiled.querySelector('input[name="password"]') as HTMLInputElement;

    usernameInput.value = 'testuser';
    passwordInput.value = 'testpass';
    usernameInput.dispatchEvent(new Event('input'));
    passwordInput.dispatchEvent(new Event('input'));

    expect(component.username).toBe('testuser');
    expect(component.password).toBe('testpass');
  });

  it('should call onSubmit when form is submitted', () => {
    spyOn(component, 'onSubmit');

    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form') as HTMLFormElement;
    form.dispatchEvent(new Event('submit'));

    expect(component.onSubmit).toHaveBeenCalled();
  });
});
