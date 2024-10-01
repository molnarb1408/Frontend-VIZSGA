//KOMPONENS létrehozása teszt
  it('Létrehozva a [feladat] komponens', () => {
    expect(component).toBeTruthy();
  });



  //OLDAL címkéje
  it('Vizsgafeladat címke', () => {
    const fixture = TestBed.createComponent(VizsgafeladatComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container h2')?.textContent).toContain('Angular modul megoldása');
  });



  //INPUT mező tesztjei
  it('Input mező címkéje', () => {
    const fixture = TestBed.createComponent(VizsgafeladatComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container label')?.textContent).toContain('Add meg a súlyod kilógrammban:');
  });

  it('Input mező bootstrap kinézet', () => {
    const fixture = TestBed.createComponent(VizsgafeladatComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container input')?.classList).toContain('form-control');
  });

  it('Input mező azonosító', () => {
    const fixture = TestBed.createComponent(VizsgafeladatComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container input')?.id).toContain('sulyInput');
  });



  //BUTTON tesztjei
  it('Gomb felirat', () => {
    const fixture = TestBed.createComponent(VizsgafeladatComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container button')?.textContent).toContain('Eredmény mentése');
  });

  it('Gomb kinézete', () => {
    const fixture = TestBed.createComponent(VizsgafeladatComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container button')?.classList).toContain('btn-success');
  });

  it('Gomb mérete', () => {
    const fixture = TestBed.createComponent(VizsgafeladatComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container button')?.classList).toContain('form-control');
  });

  //Event teszt
  it('Két irányú adatkötés', () => {
    const fixture = TestBed.createComponent(VizsgafeladatComponent);
    component.suly = 5;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const element: HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#sulyInput");
      element.value = "5";
      element.dispatchEvent(new Event('input'));
      expect(element.value).toEqual(String(component.suly));
    });
  });