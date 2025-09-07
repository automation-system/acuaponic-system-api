/*
  Warnings:

  - You are about to alter the column `temperature_celsius` on the `dht22_sensor` table. The data in that column could be lost. The data in that column will be cast from `Decimal(3,2)` to `Decimal(5,2)`.
  - You are about to alter the column `temperature_fahrenheit` on the `dht22_sensor` table. The data in that column could be lost. The data in that column will be cast from `Decimal(3,2)` to `Decimal(5,2)`.
  - You are about to alter the column `temperature_kelvin` on the `dht22_sensor` table. The data in that column could be lost. The data in that column will be cast from `Decimal(3,2)` to `Decimal(5,2)`.
  - You are about to alter the column `humidity` on the `dht22_sensor` table. The data in that column could be lost. The data in that column will be cast from `Decimal(2,2)` to `Decimal(5,2)`.
  - You are about to alter the column `temperature_celsius` on the `ds18b20_sensor` table. The data in that column could be lost. The data in that column will be cast from `Decimal(3,2)` to `Decimal(5,2)`.
  - You are about to alter the column `temperature_fahrenheit` on the `ds18b20_sensor` table. The data in that column could be lost. The data in that column will be cast from `Decimal(3,2)` to `Decimal(5,2)`.
  - You are about to alter the column `temperature_kelvin` on the `ds18b20_sensor` table. The data in that column could be lost. The data in that column will be cast from `Decimal(3,2)` to `Decimal(5,2)`.
  - You are about to alter the column `voltaje` on the `ph` table. The data in that column could be lost. The data in that column will be cast from `Decimal(3,2)` to `Decimal(5,2)`.
  - You are about to alter the column `ph_value` on the `ph` table. The data in that column could be lost. The data in that column will be cast from `Decimal(2,2)` to `Decimal(5,2)`.
  - You are about to alter the column `voltaje` on the `turbidity_sensor` table. The data in that column could be lost. The data in that column will be cast from `Decimal(3,2)` to `Decimal(5,2)`.
  - You are about to alter the column `distance` on the `ultrasonic_distance_sensor` table. The data in that column could be lost. The data in that column will be cast from `Decimal(3,2)` to `Decimal(5,2)`.
  - A unique constraint covering the columns `[type]` on the table `actuator` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `dht22_sensor` MODIFY `temperature_celsius` DECIMAL(5, 2) NOT NULL,
    MODIFY `temperature_fahrenheit` DECIMAL(5, 2) NULL,
    MODIFY `temperature_kelvin` DECIMAL(5, 2) NULL,
    MODIFY `humidity` DECIMAL(5, 2) NOT NULL;

-- AlterTable
ALTER TABLE `ds18b20_sensor` MODIFY `temperature_celsius` DECIMAL(5, 2) NOT NULL,
    MODIFY `temperature_fahrenheit` DECIMAL(5, 2) NULL,
    MODIFY `temperature_kelvin` DECIMAL(5, 2) NULL;

-- AlterTable
ALTER TABLE `ph` MODIFY `voltaje` DECIMAL(5, 2) NULL,
    MODIFY `ph_value` DECIMAL(5, 2) NOT NULL;

-- AlterTable
ALTER TABLE `turbidity_sensor` MODIFY `voltaje` DECIMAL(5, 2) NULL;

-- AlterTable
ALTER TABLE `ultrasonic_distance_sensor` MODIFY `distance` DECIMAL(5, 2) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `actuator_type_key` ON `actuator`(`type`);
