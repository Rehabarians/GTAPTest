using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GrandTheftMultiplayer.Server;
using GrandTheftMultiplayer.Server.API;
using GrandTheftMultiplayer.Server.Managers;
using GrandTheftMultiplayer.Server.Elements;
using GrandTheftMultiplayer.Server.Constant;
using GrandTheftMultiplayer.Shared;
using GrandTheftMultiplayer.Shared.Math;

namespace GTAPilots
{
    public class TestObjects : Script
    {
        public TestObjects()
        {
            API.onResourceStart += Start;
        }
        private void Start()
        {
            API.requestIpl("hei_carrier");
            API.requestIpl("hei_carrier_DistantLights");
            API.requestIpl("hei_Carrier_int1");
            API.requestIpl("hei_Carrier_int2");
            API.requestIpl("hei_Carrier_int3");
            API.requestIpl("hei_Carrier_int4");
            API.requestIpl("hei_Carrier_int5");
            API.requestIpl("hei_Carrier_int6");
            API.requestIpl("hei_carrier_LODLights");

            API.createObject(-984871726, new Vector3(1318.50781, 3179.98486, 39.9164276), new Vector3(0, 89.0969009, -53.3645744));
            API.createObject(-984871726, new Vector3(1314.27844, 3191.2146, 39.8642693), new Vector3(0, 89.0969009, -53.3645744));
            API.createObject(-984871726, new Vector3(1307.72827, 3188.74829, 39.9703751), new Vector3(0, 89.0969009, -53.3645744));
            API.createObject(-984871726, new Vector3(1320.82874, 3193.68115, 39.7581635), new Vector3(0, 89.0969009, -53.3645744));
            API.createObject(-984871726, new Vector3(1327.37891, 3196.14746, 39.6520576), new Vector3(0, 89.0969009, -53.3645744));
            API.createObject(-984871726, new Vector3(1331.60828, 3184.91772, 39.704216), new Vector3(0, 89.0969009, -53.3645744));
            API.createObject(-984871726, new Vector3(1325.05811, 3182.45117, 39.8103218), new Vector3(0, 89.0969009, -53.3645744));
            API.createObject(-1116116298, new Vector3(1310.02991, 3174.22656, 39.7778702), new Vector3(0.249065667, 0.868525088, 110.633514));
            API.createObject(-1116116298, new Vector3(1307.70374, 3180.40308, 39.7491837), new Vector3(0.249065667, 0.868525088, 110.633514));
            API.createObject(-1116116298, new Vector3(1305.37756, 3186.57935, 39.7204971), new Vector3(0.249065667, 0.868525088, 110.633514));
            API.createObject(-1116116298, new Vector3(1304.08301, 3190.0166, 39.7045326), new Vector3(0.249065667, 0.868525088, 110.633514));
            API.createObject(-1116116298, new Vector3(1304.07056, 3190.00732, 38.714653), new Vector3(0.249065667, 0.868525088, 110.633514));
            API.createObject(-1116116298, new Vector3(1304.05798, 3189.99805, 37.7247772), new Vector3(0.249065667, 0.868525088, 110.633514));
            API.createObject(-1116116298, new Vector3(1310.01636, 3174.21997, 38.7879829), new Vector3(0.249065667, 0.868525088, 110.633514));
            API.createObject(-1116116298, new Vector3(1310.00378, 3174.21069, 37.7981071), new Vector3(0.249065667, 0.868525088, 110.633514));
            API.createObject(-1116116298, new Vector3(1307.67871, 3180.38428, 37.7694321), new Vector3(0.249065667, 0.868525088, 110.633514));
            API.createObject(-1116116298, new Vector3(1306.36401, 3183.875, 37.7532196), new Vector3(0.249065667, 0.868525088, 110.633514));
            API.createObject(-1116116298, new Vector3(1306.37671, 3183.88428, 38.7530937), new Vector3(0.249065667, 0.868525088, 110.633514));
            API.createObject(-1116116298, new Vector3(1307.69141, 3180.3938, 38.7693062), new Vector3(0.249065667, 0.868525088, 110.633514));
            API.createObject(-1116116298, new Vector3(1306.11633, 3194.57568, 39.6358948), new Vector3(0.868567526, -0.249011338, 20.6373005));
            API.createObject(-1116116298, new Vector3(1312.38586, 3196.93628, 39.5343361), new Vector3(0.868567526, -0.249011338, 20.6373005));
            API.createObject(-1116116298, new Vector3(1318.46814, 3199.22656, 39.4358101), new Vector3(0.868567526, -0.249011338, 20.6373005));
            API.createObject(-1116116298, new Vector3(1324.64417, 3201.55225, 39.3357658), new Vector3(0.868567526, -0.249011338, 20.6373005));
            API.createObject(-1116116298, new Vector3(1325.87939, 3202.01733, 39.3157578), new Vector3(0.868567526, -0.249011338, 20.6373005));
            API.createObject(-1116116298, new Vector3(1306.10376, 3194.56641, 38.646019), new Vector3(0.868567526, -0.249011338, 20.6373005));
            API.createObject(-1116116298, new Vector3(1306.09131, 3194.55688, 37.6561432), new Vector3(0.868567526, -0.249011338, 20.6373005));
            API.createObject(-1116116298, new Vector3(1312.37329, 3196.927, 38.5444603), new Vector3(0.868567526, -0.249011338, 20.6373005));
            API.createObject(-1116116298, new Vector3(1318.45569, 3199.21729, 38.4459343), new Vector3(0.868567526, -0.249011338, 20.6373005));
            API.createObject(-1116116298, new Vector3(1324.63159, 3201.54272, 38.34589), new Vector3(0.868567526, -0.249011338, 20.6373005));
            API.createObject(-1116116298, new Vector3(1325.86682, 3202.00781, 38.325882), new Vector3(0.868567526, -0.249011338, 20.6373005));
            API.createObject(-1116116298, new Vector3(1325.87939, 3202.01733, 39.3157578), new Vector3(0.868567526, -0.249011338, 20.6373005));
            API.createObject(-1116116298, new Vector3(1330.42896, 3199.97974, 39.2773552), new Vector3(0.24909389, 0.868525028, 110.633514));
            API.createObject(-1116116298, new Vector3(1332.72693, 3193.87817, 39.3056946), new Vector3(0.24909389, 0.868525028, 110.633514));
            API.createObject(-1116116298, new Vector3(1335.01782, 3187.79541, 39.3339462), new Vector3(0.24909389, 0.868525028, 110.633514));
            API.createObject(-1116116298, new Vector3(1337.34399, 3181.6189, 39.3626328), new Vector3(0.24909389, 0.868525028, 110.633514));
            API.createObject(-1116116298, new Vector3(1335.00513, 3187.78589, 38.3340721), new Vector3(0.24909389, 0.868525028, 110.633514));
            API.createObject(-1116116298, new Vector3(1332.71423, 3193.8689, 38.3058167), new Vector3(0.24909389, 0.868525028, 110.633514));
            API.createObject(1804615079, new Vector3(1306.95129, 3182.08838, 41.6070137), new Vector3(-1.86264348e-09, 2.08441112e-10, -69.3480606));
            API.createObject(-984871726, new Vector3(1318.50781, 3179.98486, 39.9164276), new Vector3(163.999985, 89.0971222, -53.3645706));
            API.createObject(-984871726, new Vector3(1311.95764, 3177.51831, 40.0225334), new Vector3(163.999985, 89.0971222, -53.3645706));
            API.createObject(-984871726, new Vector3(1318.50781, 3179.98486, 39.9164772), new Vector3(163.999985, 89.0971222, -53.3645706));
            API.createObject(-984871726, new Vector3(1314.27844, 3191.2146, 39.8643456), new Vector3(163.999985, 89.0971222, -53.3645706));
            API.createObject(-984871726, new Vector3(1307.72827, 3188.74805, 39.9704018), new Vector3(163.999985, 89.0971222, -53.3645706));
            API.createObject(-984871726, new Vector3(1320.82874, 3193.68115, 39.7582893), new Vector3(163.999985, 89.0971222, -53.3645706));
            API.createObject(-984871726, new Vector3(1327.37891, 3196.14746, 39.6522331), new Vector3(163.999985, 89.0971222, -53.3645706));
            API.createObject(-984871726, new Vector3(1331.60828, 3184.91772, 39.7043648), new Vector3(163.999985, 89.0971222, -53.3645706));
            API.createObject(-984871726, new Vector3(1325.05811, 3182.45117, 39.810421), new Vector3(163.999985, 89.0971222, -53.3645706));
            API.createObject(-1116116298, new Vector3(1310.02991, 3174.22656, 39.7778435), new Vector3(0.248946995, 0.868111372, 20.633514));
            API.createObject(-1116116298, new Vector3(1307.70374, 3180.40308, 39.7491722), new Vector3(0.248946995, 0.868111372, 20.633514));
            API.createObject(-1116116298, new Vector3(1305.37756, 3186.57935, 39.7204971), new Vector3(0.248946995, 0.868111372, 20.633514));
            API.createObject(-1116116298, new Vector3(1304.08301, 3190.0166, 39.7045403), new Vector3(0.248946995, 0.868111372, 20.633514));
            API.createObject(-1116116298, new Vector3(1304.07056, 3190.00732, 38.7146645), new Vector3(0.248946995, 0.868111372, 20.633514));
            API.createObject(-1116116298, new Vector3(1304.05798, 3189.99805, 37.7247849), new Vector3(0.248946995, 0.868111372, 20.633514));
            API.createObject(-1116116298, new Vector3(1310.01636, 3174.21997, 38.7879562), new Vector3(0.248946995, 0.868111372, 20.633514));
            API.createObject(-1116116298, new Vector3(1310.00378, 3174.21069, 37.7980804), new Vector3(0.248946995, 0.868111372, 20.633514));
            API.createObject(-1116116298, new Vector3(1307.67871, 3180.38428, 37.7694206), new Vector3(0.248946995, 0.868111372, 20.633514));
            API.createObject(-1116116298, new Vector3(1306.36414, 3183.875, 37.7532158), new Vector3(0.248946995, 0.868111372, 20.633514));
            API.createObject(-1116116298, new Vector3(1306.37671, 3183.88428, 38.7530899), new Vector3(0.248946995, 0.868111372, 20.633514));
            API.createObject(-1116116298, new Vector3(1307.69141, 3180.3938, 38.7692947), new Vector3(0.248946995, 0.868111372, 20.633514));
            API.createObject(-1116116298, new Vector3(1306.11633, 3194.57568, 39.6359367), new Vector3(0.86815393, -0.248892725, 20.6373043));
            API.createObject(-1116116298, new Vector3(1312.38586, 3196.93628, 39.5344276), new Vector3(0.86815393, -0.248892725, 20.6373043));
            API.createObject(-1116116298, new Vector3(1318.46814, 3199.22656, 39.4359474), new Vector3(0.86815393, -0.248892725, 20.6373043));
            API.createObject(-1116116298, new Vector3(1324.64417, 3201.55225, 39.3359528), new Vector3(0.86815393, -0.248892725, 20.6373043));
            API.createObject(-1116116298, new Vector3(1325.87939, 3202.01733, 39.3159523), new Vector3(0.86815393, -0.248892725, 20.6373043));
            API.createObject(-1116116298, new Vector3(1306.10376, 3194.56641, 38.6460609), new Vector3(0.86815393, -0.248892725, 20.6373043));
            API.createObject(-1116116298, new Vector3(1306.09131, 3194.55688, 37.6561852), new Vector3(0.86815393, -0.248892725, 20.6373043));
            API.createObject(-1116116298, new Vector3(1312.37329, 3196.927, 38.5445518), new Vector3(0.86815393, -0.248892725, 20.6373043));
            API.createObject(-1116116298, new Vector3(1318.45569, 3199.21729, 38.4460716), new Vector3(0.86815393, -0.248892725, 20.6373043));
            API.createObject(-1116116298, new Vector3(1324.63159, 3201.54272, 38.3460732), new Vector3(0.86815393, -0.248892725, 20.6373043));
            API.createObject(-1116116298, new Vector3(1325.86682, 3202.00781, 38.3260765), new Vector3(0.86815393, -0.248892725, 20.6373043));
            API.createObject(-1116116298, new Vector3(1325.87939, 3202.01733, 39.3159523), new Vector3(0.86815393, -0.248892725, 20.6373043));
            API.createObject(-1116116298, new Vector3(1330.42896, 3199.97974, 39.277565), new Vector3(0.248975217, 0.868111312, 110.633522));
            API.createObject(-1116116298, new Vector3(1332.72693, 3193.87817, 39.3058929), new Vector3(0.248975217, 0.868111312, 110.633522));
            API.createObject(-1116116298, new Vector3(1335.01782, 3187.79541, 39.3341331), new Vector3(0.248975217, 0.868111312, 110.633522));
            API.createObject(-1116116298, new Vector3(1337.34399, 3181.6189, 39.3628044), new Vector3(0.248975217, 0.868111312, 110.633522));
            API.createObject(-1116116298, new Vector3(1335.00525, 3187.78589, 38.3342552), new Vector3(0.248975217, 0.868111312, 110.633522));
            API.createObject(-1116116298, new Vector3(1332.71423, 3193.8689, 38.306015), new Vector3(0.248975217, 0.868111312, 110.633522));
            API.createObject(-1981136783, new Vector3(1300.37756, 3217.43628, 36.3188515), new Vector3(0, 0, 53.9827156));
            API.createObject(-1981136783, new Vector3(1300.49658, 3217.34961, 36.370285), new Vector3(0, 0, 53.9827156));
            API.createObject(-1688662905, new Vector3(1302.71777, 3225.62671, 37.3743095), new Vector3(0, 0, 66.3769531));
            API.createObject(-95585677, new Vector3(1307.20398, 3183.98022, 40.5919533), new Vector3(-0.868540168, 0.249033615, -159.362701));
            API.createObject(-95585677, new Vector3(1308.7854, 3184.57568, 40.5663338), new Vector3(-0.868540168, 0.249033615, -159.362701));
            API.createObject(1496566363, new Vector3(1316.15076, 3143.51465, 40.2919388), new Vector3(0, 0, -74.0184097));
            API.createObject(-1151045834, new Vector3(1311.71594, 3171.00586, 40.3669167), new Vector3(-0.868533313, 0.249033645, -159.362701));
            API.createObject(-1151045834, new Vector3(1312.48987, 3171.29541, 40.3543968), new Vector3(-0.868533313, 0.249033645, -159.362701));
            API.createObject(-1151045834, new Vector3(1313.26404, 3171.58496, 40.3418732), new Vector3(-0.868533313, 0.249033645, -159.362701));
            API.createObject(1065973630, new Vector3(1311.90125, 3171.07642, 40.5109291), new Vector3(-0.868533313, 0.249033645, -159.362701));
            API.createObject(1065973630, new Vector3(1312.67517, 3171.3645, 40.4984207), new Vector3(-0.868533313, 0.249033645, -159.362701));
            API.createObject(1065973630, new Vector3(1312.29211, 3171.22266, 40.7996407), new Vector3(-0.868533313, 0.249033645, -159.362701));
            API.createObject(-1151045834, new Vector3(1314.03772, 3171.87402, 40.329361), new Vector3(-0.868533313, 0.249033645, -159.362701));
            API.createObject(-1151045834, new Vector3(1314.8114, 3172.16333, 40.3168488), new Vector3(-0.868533313, 0.249033645, -159.362701));
            API.createObject(-1151045834, new Vector3(1315.58496, 3172.45239, 40.3043365), new Vector3(-0.868533313, 0.249033645, -159.362701));
            API.createObject(-1151045834, new Vector3(1316.35864, 3172.74146, 40.2918243), new Vector3(-0.868533313, 0.249033645, -159.362701));


            API.createObject(167557869, new Vector3(-1199.27393, -2292.97949, 12.9445581), new Vector3(0, 0, -29.9999676)); //Baggage Ramp
            API.createObject(167557869, new Vector3(-1198.425, -2291.5127, 12.9445581), new Vector3(0, 0, -29.9999676)); //Baggage Ramp
            API.createObject(167557869, new Vector3(-1197.60156, -2290.07373, 12.9445591), new Vector3(0, 0, -29.9999676)); //Baggage Ramp
            API.createObject(167557869, new Vector3(-1196.74316, -2288.58447, 12.9445581), new Vector3(0, 0, -29.9999676)); //Baggage Ramp

            #region Bar
            // Objects (Total: 65)
            API.createObject(110250881, new Vector3(351.316772, -2470.616, -17.3523254), new Vector3(-179.999985, -9.155275E-05, -90.00001), 0);
            API.createObject(-151113999, new Vector3(344.89, -2479.54, -19.7551231), new Vector3(0, -0, 0), 0);
            API.createObject(-151113999, new Vector3(344.89, -2470.15, -19.7551231), new Vector3(0, -0, 0), 0);
            API.createObject(-151113999, new Vector3(363.33, -2475.963, -19.7551231), new Vector3(0, -0, 0), 0);
            API.createObject(-151113999, new Vector3(363.33, -2458.53125, -19.5051231), new Vector3(0, -0, 0), 0);
            API.createObject(-151113999, new Vector3(355.4457, -2452.77075, -19.7551765), new Vector3(-4.462359E-05, 2.231179E-05, 89.99998), 0);
            API.createObject(-151113999, new Vector3(355.945068, -2480.70557, -19.7551765), new Vector3(-4.462358E-05, 2.23117477E-05, 89.99991), 0);
            API.createObject(-151113999, new Vector3(363.329529, -2467.657, -19.7551231), new Vector3(0, -0, 0), 0);
            API.createObject(-151113999, new Vector3(344.8954, -2460.77979, -19.7551231), new Vector3(0, -0, 0), 0);
            API.createObject(-151113999, new Vector3(346.099, -2452.77, -19.7551765), new Vector3(-4.462359E-05, 2.23117786E-05, 89.99996), 0);
            API.createObject(-151113999, new Vector3(346.621521, -2480.7, -19.7551765), new Vector3(-4.46235754E-05, 2.231173E-05, 89.9998856), 0);
            API.createObject(-1317235795, new Vector3(355.165863, -2456.77026, -17.25518), new Vector3(0, -0, 0), 0);
            API.createObject(690372739, new Vector3(354.0924, -2456.65283, -17.25518), new Vector3(0, -0, 0), 0);
            API.createObject(1099892058, new Vector3(352.848755, -2456.70215, -17.25518), new Vector3(0, -0, 0), 0);
            API.createObject(1413187371, new Vector3(348.3954, -2459.411, -16.1002026), new Vector3(1.00178795E-05, 5.00895567E-06, 90.49979), 0);
            API.createObject(110250881, new Vector3(349.578125, -2465.668, -13.2551231), new Vector3(1.00178786E-05, -5.00895567E-06, 90.249794), 0);
            API.createObject(1019644700, new Vector3(359.75, -2462.50781, -16.7551613), new Vector3(1.00177649E-05, 5.00895658E-06, 90.9996948), 0);
            API.createObject(322248450, new Vector3(351.459137, -2474.57178, -17.07), new Vector3(1.00178959E-05, 5.008955E-06, 89.999794), 0);
            API.createObject(110250881, new Vector3(354.58136, -2497.85742, -17.16), new Vector3(-179.999985, -9.15527562E-05, -90.00001), 0);
            API.createObject(322248450, new Vector3(356.794281, -2474.67969, -17.07), new Vector3(1.00178959E-05, 5.008955E-06, 89.999794), 0);
            API.createObject(551195458, new Vector3(359.81, -2467.9, -15.68), new Vector3(1.00177785E-05, 5.008954E-06, -90.0001755), 0);
            API.createObject(1299967108, new Vector3(359.83, -2470.54, -15.5529175), new Vector3(-1.38423116E-12, -5.00895476E-06, -89.99998), 0);
            API.createObject(-1279805564, new Vector3(355.978333, -2474.607, -16.1672153), new Vector3(0, -0, 0), 0);
            API.createObject(1982532724, new Vector3(349.894775, -2463.126, -16.84), new Vector3(0, -0, 0), 0);
            API.createObject(-232870343, new Vector3(349.9, -2464.4082, -17.06), new Vector3(1.001791E-05, -5.00895567E-06, 5.00895567E-06), 0);
            API.createObject(-232870343, new Vector3(349.9, -2461.83081, -17.06), new Vector3(1.00178549E-05, -5.00895567E-06, 179.9992), 0);
            API.createObject(1982532724, new Vector3(349.9, -2467.51, -16.84), new Vector3(0, -0, 0), 0);
            API.createObject(-232870343, new Vector3(349.9, -2466.12, -17.06), new Vector3(1.00178559E-05, -5.00895567E-06, 179.999252), 0);
            API.createObject(-232870343, new Vector3(349.9, -2468.91, -17.06), new Vector3(1.001791E-05, -5.00895567E-06, 5.00895567E-06), 0);
            API.createObject(245838764, new Vector3(359.7248, -2460.50513, -14.9837246), new Vector3(1.00178786E-05, -5.008957E-06, -89.7499847), 0);
            API.createObject(1433474877, new Vector3(356.44, -2456.34, -15.43), new Vector3(0, -0, 0), 0);
            API.createObject(-1842407088, new Vector3(358.809265, -2457.46484, -13.3522921), new Vector3(0, -0, 0), 0);
            API.createObject(-1842407088, new Vector3(349.829865, -2476.18433, -13.3522921), new Vector3(0, -0, 0), 0);
            API.createObject(-1331536247, new Vector3(359.40097, -2466.51, -17.2551765), new Vector3(1.00178759E-05, -5.00895749E-06, -89.7499847), 0);
            API.createObject(-956123246, new Vector3(350.6844, -2456.28, -15.5565271), new Vector3(0, -0, 0), 0);
            API.createObject(-754287693, new Vector3(356.598846, -2461.48633, -16.1290188), new Vector3(5.00895749E-06, 2.23117931E-05, -99.99999), 0);
            API.createObject(-1528307545, new Vector3(359.64, -2460.27, -14.9340792), new Vector3(2.7500062, 41.0000534, -86.74999), 0);
            API.createObject(916292624, new Vector3(359.65, -2461.4856, -14.9879217), new Vector3(4.250032, 39.999958, -86.9999542), 0);
            API.createObject(61087258, new Vector3(359.65, -2462.52954, -14.9178152), new Vector3(2.27666351E-05, 41.0000267, -86.99997), 0);
            API.createObject(-708789241, new Vector3(356.82, -2459.13, -16.32), new Vector3(-88.50006, 9.49823152E-05, -52.2503624), 0);
            API.createObject(-315721232, new Vector3(358.4229, -2457.41064, -16.44), new Vector3(1.00178713E-05, -5.00895567E-06, -49.7499962), 0);
            API.createObject(650320113, new Vector3(356.57, -2459.33, -16.81), new Vector3(0, -0, 0), 0);
            API.createObject(-742198632, new Vector3(353.98587, -2476.96436, -17.0628662), new Vector3(1.001786E-05, 5.00895567E-06, -179.999557), 0);
            API.createObject(-462817101, new Vector3(349.286957, -2470.48926, -17.2551575), new Vector3(1.00178941E-05, 5.00895567E-06, 89.99982), 0);
            API.createObject(-946793326, new Vector3(359.264618, -2458.89014, -17.2551746), new Vector3(0, -0, 0), 0);
            API.createObject(305924745, new Vector3(356.400543, -2461.461, -13.3522921), new Vector3(0, -0, 0), 0);
            API.createObject(305924745, new Vector3(356.18042, -2466.80933, -13.3522921), new Vector3(0, -0, 0), 0);
            API.createObject(305924745, new Vector3(356.0841, -2472.72388, -13.3522921), new Vector3(0, -0, 0), 0);
            API.createObject(305924745, new Vector3(350.599884, -2472.75122, -13.3522921), new Vector3(0, -0, 0), 0);
            API.createObject(305924745, new Vector3(350.780975, -2466.756, -13.3522921), new Vector3(0, -0, 0), 0);
            API.createObject(305924745, new Vector3(351.794434, -2461.65161, -13.3522921), new Vector3(0, -0, 0), 0);
            API.createObject(-1851510046, new Vector3(348.4, -2465.75, -15.85), new Vector3(1.001785E-05, -5.0089584E-06, 89.93), 0);
            API.createObject(-1851510046, new Vector3(359.83, -2466.02734, -15.85), new Vector3(1.001785E-05, -5.00895931E-06, 89.9300156), 0);
            API.createObject(-1851510046, new Vector3(348.41, -2474.463, -15.6), new Vector3(1.001785E-05, -5.00895931E-06, 89.9300156), 0);
            API.createObject(-1829764702, new Vector3(355.6848, -2462.175, -17.25517), new Vector3(1.0017895E-05, 5.00895567E-06, 84.9998245), 0);
            API.createObject(-1829764702, new Vector3(355.8284, -2463.845, -17.25517), new Vector3(1.00178877E-05, -5.00895567E-06, 103.749664), 0);
            API.createObject(-1829764702, new Vector3(355.705627, -2460.357, -17.25517), new Vector3(1.00178941E-05, -5.0089543E-06, 88.74981), 0);
            API.createObject(-1829764702, new Vector3(357.1782, -2465.6355, -17.25517), new Vector3(1.00178559E-05, -5.00895658E-06, 149.249527), 0);
            API.createObject(643522702, new Vector3(359.51, -2462.20361, -16.5051727), new Vector3(1.001785E-05, -5.00895567E-06, -179.250549), 0);
            API.createObject(-1851510046, new Vector3(359.78, -2474.685, -15.6), new Vector3(1.00178513E-05, -5.00895931E-06, 89.93002), 0);
            API.createObject(1758176010, new Vector3(349.495026, -2463.09326, -16.28), new Vector3(0, -0, 0), 0);
            API.createObject(-715967502, new Vector3(350.023926, -2467.545, -16.4174137), new Vector3(0, -0, 0), 0);
            API.createObject(348272579, new Vector3(356.9979, -2464.46777, -16.1121063), new Vector3(0, -0, 0), 0);
            API.createObject(-1113392619, new Vector3(359.83, -2469.14, -15.33), new Vector3(1.00178695E-05, 5.00895158E-06, -89.99998), 0);
            API.createObject(-1814664762, new Vector3(353.9843, -2477.20557, -14.4903755), new Vector3(0, -0, 179.999786), 0);
            #endregion

            API.createMarker(2, new Vector3(-2361.174, 3249.038, 30.81074), new Vector3(1, 0, 0), new Vector3(0, 0, -36.70571), new Vector3(2, 2, 2), 225, 60, 60, 10, 0);
            API.createTextLabel("Press enter to use elevator", new Vector3(-2361.174, 3249.038, 32.81074), 5, 2, true, 0);
            API.createTextLabel("Press enter to use elevator", new Vector3(-2361.174, 3249.038, 92.81074), 5, 2, true, 0);

        }
    }
}
