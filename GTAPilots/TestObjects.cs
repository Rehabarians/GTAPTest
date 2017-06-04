using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GTANetworkServer;
using GTANetworkShared;

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
            API.createObject(-1116116298, new Vector3(1310.02991, 3174.22656, 39.7778435), new Vector3(0.248946995, 0.868111372, 110.633514));
            API.createObject(-1116116298, new Vector3(1307.70374, 3180.40308, 39.7491722), new Vector3(0.248946995, 0.868111372, 110.633514));
            API.createObject(-1116116298, new Vector3(1305.37756, 3186.57935, 39.7204971), new Vector3(0.248946995, 0.868111372, 110.633514));
            API.createObject(-1116116298, new Vector3(1304.08301, 3190.0166, 39.7045403), new Vector3(0.248946995, 0.868111372, 110.633514));
            API.createObject(-1116116298, new Vector3(1304.07056, 3190.00732, 38.7146645), new Vector3(0.248946995, 0.868111372, 110.633514));
            API.createObject(-1116116298, new Vector3(1304.05798, 3189.99805, 37.7247849), new Vector3(0.248946995, 0.868111372, 110.633514));
            API.createObject(-1116116298, new Vector3(1310.01636, 3174.21997, 38.7879562), new Vector3(0.248946995, 0.868111372, 110.633514));
            API.createObject(-1116116298, new Vector3(1310.00378, 3174.21069, 37.7980804), new Vector3(0.248946995, 0.868111372, 110.633514));
            API.createObject(-1116116298, new Vector3(1307.67871, 3180.38428, 37.7694206), new Vector3(0.248946995, 0.868111372, 110.633514));
            API.createObject(-1116116298, new Vector3(1306.36414, 3183.875, 37.7532158), new Vector3(0.248946995, 0.868111372, 110.633514));
            API.createObject(-1116116298, new Vector3(1306.37671, 3183.88428, 38.7530899), new Vector3(0.248946995, 0.868111372, 110.633514));
            API.createObject(-1116116298, new Vector3(1307.69141, 3180.3938, 38.7692947), new Vector3(0.248946995, 0.868111372, 110.633514));
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

            API.createMarker(2, new Vector3(-2361.174, 3249.038, 30.81074), new Vector3(1, 0, 0), new Vector3(0, 0, -36.70571), new Vector3(2, 2, 2), 225, 60, 60, 10, 0);
            API.createTextLabel("Press enter to use elevator", new Vector3(-2361.174, 3249.038, 32.81074), 5, 2, true, 0);
            API.createTextLabel("Press enter to use elevator", new Vector3(-2361.174, 3249.038, 92.81074), 5, 2, true, 0);

        }
    }
}
