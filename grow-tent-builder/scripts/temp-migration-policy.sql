-- ============================================
-- TEMPORARY INSERT POLICIES FOR MIGRATION
-- ============================================
-- Run this BEFORE migration, then remove after

-- Allow public INSERT for feeding_schedules (temporary)
CREATE POLICY "Temp insert feeding_schedules" 
    ON feeding_schedules 
    FOR INSERT 
    WITH CHECK (true);

-- Allow public INSERT for preset_sets (temporary)
CREATE POLICY "Temp insert preset_sets" 
    ON preset_sets 
    FOR INSERT 
    WITH CHECK (true);

-- ============================================
-- AFTER MIGRATION - RUN THIS TO REMOVE TEMP POLICIES
-- ============================================
-- DROP POLICY "Temp insert feeding_schedules" ON feeding_schedules;
-- DROP POLICY "Temp insert preset_sets" ON preset_sets;
