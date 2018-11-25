import { HomeModulesModule } from './home-modules.module';

describe('HomeModulesModule', () => {
  let homeModulesModule: HomeModulesModule;

  beforeEach(() => {
    homeModulesModule = new HomeModulesModule();
  });

  it('should create an instance', () => {
    expect(homeModulesModule).toBeTruthy();
  });
});
