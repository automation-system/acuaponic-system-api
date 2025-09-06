-- CreateTable
CREATE TABLE `automation` (
    `automation_id` VARCHAR(36) NOT NULL,
    `type` VARCHAR(150) NULL,
    `name` VARCHAR(150) NULL,
    `address` VARCHAR(150) NULL,
    `start_date` DATETIME(3) NULL,
    `end_date` DATETIME(3) NULL,

    PRIMARY KEY (`automation_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ph` (
    `ph_id` VARCHAR(36) NOT NULL,
    `analog_digital_converter` INTEGER NULL,
    `voltaje` DECIMAL(3, 2) NULL,
    `ph_value` DECIMAL(2, 2) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `automationId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ph_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dht22_sensor` (
    `dht22_sensor_id` VARCHAR(36) NOT NULL,
    `temperature_celsius` DECIMAL(3, 2) NULL,
    `temperature_fahrenheit` DECIMAL(3, 2) NULL,
    `temperature_kelvin` DECIMAL(3, 2) NULL,
    `humidity` DECIMAL(2, 2) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `automationId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`dht22_sensor_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ds18b20_sensor` (
    `ds18b20_sensor_id` VARCHAR(36) NOT NULL,
    `temperature_celsius` DECIMAL(3, 2) NULL,
    `temperature_fahrenheit` DECIMAL(3, 2) NULL,
    `temperature_kelvin` DECIMAL(3, 2) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `automationId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ds18b20_sensor_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `actuator` (
    `actuator_id` VARCHAR(36) NOT NULL,
    `type` VARCHAR(50) NULL,
    `status` BOOLEAN NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `automationId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`actuator_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ultrasonic_distance_sensor` (
    `ultrasonic_distance_sensor_id` VARCHAR(36) NOT NULL,
    `time` INTEGER NULL,
    `distance` DECIMAL(3, 2) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `automationId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ultrasonic_distance_sensor_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `turbidity_sensor` (
    `turbidity_sensor_id` VARCHAR(36) NOT NULL,
    `analog_digital_converter` INTEGER NULL,
    `voltaje` DECIMAL(3, 2) NULL,
    `turbidity` INTEGER NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `automationId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`turbidity_sensor_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sensor` (
    `sensor_id` INTEGER NOT NULL,
    `name` VARCHAR(45) NULL,
    `code` VARCHAR(45) NULL,
    `data` TEXT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `automationId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`sensor_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ph` ADD CONSTRAINT `ph_automationId_fkey` FOREIGN KEY (`automationId`) REFERENCES `automation`(`automation_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dht22_sensor` ADD CONSTRAINT `dht22_sensor_automationId_fkey` FOREIGN KEY (`automationId`) REFERENCES `automation`(`automation_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ds18b20_sensor` ADD CONSTRAINT `ds18b20_sensor_automationId_fkey` FOREIGN KEY (`automationId`) REFERENCES `automation`(`automation_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `actuator` ADD CONSTRAINT `actuator_automationId_fkey` FOREIGN KEY (`automationId`) REFERENCES `automation`(`automation_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ultrasonic_distance_sensor` ADD CONSTRAINT `ultrasonic_distance_sensor_automationId_fkey` FOREIGN KEY (`automationId`) REFERENCES `automation`(`automation_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `turbidity_sensor` ADD CONSTRAINT `turbidity_sensor_automationId_fkey` FOREIGN KEY (`automationId`) REFERENCES `automation`(`automation_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sensor` ADD CONSTRAINT `sensor_automationId_fkey` FOREIGN KEY (`automationId`) REFERENCES `automation`(`automation_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
