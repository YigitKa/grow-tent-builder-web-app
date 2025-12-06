-- Add missing columns to preset_sets table
-- Run this in Supabase SQL Editor

-- Add tent_size column
ALTER TABLE preset_sets 
ADD COLUMN IF NOT EXISTS tent_size VARCHAR(50);

-- Add media_type column
ALTER TABLE preset_sets 
ADD COLUMN IF NOT EXISTS media_type VARCHAR(50);

-- Add nutrient_brand column
ALTER TABLE preset_sets 
ADD COLUMN IF NOT EXISTS nutrient_brand VARCHAR(100);

-- Add plant_count column
ALTER TABLE preset_sets 
ADD COLUMN IF NOT EXISTS plant_count INTEGER DEFAULT 0;

-- Add items column (stores original items structure for compatibility)
ALTER TABLE preset_sets 
ADD COLUMN IF NOT EXISTS items JSONB DEFAULT '{}';

-- Verify columns were added
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'preset_sets';
