import { Module } from '@nestjs/common';
import { AutomationModule } from './modules/automation/automation.module';

@Module({
  imports: [
    AutomationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
