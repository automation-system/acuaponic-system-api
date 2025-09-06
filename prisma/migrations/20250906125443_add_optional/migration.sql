/*
  Warnings:

  - Made the column `type` on table `actuator` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `actuator` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `automation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `automation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `temperature_celsius` on table `dht22_sensor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `humidity` on table `dht22_sensor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `temperature_celsius` on table `ds18b20_sensor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ph_value` on table `ph` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `sensor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `data` on table `sensor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `turbidity` on table `turbidity_sensor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `distance` on table `ultrasonic_distance_sensor` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `actuator` DROP FOREIGN KEY `actuator_automationId_fkey`;

-- DropForeignKey
ALTER TABLE `dht22_sensor` DROP FOREIGN KEY `dht22_sensor_automationId_fkey`;

-- DropForeignKey
ALTER TABLE `ds18b20_sensor` DROP FOREIGN KEY `ds18b20_sensor_automationId_fkey`;

-- DropForeignKey
ALTER TABLE `ph` DROP FOREIGN KEY `ph_automationId_fkey`;

-- DropForeignKey
ALTER TABLE `sensor` DROP FOREIGN KEY `sensor_automationId_fkey`;

-- DropForeignKey
ALTER TABLE `turbidity_sensor` DROP FOREIGN KEY `turbidity_sensor_automationId_fkey`;

-- DropForeignKey
ALTER TABLE `ultrasonic_distance_sensor` DROP FOREIGN KEY `ultrasonic_distance_sensor_automationId_fkey`;

-- DropIndex
DROP INDEX `actuator_automationId_fkey` ON `actuator`;

-- DropIndex
DROP INDEX `dht22_sensor_automationId_fkey` ON `dht22_sensor`;

-- DropIndex
DROP INDEX `ds18b20_sensor_automationId_fkey` ON `ds18b20_sensor`;

-- DropIndex
DROP INDEX `ph_automationId_fkey` ON `ph`;

-- DropIndex
DROP INDEX `sensor_automationId_fkey` ON `sensor`;

-- DropIndex
DROP INDEX `turbidity_sensor_automationId_fkey` ON `turbidity_sensor`;

-- DropIndex
DROP INDEX `ultrasonic_distance_sensor_automationId_fkey` ON `ultrasonic_distance_sensor`;

-- AlterTable
ALTER TABLE `actuator` MODIFY `type` VARCHAR(50) NOT NULL,
    MODIFY `status` BOOLEAN NOT NULL,
    MODIFY `automationId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `automation` MODIFY `type` VARCHAR(150) NOT NULL,
    MODIFY `name` VARCHAR(150) NOT NULL;

-- AlterTable
ALTER TABLE `dht22_sensor` MODIFY `temperature_celsius` DECIMAL(3, 2) NOT NULL,
    MODIFY `humidity` DECIMAL(2, 2) NOT NULL,
    MODIFY `automationId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `ds18b20_sensor` MODIFY `temperature_celsius` DECIMAL(3, 2) NOT NULL,
    MODIFY `automationId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `ph` MODIFY `ph_value` DECIMAL(2, 2) NOT NULL,
    MODIFY `automationId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `sensor` MODIFY `name` VARCHAR(45) NOT NULL,
    MODIFY `data` TEXT NOT NULL,
    MODIFY `automationId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `turbidity_sensor` MODIFY `turbidity` INTEGER NOT NULL,
    MODIFY `automationId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `ultrasonic_distance_sensor` MODIFY `distance` DECIMAL(3, 2) NOT NULL,
    MODIFY `automationId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `ph` ADD CONSTRAINT `ph_automationId_fkey` FOREIGN KEY (`automationId`) REFERENCES `automation`(`automation_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dht22_sensor` ADD CONSTRAINT `dht22_sensor_automationId_fkey` FOREIGN KEY (`automationId`) REFERENCES `automation`(`automation_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ds18b20_sensor` ADD CONSTRAINT `ds18b20_sensor_automationId_fkey` FOREIGN KEY (`automationId`) REFERENCES `automation`(`automation_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `actuator` ADD CONSTRAINT `actuator_automationId_fkey` FOREIGN KEY (`automationId`) REFERENCES `automation`(`automation_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ultrasonic_distance_sensor` ADD CONSTRAINT `ultrasonic_distance_sensor_automationId_fkey` FOREIGN KEY (`automationId`) REFERENCES `automation`(`automation_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `turbidity_sensor` ADD CONSTRAINT `turbidity_sensor_automationId_fkey` FOREIGN KEY (`automationId`) REFERENCES `automation`(`automation_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sensor` ADD CONSTRAINT `sensor_automationId_fkey` FOREIGN KEY (`automationId`) REFERENCES `automation`(`automation_id`) ON DELETE SET NULL ON UPDATE CASCADE;
