import { AppComponent } from '../app/app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent();
  });

  it('should have a title', () => {
    expect(fixture.title).toEqual('axel');
  });
});
